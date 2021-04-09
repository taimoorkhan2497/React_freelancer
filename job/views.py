from rest_framework.response import Response
from rest_framework import viewsets

from job import models as job_view
from job import serializers as job_serializer

from default.utils import isRoleFreelancer, isRoleClient, safeDelete


class JobViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = job_view.Job.objects.filter(deleted_at=None)
    serializer_class = job_serializer.JobSerializer
    search_fields = ['title']
    filterset_fields = ['skills', 'type', 'experience_level', 'budget',
                        'category']

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        if isRoleClient(request.user):
            queryset = queryset.filter(client=request.user.profile)
            print('client list', request.user.profile)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Job)
        return resp


class JobReviewViewSet(viewsets.ModelViewSet):
    queryset = job_view.JobReview.objects.filter(deleted_at=None)
    serializer_class = job_serializer.JobReviewSerializer
    search_fields = ['job_title']
    filterset_fields = ['status']

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.JobReview)
        return resp


class AttachmentViewSet(viewsets.ModelViewSet):
    queryset = job_view.Attachment.objects.all()
    serializer_class = job_serializer.AttachmentSerializer


class OfferViewSet(viewsets.ModelViewSet):
    queryset = job_view.Offer.objects.filter(deleted_at=None)
    serializer_class = job_serializer.OfferSerializer
    search_fields = ['job__title', 'title']
    filterset_fields = ['category', 'budget', 'status', 'due_date']

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Offer)
        return resp


class InviteViewSet(viewsets.ModelViewSet):
    queryset = job_view.Invite.objects.filter(deleted_at=None)
    serializer_class = job_serializer.InviteSerializer
    search_fields = ['cover_letter']
    filterset_fields = ['status', 'reject_reason', 'job__title', "client", "freelancer"]

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        if isRoleFreelancer(request.user):
            queryset = queryset.filter(freelancer=request.user.profile)
        elif isRoleClient(request.user):
            queryset = queryset.filter(client=request.user.profile)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Invite)
        return resp


class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = job_view.Application.objects.filter(deleted_at=None)
    serializer_class = job_serializer.ApplicationSerializer
    search_fields = ['job__title', 'description']
    filterset_fields = ['status', 'budget', ]

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        if isRoleFreelancer(request.user):
            queryset = queryset.filter(freelancer=request.user.profile)
        elif isRoleClient(request.user):
            job_id = request.GET.get('job_id', None)
            if job_id is not None and job_view.objects.filter(
                    client=request.user.profile,
                    id=job_id).exists():
                queryset = queryset.filter(job_id=job_id)
            else:
                queryset = []
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Application)
        return resp


class ContractViewSet(viewsets.ModelViewSet):
    queryset = job_view.Contract.objects.filter(deleted_at=None)
    serializer_class = job_serializer.ContractSerializer
    search_fields = ['job__title']
    filterset_fields = ['start_date', 'project_budget', 'status']

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        if isRoleFreelancer(request.user):
            queryset = queryset.filter(freelancer=request.user.profile)
        elif isRoleClient(request.user):
            queryset = queryset.filter(client=request.user.profile)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Contract)
        resp


class WorkViewSet(viewsets.ModelViewSet):
    queryset = job_view.Work.objects.filter(deleted_at=None)
    serializer_class = job_serializer.WorkSerializer
    search_fields = ['job__title']

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Work)
        return resp


class WorkChangesViewSet(viewsets.ModelViewSet):
    queryset = job_view.WorkChanges.objects.filter(deleted_at=None)
    serializer_class = job_serializer.WorkChangesSerializer

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.WorkChanges)
        return resp


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = job_view.Feedback.objects.filter(deleted_at=None)
    serializer_class = job_serializer.FeedbackSerializer
    search_fields = ['job__title', 'description']
    filterset_fields = ['type', 'rate', 'status']

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Feedback)
        return resp


class FeedbackReviewViewSet(viewsets.ModelViewSet):
    queryset = job_view.FeedbackReview.objects.filter(deleted_at=None)
    serializer_class = job_serializer.FeedbackReviewSerializer
    search_fields = ['type']

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Feedback)
        return resp


class DisputViewSet(viewsets.ModelViewSet):
    queryset = job_view.Dispute.objects.filter(deleted_at=None)
    serializer_class = job_serializer.DisputSerializer
    search_fields = ['job__title']
    filterset_fields = ['dispute_by']

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Feedback)
        return resp
