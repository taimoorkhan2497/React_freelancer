from base64 import b64encode
from rest_framework import viewsets
# import face_recognition
import decimal
from rest_framework.response import Response
from allauth.socialaccount.providers.linkedin_oauth2.views import LinkedInOAuth2Adapter
# from rest_auth.registration.views import SocialLoginView
from dj_rest_auth.registration.views import SocialLoginView
# from rest_auth.social_serializers import LinkedinLoginSerializer
from acount import serializers as acount_serializer
from django.shortcuts import render
from acount import models
from rest_framework.decorators import api_view
from datetime import datetime, timedelta


class LinkedinLogin(SocialLoginView):
	# serializer_class = LinkedinLoginSerializer
	# adapter_class = LinkedInOAuthAdapter
	adapter_class = LinkedInOAuth2Adapter

	def get_response_serializer(self):
		return acount_serializer.MyTokenSerializer


class CityViewSet(viewsets.ModelViewSet):
	queryset = models.City.objects.all()
	serializer_class = acount_serializer.CitySerializers
	search_fields = ['^name']


class UserViewSet(viewsets.ModelViewSet):
	queryset = models.User.objects.all()
	serializer_class = acount_serializer.UserSerializer


class CountryViewSet(viewsets.ModelViewSet):
	queryset = models.Country.objects.all()
	serializer_class = acount_serializer.CountrySerializers
	search_fields = ['^name']


class SkillViewSet(viewsets.ModelViewSet):
	queryset = models.Skill.objects.all()
	serializer_class = acount_serializer.SkillSerializers
	search_fields = ['^name']


class CategoryViewSet(viewsets.ModelViewSet):
	queryset = models.Category.objects.all()
	serializer_class = acount_serializer.CategorySerializers
	search_fields = ['^name']


class QuestionViewSet(viewsets.ModelViewSet):
	queryset = models.Question.objects.all()
	serializer_class = acount_serializer.QuestionSerializers
	search_fields = ['description']


class SpecialityViewSet(viewsets.ModelViewSet):
	queryset = models.Speciality.objects.all()
	serializer_class = acount_serializer.SpecialitySerializers
	search_fields = ['^name']


class ProfileViewSet(viewsets.ModelViewSet):
	queryset = models.Profile.objects.all()
	serializer_class = acount_serializer.ProfileSerializers
	search_fields = ['user__first_name', 'user__last_name', 'user___email',
					 'user__username', 'account_title']
	filterset_fields = ['experience_level', 'zip_code', 'skills__name']

	def retrieve(self, *args, **kwargs):
		instance = self.get_object()
		serializer = self.get_serializer(instance)
		data = serializer.data
		data['current_time'] = datetime.utcnow() + timedelta(hours=4)
		if instance.proposal_amount is not None:
			data['total_proposal_amount'] = instance.proposal_amount - (
					decimal.Decimal(15 / 100) * instance.proposal_amount)
		return Response(data)


class ClientProfileViewSet(viewsets.ModelViewSet):
	queryset = models.ClientProfile.objects.all()
	serializer_class = acount_serializer.ClientProfileSerializers
	search_fields = ['user__first_name', 'user__last_name', 'user___email',
					 'user__username', 'account_title']
	filterset_fields = ['experience_level', 'zip_code', 'skills__name']


class FreelancerProfileViewSet(viewsets.ModelViewSet):
	queryset = models.FreelancerProfile.objects.all()
	serializer_class = acount_serializer.FreelancerProfileSerializers
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
