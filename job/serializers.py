from rest_framework import serializers

from job.models import Attachment, Job, Offer, Invite, Application, Contract, \
    Work, Feedback, Dispute, JobReview, FeedbackReview, WorkChanges


class AttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attachment
        fields = '__all__'


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'


class JobReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobReview
        fields = '__all__'


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'


class InviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invite
        fields = '__all__'


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'


class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = '__all__'


class WorkChangesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkChanges
        fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'


class FeedbackReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackReview
        fields = '__all__'


class DisputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dispute
        fields = '__all__'
