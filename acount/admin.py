from django.contrib import admin
from acount.models import User, Profile

# Register your models here.
admin.site.register(User)


# class ProfileAdmin(admin.ModelAdmin):
#     def save_model(self, request, obj, form, change):
#         if obj.id is None:
#         	obj.created_by = request.user
#         else:
#         	obj.updated_by = request.user
#         super().save_model(request, obj, form, change)

# admin.site.register(Profile, ProfileAdmin)