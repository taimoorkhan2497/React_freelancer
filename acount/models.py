from django.db import models
from django.contrib.auth.models import AbstractUser
from polymorphic.models import PolymorphicModel


# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)


class City(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Skill(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Speciality(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Category(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Profile(PolymorphicModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    account_title = models.CharField(max_length=70,
                                     blank=True, null=True)
    description = models.TextField(max_length=5000,
                                   blank=True, null=True)
    mobile_no = models.CharField(max_length=20,
                                 blank=True, null=True)

    avatar = models.ImageField()

    VERIFICATION_STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
    )
    verification_status = models.CharField(choices=VERIFICATION_STATUS_CHOICES,
                                           max_length=10)

    LANG_CHOICES = (
        ('arabic', 'Arabic'),
        ('english', 'English'),
    )
    language = models.CharField(choices=LANG_CHOICES, max_length=30,
                                default='arabic')
    skills = models.ManyToManyField(Skill)
    city = models.ForeignKey(City, on_delete=models.SET_NULL, blank=True,
                             null=True)
    street = models.CharField(max_length=140)
    zip_code = models.CharField(max_length=14, blank=True, null=True)

    EXPERIENCE_LEVEL_CHOICES = (
        ('junior', 'Junior'),
        ('intermediate', 'Intermediate'),
        ('expert', 'Expert'),
    )
    experience_level = models.CharField(choices=EXPERIENCE_LEVEL_CHOICES,
                                        max_length=12)
    positions = models.CharField(max_length=100)
    birth_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='created_by_profile')
    updated_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='updated_by_profile')


class ClientProfile(Profile):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL,
                                 blank=True, null=True)
    speciality = models.ForeignKey(Speciality, on_delete=models.SET_NULL,
                                   blank=True, null=True)
    PROJECT_TYPE_CHOICES = (
        ('one-time', 'One Time'),
        ('on-going', 'On Going'),
        ('complex', 'Complex'),
    )
    project_type = models.CharField(max_length=20,
                                    choices=PROJECT_TYPE_CHOICES,
                                    blank=True, null=True)
    currently_working = models.BooleanField(default=False)
    PAY_TYPE_CHOICES = (
        ('hourly', 'Hourly'),
        ('fixed', 'Fixed'),
    )
    pay_type = models.CharField(max_length=20, choices=PAY_TYPE_CHOICES,
                                blank=True, null=True)
    budget = models.DecimalField(max_digits=8, decimal_places=2,
                                 blank=True, null=True)


class FreelancerProfile(Profile):
    SERVICE_CHOICES = (
        ('service1', 'Service 1'),
        ('service2', 'Service 2'),
    )
    service = models.CharField(max_length=20, choices=SERVICE_CHOICES)
    category = models.ManyToManyField(Category)


class Question(models.Model):
    client = models.ForeignKey(ClientProfile, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='created_by_question')
    updated_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='updated_by_question')
