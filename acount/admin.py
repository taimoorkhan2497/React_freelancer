from django.contrib import admin
from acount import models

# Register your models here.
admin.site.register(models.User)
admin.site.register(models.Country)
admin.site.register(models.City)
admin.site.register(models.Skill)
admin.site.register(models.Speciality)
admin.site.register(models.Category)
admin.site.register(models.Profile)
admin.site.register(models.ClientProfile)
admin.site.register(models.FreelancerProfile)
admin.site.register(models.Question)
