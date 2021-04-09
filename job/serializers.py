from rest_framework import serializers

# from acount.serializers import Base64ImageField
from job import models
from acount import serializers as acount_serializer
from acount import models as acount_models


class AttachmentSerializer(serializers.ModelSerializer):
	# # file = acount_serializer.Base64ImageField(required=False)
	def create(self, validated_data):
		files = validated_data.pop('file')
		model_id = validated_data.pop('model_id')
		type = validated_data.pop('type')
		model = validated_data.pop('model')
		attachment = models.Attachment.objects.filter(model_id=model_id, type=type, model=model)
		if attachment.exists():
			obj = models.Attachment.objects.filter(model_id=model_id, type=type, model=model)
			obj.delete()
		attachment = models.Attachment.objects.create(model_id=model_id, type=type, model=model, file=files)
		return attachment

	class Meta:
		model = models.Attachment
		fields = '__all__'


class JobSerializer(serializers.ModelSerializer):
	skills = acount_serializer.SkillSerializers(many=True, write_only=True)

	def create(self, validated_data):
		skills = validated_data.pop('skills')
		job = models.Job.objects.create(**validated_data)

		for skill in skills:
			s = acount_models.Skill.objects.create(name=skill.get('name'))
			job.skills.add(s)

		return job

	def to_representation(self, instance):
		representation = super(JobSerializer, self).to_representation(instance)
		# print("representation representation" , representation)
		related_models = ['category', 'skills']
		# print("related_modelsrelated_models ", related_models)
		# for model in related_models:
		#     try:
		#         representation[model] = utils.to_dict(getattr(instance, model))
		#         print("representation[model] representation[model]", representation[model])
		#     except:
		#         representation[model] = None

		representation['skills'] = acount_serializer.SkillSerializers(instance.skills, many=True).data
		representation['category'] = acount_serializer.CategorySerializers(instance.category).data
		representation['client'] = acount_serializer.ClientProfileSerializers(instance.client).data

		return representation

	class Meta:
		model = models.Job
		fields = '__all__'


class JobReviewSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.JobReview
		fields = '__all__'


class OfferSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Offer
		fields = '__all__'


class InviteSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Invite
		fields = '__all__'


class ApplicationSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Application
		fields = '__all__'


class ContractSerializer(serializers.ModelSerializer):
	attachment = serializers.ListField(write_only=True)

	def __init__(self, *args, **kwargs):
		super(ContractSerializer, self).__init__(*args, **kwargs)

	def create(self, validated_data):
		attachment = validated_data.pop('attachment')
		contract = models.Contract.objects.create(
			**validated_data)

		for attachments in attachment:
			models.Attachment.objects.create(model_id=contract.id, model='contract', file=attachments,
											 type="attachment")
		return contract

	def to_representation(self, instance):
		representation = super(ContractSerializer, self).to_representation(instance)

		representation['job'] = JobSerializer(instance.job).data

		return representation

	class Meta:
		model = models.Contract
		fields = '__all__'


class WorkSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Work
		fields = '__all__'


class WorkChangesSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.WorkChanges
		fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Feedback
		fields = '__all__'


class FeedbackReviewSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.FeedbackReview
		fields = '__all__'


class DisputSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Dispute
		fields = '__all__'
