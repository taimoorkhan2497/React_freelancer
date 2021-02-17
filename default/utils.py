import json
from rest_framework.status import (HTTP_204_NO_CONTENT)
from django.conf import settings
from rest_framework.response import Response

def isRoleFreelancer(obj):
    if obj and obj.groups.filter(name=settings.FREELANCER_USER).exists():
        return True
    else:
        return False


def isRoleClient(obj):
    if obj and obj.groups.filter(name=settings.CLIENT_USER).exists():
        return True
    else:
        return False


def isRoleAdmin(obj):
    if obj and obj.groups.filter(name=settings.ADMIN_USER).exists():
        return True
    else:
        return False


def safeDelete(self, request, ModelName, field='id'):
    instance = self.get_object()
    from datetime import datetime
    instance.deleted_at = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    instance.save()
    return Response(status=HTTP_204_NO_CONTENT)
