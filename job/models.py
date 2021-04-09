from django.db import models
from acount.models import User
import os

# Create your models here.
from acount.models import Skill, Category, ClientProfile, FreelancerProfile


def attaches_upload(instance, filename):
	""" this function has to return the location to upload the file """
	return os.path.join('{0}/{1}/{2}'.format(instance.model, instance.model_id, filename))


# return os.path.join(
#     '{0}/{1}'.format(instance.model, filename))


class Attachment(models.Model):
	file = models.FileField(max_length=191, upload_to=attaches_upload)
	model = models.CharField(max_length=50)
	model_id = models.IntegerField()
	type = models.CharField(max_length=30)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	def _delete_file(self):
		""" Deletes file from filesystem. """
		if os.path.isfile(self.file.path):
			os.remove(self.file.path)


class Job(models.Model):
	title = models.CharField(max_length=255)
	description = models.TextField(max_length=500)
	skills = models.ManyToManyField(Skill)
	number_of_freelancer = models.IntegerField()
	TYPE_CHOICES = (
		('short', 'Short'),
		('long', 'Long'),
	)
	type = models.CharField(TYPE_CHOICES, max_length=50, blank=True)

	EXPERIENCE_LEVEL_CHOICES = (
		('junior', 'Junior'),
		('intermediate', 'Intermediate'),
		('expert', 'Expert'),
	)
	experience_level = models.CharField(choices=EXPERIENCE_LEVEL_CHOICES,
										max_length=12)
	ACCESS_SETTING_CHOICES = (
		("invite only",
		 "only platform users",
		 "all users")

	)
	access_setting = models.CharField(ACCESS_SETTING_CHOICES, max_length=20,
									  blank=True)
	PAY_TYPE_CHOICES = (
		('hourly', 'Hourly'),
		('fixed', 'Fixed'),
	)
	pay_type = models.CharField(max_length=20, choices=PAY_TYPE_CHOICES,
								blank=True, null=True)
	budget = models.DecimalField(max_digits=14, decimal_places=2, blank=True)
	category = models.ForeignKey("acount.Category", on_delete=models.SET_NULL,
								 blank=True, null=True)
	STATUS_CHOICES = (
		('pending', 'Pending'),
		('approved', 'Approved'),
		('rejected', 'Rejected'),
	)
	status = models.CharField(STATUS_CHOICES, max_length=10)
	client = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_job')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_job')


class JobReview(models.Model):
	job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True,
							null=True)
	client = models.ForeignKey(User, on_delete=models.SET_NULL,
							   related_name='client_job_review', blank=True,
							   null=True)

	reason = models.TextField(max_length=1000)
	STATUS_CHOICES = (
		('pending', 'Pending'),
		('approved', 'Approved'),
	)
	status = models.CharField(STATUS_CHOICES, max_length=10)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_job_review')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_job_review')


class Offer(models.Model):
	title = models.CharField(max_length=100)
	category = models.ForeignKey(Category, blank=True, null=True,
								 on_delete=models.SET_NULL)
	description = models.TextField(max_length=500, blank=True)
	due_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
	start_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
	budget = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
	job = models.ForeignKey(Job, on_delete=models.CASCADE, null=True)
	client = models.ForeignKey(ClientProfile, on_delete=models.CASCADE,
							   related_name='client_offer')
	freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.CASCADE)
	STATUS_CHOICES = (
		('pending', 'Pending'),
		('approved', 'Approved'),
		('rejected', 'Rejected'),
	)
	status = models.CharField(STATUS_CHOICES, max_length=10)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_offer')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_offer')


class Invite(models.Model):
	cover_letter = models.TextField(max_length=5000)
	job = models.ForeignKey(Job, on_delete=models.CASCADE)
	client = models.ForeignKey(ClientProfile, on_delete=models.CASCADE,
							   related_name='client_invite')
	freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.CASCADE)
	description = models.TextField(max_length=500, null=True)

	STATUS_CHOICES = (
		('pending', 'Pending'),
		('approved', 'Approved'),
		('rejected', 'Rejected'),
	)
	status = models.CharField(STATUS_CHOICES, max_length=10)

	reject_reason = models.CharField(max_length=100)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_invite')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_invite')


