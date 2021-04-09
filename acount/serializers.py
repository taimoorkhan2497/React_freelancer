from rest_registration.api.serializers import DefaultRegisterUserSerializer
from django.conf import settings
from acount import models
from rest_framework import serializers
from django.contrib.auth.models import Group
import base64, six, uuid
from django.core.files.base import ContentFile
from rest_auth.models import TokenModel


class Base64ImageField(serializers.ImageField):

	def __init__(self, *args, **kwargs):
		self.represent_in_base64 = kwargs.pop('represent_in_base64', False)
		super(Base64ImageField, self).__init__(*args, **kwargs)

	def to_internal_value(self, data):

		if isinstance(data, six.string_types):
			if 'data:' in data and ';base64,' in data:
				header, data = data.split(';base64,')

			try:
				decoded_file = base64.b64decode(data)
			except TypeError:
				self.fail('invalid_image')

			if 'data-orig' in header:
				fname, garbage = header.split(';data:')
				garbage_val, file_name = fname.split('data-orig:')
				complete_file_name = "thumb_%s" % (file_name)
			else:
				file_name = str(uuid.uuid4())[:12]  # 12 characters are more than enough.
				file_extension = self.get_file_extension(file_name, decoded_file)
				complete_file_name = "%s.%s" % (file_name, file_extension,)
			data = ContentFile(decoded_file, name=complete_file_name)

		return super(Base64ImageField, self).to_internal_value(data)

	def get_file_extension(self, file_name, decoded_file):
		import imghdr

		extension = imghdr.what(file_name, decoded_file)
		extension = "jpg" if extension == "jpeg" else extension

		return extension

	def from_native(self, data):
		if isinstance(data, basestring) and data.startswith('data:image'):
			# base64 encoded image - decode
			format, imgstr = data.split(';base64,')  # format ~= data:image/X,
			ext = format.split('/')[-1]  # guess file extension

			data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

		return super(Base64ImageField, self).from_native(data)

	def to_representation(self, file):
		if self.represent_in_base64:
			try:
				with open(file.path, 'rb') as f:
					return base64.b64encode(f.read()).decode()
			except Exception as e:
				print
				'Fails to decode file: %s (%s)' % (e.message, type(e))
		else:
			return super(Base64ImageField, self).to_representation(file)


class CitySerializers(serializers.ModelSerializer):
	# id = serializers.IntegerField()
	class Meta:
		model = models.City
		fields = '__all__'
		validator = []


class CountrySerializers(serializers.ModelSerializer):
	# id = serializers.IntegerField()
	class Meta:
		model = models.Country
		fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
	id = serializers.IntegerField()

	def to_representation(self, instance):
		representation = super(UserSerializer, self).to_representation(instance)
		representation['profile'] = models.Profile.objects.filter(user=instance.id).values()
		return representation

	class Meta:
		model = models.User
		# fields = '__all__'
		fields = ['id', 'first_name', 'last_name']


class SkillSerializers(serializers.ModelSerializer):
	# id = serializers.IntegerField()
	class Meta:
		model = models.Skill
		fields = '__all__'


class CategorySerializers(serializers.ModelSerializer):
	class Meta:
		model = models.Category
		fields = '__all__'


class ProfileSerializers(serializers.ModelSerializer):
	avatar = Base64ImageField(required=False)
	ACCOUNT_TYPE_CHOICES = (
		('work', 'Work'),
		('hire', 'Hire'),
	)
	account_type = serializers.ChoiceField(choices=ACCOUNT_TYPE_CHOICES, required=False)

	def to_representation(self, instance):
		representation = super(ProfileSerializers, self).to_representation(instance)

		representation['user'] = UserSerializer(instance.user).data
		representation['city'] = CitySerializers(instance.city).data
		representation['country'] = CountrySerializers(instance.country).data
		representation['skills'] = SkillSerializers(instance.skills, many=True).data

		return representation

	def update(self, instance, validated_data):
		instance.updated_by = self.context['request'].user
		return super().update(instance, validated_data)

	def create(self, validated_data):
		if 'account_type' in validated_data:
			account_type = validated_data.pop('account_type')
			user = self.context['request'].user

			if account_type == 'work':
				user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))

			elif account_type == "hire":
				user.groups.add(Group.objects.get(name=settings.CLIENT_USER))

		validated_data['created_by'] = self.context['request'].user
		return super().create(validated_data)

	class Meta:
		model = models.Profile
		fields = '__all__'


class ClientProfileSerializers(serializers.ModelSerializer):
	def to_representation(self, instance):
		representation = super(ClientProfileSerializers, self).to_representation(instance)

		representation['skills'] = SkillSerializers(instance.skills, many=True).data
		representation['user'] = UserSerializer(instance.user).data

		return representation

	class Meta:
		model = models.ClientProfile
		fields = '__all__'


