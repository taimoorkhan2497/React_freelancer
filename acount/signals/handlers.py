from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from acount.models import Profile

# def create_user_profile(sender, instance, **kwargs):
# 	Profile(user=instance, account_type)
#     pass

# post_save.connect(create_user_profile, sender=User)