class Application(models.Model):
	budget = models.DecimalField(max_digits=14, decimal_places=2)
	freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.CASCADE)
	job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True,
							null=True)
	client = models.ForeignKey(ClientProfile, on_delete=models.SET_NULL,
							   related_name='client_application', blank=True,
							   null=True)
	description = models.TextField(max_length=500)

	STATUS_CHOICES = (
		('pending', 'Pending'),
		('approved', 'Approved'),
	)
	status = models.CharField(STATUS_CHOICES, max_length=10)

	PROJECT_DURATION_CHOICES = (
		('1-month', '1 Month'),
		('3-months', '3 Months'),
	)
	project_duration = models.CharField(choices=PROJECT_DURATION_CHOICES,
										max_length=10)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_application')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_application')


class Contract(models.Model):
	freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.CASCADE,blank=True, null=True)
	description = models.TextField(max_length=500, blank=True, null=True)
	job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True,
							null=True)
	client = models.ForeignKey(ClientProfile, on_delete=models.SET_NULL,
							   related_name='client_contract', blank=True,
							   null=True)

	STATUS_CHOICES = (
		('pending', 'Pending'),
		('approved', 'Approved'),
	)
	status = models.CharField(STATUS_CHOICES, max_length=10, blank=True, null=True)
	start_date = models.DateTimeField(blank=True, null=True)
	project_budget = models.DecimalField(max_digits=14, decimal_places=2)

	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_contract')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_contract')


class Work(models.Model):
	freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.SET_NULL, blank=True,
								   null=True)
	job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True,
							null=True)
	client = models.ForeignKey(ClientProfile, on_delete=models.SET_NULL,
							   related_name='client_work', blank=True,
							   null=True)
	contract = models.ForeignKey(Contract, on_delete=models.SET_NULL,
								 blank=True, null=True)
	description = models.TextField(max_length=500)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_work')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_work')


class WorkChanges(models.Model):
	work = models.ForeignKey(Work, on_delete=models.SET_NULL, blank=True,
							 null=True)
	freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.SET_NULL, blank=True,
								   null=True,
								   related_name='freelance_workchanges')
	job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True,
							null=True, related_name='job_workchanges')
	client = models.ForeignKey(ClientProfile, on_delete=models.SET_NULL,
							   related_name='client_workchanges', blank=True,
							   null=True)
	contract = models.ForeignKey(Contract, on_delete=models.SET_NULL,
								 blank=True, null=True)
	description = models.TextField(max_length=500)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_workchanges')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_workchanges')


class Feedback(models.Model):
	freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.SET_NULL, blank=True,
								   null=True)
	job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True,
							null=True)
	TYPE_CHOICES = (
		('freelancer', 'Freelancer'),
		('client', 'Client'),
	)
	type = models.CharField(TYPE_CHOICES, max_length=50, blank=True)
	client = models.ForeignKey(ClientProfile, on_delete=models.SET_NULL,
							   related_name='client_feedback', blank=True,
							   null=True)
	contract = models.ForeignKey(Contract, on_delete=models.SET_NULL,
								 blank=True, null=True)
	description = models.TextField(max_length=500)
	rate = models.IntegerField(null=True, blank=True)

	STATUS_CHOICES = (
		('published', 'Published'),
	)
	status = models.CharField(STATUS_CHOICES, max_length=10)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_feedback')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_feedback')


class FeedbackReview(models.Model):
	feedback = models.ForeignKey(Feedback, on_delete=models.CASCADE,
								 blank=True,
								 null=True)
	TYPE_CHOICES = (
		('freelancer', 'Freelancer'),
		('client', 'Client'),
	)
	type = models.CharField(TYPE_CHOICES, max_length=50)
	rate = models.IntegerField(null=True, blank=True)
	user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True,
							 null=True)
	review_at = models.DateTimeField(auto_now=True)
	description = models.TextField(max_length=5000)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_feedback_review')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_feedback_review')


class Dispute(models.Model):
	freelancer = models.ForeignKey(FreelancerProfile, on_delete=models.SET_NULL, blank=True,
								   null=True)
	job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True,
							null=True)
	client = models.ForeignKey(ClientProfile, on_delete=models.SET_NULL,
							   related_name='client_dispute', blank=True,
							   null=True)
	DISPUTE_BY_CHOICES = (
		('freelancer', 'Freelancer'),
		('client', 'Client'),
	)
	dispute_by = models.CharField(DISPUTE_BY_CHOICES, max_length=10,
								  blank=True)

	contract = models.ForeignKey(Contract, on_delete=models.SET_NULL,
								 blank=True, null=True)
	description = models.TextField(max_length=500)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	deleted_at = models.DateTimeField(blank=True, null=True)
	created_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='created_by_dispute')
	updated_by = models.ForeignKey(User, blank=True, null=True,
								   on_delete=models.SET_NULL,
								   related_name='updated_by_dispute')
