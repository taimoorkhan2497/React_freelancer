from rest_registration.api.serializers import DefaultRegisterUserSerializer, \
    MetaObj
from django.contrib.auth import get_user_model
from rest_registration.utils.users import (
    get_user_field_names
)
import base64
from django.conf import settings

from acount.models import Profile, City, Skill, Category, Question, FreelancerProfile, ClientProfile, Speciality
from rest_framework import serializers
from django.contrib.auth.models import Group

# from django.core.files.base import ContentFile
# import base64


class CitySerilaizers(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class SkillSerilaizers(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class CategorySerilaizers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProfileSerilaizers(serializers.ModelSerializer):

    def update(self, instance, validated_data):
        instance.updated_by = self.context['request'].user
        return super().update(instance, validated_data)

    def create(self, validated_data):
        validated_data['created_by'] = self.context['request'].user
        return super().update(validated_data)

    class Meta:
        model = Profile
        fields = '__all__'


class ClientProfileSerilaizers(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = '__all__'


class FreelancerProfileSerilaizers(serializers.ModelSerializer):
    class Meta:
        model = FreelancerProfile
        fields = '__all__'


class QuestionSerilaizers(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class SpecialitySerilaizers(serializers.ModelSerializer):
    class Meta:
        model = Speciality
        fields = '__all__'


class CustomRegisterUserSerializer(DefaultRegisterUserSerializer):
    ACCOUNT_TYPE_CHOICES = (
        ('work', 'Work'),
        ('hire', 'Hire'),
    )
    account_type = serializers.ChoiceField(choices=ACCOUNT_TYPE_CHOICES)
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
        account_type = validated_data.pop('account_type')
        user = super().create(validated_data)
        # Profile(user=user).save()

        if account_type == 'work':
            FreelancerProfile(user=user).save()
            user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))
        elif account_type == 'hire':
            ClientProfile(user=user).save()
            user.groups.add(Group.objects.get(name=settings.CLIENT_USER))
        else:
            user.groups.add(Group.objects.get(name=settings.ADMIN_USER))

        return user

# class Base64ImageField(serializers.ImageField):
#     def from_native(self, data):
#         if isinstance(data, basestring) and data.startswith('data:image'):
#             # base64 encoded image - decode
#             format, imgstr = data.split(';base64,')  # format ~= data:image/X,
#             ext = format.split('/')[-1]  # guess file extension
#
#             data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)
#
#         return super(Base64ImageField, self).from_native(data)