class FreelancerProfileSerializers(serializers.ModelSerializer):
	# from job.serializers import AttachmentSerializer
	# skills = SkillSerializers(many=True, required=False)
	# category = CategorySerializers(many=True, required=False)
	city = CitySerializers(required=False)
	country = CountrySerializers(required=False)
	ACCOUNT_TYPE_CHOICES = (
		('work', 'Work'),
		('hire', 'Hire'),
	)
	account_type = serializers.ChoiceField(choices=ACCOUNT_TYPE_CHOICES, required=False)

	# license = AttachmentSerializer(write_only=True, required=False)
	# id_card = AttachmentSerializer(write_only=True, required=False)
	# certification = AttachmentSerializer(write_only=True, required=False)
	user = UserSerializer(write_only=True, required=False)

	def create(self, validated_data):
		# 	skills = validated_data.pop('skills')
		# 	category = validated_data.pop('category')
		if 'account_type' in validated_data:
			account_type = validated_data.pop('account_type')
			user = self.context['request'].user

			if account_type == 'work':
				user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))

			elif account_type == "hire":
				user.groups.add(Group.objects.get(name=settings.CLIENT_USER))

		user = validated_data.pop('user')

		id = user.get('id')
		first_name = user.get('first_name')
		last_name = user.get('last_name')

		city = validated_data.pop('city')
		country = validated_data.pop('country')

		user = models.User.objects.get(pk=id)
		user.first_name = first_name
		user.last_name = last_name
		user.save()
		# license = validated_data.pop('license')
		# 	id_card = validated_data.pop('id_card')
		# 	certification = validated_data.pop('certification')
		#
		# user = models.User.objects.create(user)

		# 	Attachment.objects.create(**license)
		# 	Attachment.objects.create(**id_card)
		# 	Attachment.objects.create(**certification)
		city = models.City.objects.create(**city)
		country = models.Country.objects.create(**country)

		freelance_profile = models.FreelancerProfile.objects.create(user=user, city=city, country=country)

		# 	for data in skills:
		# 		k = models.Skill.objects.create(name=data.get('name'))
		# 		freelance_profile.skills.add(k)
		#
		# 	for data in category:
		# 		s = models.Category.objects.create(name=data.get('name'))
		# 		freelance_profile.category.add(s)
		#
		return freelance_profile

	def update(self, instance, validated_data):
		if 'user' in validated_data:
			user = validated_data.pop('user')
			user = UserSerializer(instance.user, data=user, partial=True)
			if user.is_valid():
				user.save()

		if 'country' in validated_data:
			country = validated_data.pop('country')
			country = CountrySerializers(instance.country, data=country)
			if country.is_valid():
				country.save()

		if 'city' in validated_data:
			city = validated_data.pop('city')
			city = CitySerializers(instance.city, data=city)
			if city.is_valid():
				city.save()

		# if 'skills' in validated_data:
		# 	skill = validated_data.pop('skills')
		# 	for data in skill:
		# 		k = models.Skill.objects.create(name=data.get('name'))
		# 		instance.skills.add(k)
		#
		# if 'category' in validated_data:
		# 	category = validated_data.pop('category')
		# 	for data in category:
		# 		c = models.Category.objects.create(name=data.get('name'))
		# 		instance.category.add(c)

		freelance_api = super().update(instance, validated_data)

		return freelance_api

	def to_representation(self, instance):
		representation = super(FreelancerProfileSerializers, self).to_representation(instance)

		representation['skills'] = SkillSerializers(instance.skills, many=True).data
		representation['category'] = CategorySerializers(instance.category, many=True).data
		representation['user'] = UserSerializer(instance.user).data
		representation['city'] = CitySerializers(instance.city).data
		representation['country'] = CountrySerializers(instance.country).data

		return representation

	class Meta:
		model = models.FreelancerProfile
		fields = '__all__'


class MyTokenSerializer(serializers.Serializer):
	token = serializers.SerializerMethodField()

	class Meta:
		fields = ('access_token')

	def get_token(self, obj):
		# Later you change the simpleJWT token for more secure!
		token_obj, created = TokenModel.objects.get_or_create(user=obj.user)
		token = "Token {0}".format(token_obj.key)
		return token


class QuestionSerializers(serializers.ModelSerializer):
	class Meta:
		model = models.Question
		fields = '__all__'


class SpecialitySerializers(serializers.ModelSerializer):
	class Meta:
		model = models.Speciality
		fields = '__all__'


class CustomRegisterUserSerializer(DefaultRegisterUserSerializer):
	ACCOUNT_TYPE_CHOICES = (
		('work', 'Work'),
		('hire', 'Hire'),
	)
	account_type = serializers.ChoiceField(choices=ACCOUNT_TYPE_CHOICES, required=False)

	"""
	Default serializer used for user registration. It will use these:
	* User fields
	* :ref:`user-hidden-fields-setting` setting
	* :ref:`user-public-fields-setting` setting
	to automagically generate the required serializer fields.
	"""

	def __init__(self, *args, **kwargs):
		super().__init__(*args, **kwargs)
		self.Meta.fields = self.Meta.fields + ('account_type',)

	def create(self, validated_data):
		if 'account_type' in validated_data:
			account_type = validated_data.pop('account_type')
		user = super().create(validated_data)
		# Profile(user=user).save()

		if 'account_type' in validated_data:
			if account_type == 'work':
				models.FreelancerProfile(user=user).save()
				user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))
			elif account_type == 'hire':
				models.ClientProfile(user=user).save()
				user.groups.add(Group.objects.get(name=settings.CLIENT_USER))
			else:
				user.groups.add(Group.objects.get(name=settings.ADMIN_USER))

		return user