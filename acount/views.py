from base64 import b64encode

from rest_framework import viewsets
import face_recognition
# Create your views here.
from rest_framework.response import Response
from allauth.socialaccount.providers.linkedin.views import LinkedInOAuthAdapter
from rest_auth.registration.views import SocialLoginView
# from rest_auth.social_serializers import LinkedinLoginSerializer
from acount import serializers as acount_serializer
from django.shortcuts import render

from acount.models import City, Skill, Category, Question, \
    Speciality, Profile, ClientProfile, FreelancerProfile
from rest_framework.decorators import api_view


class LinkedinLogin(SocialLoginView):
    # serializer_class = LinkedinLoginSerializer
    adapter_class = LinkedInOAuthAdapter


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = acount_serializer.CitySerilaizers
    search_fields = ['^name']


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = acount_serializer.SkillSerilaizers
    search_fields = ['^name']


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = acount_serializer.CategorySerilaizers
    search_fields = ['^name']


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = acount_serializer.QuestionSerilaizers
    search_fields = ['description']


class SpecialityViewSet(viewsets.ModelViewSet):
    queryset = Speciality.objects.all()
    serializer_class = acount_serializer.SpecialitySerilaizers
    search_fields = ['^name']


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = acount_serializer.ProfileSerilaizers
    search_fields = ['user__first_name', 'user__last_name', 'user___email',
                     'user__username', 'account_title']
    filterset_fields = ['experience_level', 'zip_code', 'skills__name']


class ClientProfileViewSet(viewsets.ModelViewSet):
    queryset = ClientProfile.objects.all()
    serializer_class = acount_serializer.ClientProfileSerilaizers
    search_fields = ['user__first_name', 'user__last_name', 'user___email',
                     'user__username', 'account_title']
    filterset_fields = ['experience_level', 'zip_code', 'skills__name']


class FreelancerProfileViewSet(viewsets.ModelViewSet):
    queryset = FreelancerProfile.objects.all()
    serializer_class = acount_serializer.FreelancerProfileSerilaizers
    search_fields = ['user__first_name', 'user__last_name', 'user___email',
                     'user__username', 'account_title']
    filterset_fields = ['experience_level', 'zip_code', 'skills__name']


@api_view(['POST'])
def validate_avatar(request):
    image = face_recognition.load_image_file(
        request.data.get('avatar'))
    face_locations = face_recognition.face_locations(image)

    if face_locations != []:
        return Response({"success": True, "message": "Face detected"},
                        status=200)
    else:
        return Response({"success": False, "message": "Not real photo"},
                        status=400)

def frontend(request):
	return render(request, 'build/index.html')