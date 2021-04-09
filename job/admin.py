from django.contrib import admin
from job import models

# Register your models here.
admin.site.register(models.Attachment)
admin.site.register(models.Job)
admin.site.register(models.JobReview)
admin.site.register(models.Offer)
admin.site.register(models.Invite)
admin.site.register(models.Application)
admin.site.register(models.Contract)
admin.site.register(models.Work)
admin.site.register(models.WorkChanges)
admin.site.register(models.Feedback)
admin.site.register(models.FeedbackReview)
admin.site.register(models.Dispute)
