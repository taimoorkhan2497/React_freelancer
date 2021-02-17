from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from acount import views as account_views
from job import views as job_view

router = DefaultRouter()

# account app 
router.register(r'city', account_views.CityViewSet)
router.register(r'skill', account_views.SkillViewSet)
router.register(r'profile', account_views.ProfileViewSet)
router.register(r'clientprofile', account_views.ClientProfileViewSet)
router.register(r'frelancerprofile', account_views.FreelancerProfileViewSet)
router.register(r'profile', account_views.ProfileViewSet)
router.register(r'category', account_views.CategoryViewSet)
router.register(r'question', account_views.QuestionViewSet)
router.register(r'speciality', account_views.SpecialityViewSet)

# job app
router.register(r'jobreview', job_view.JobReviewViewSet)
router.register(r'feedbackreview', job_view.FeedbackReviewViewSet)
router.register(r'workchanges', job_view.WorkChangesViewSet)
router.register(r'job', job_view.JobViewSet)
router.register(r'attachment', job_view.AttachmentViewSet)
router.register(r'offer', job_view.OfferViewSet)
router.register(r'invite', job_view.InviteViewSet)
router.register(r'application', job_view.ApplicationViewSet)
router.register(r'contract', job_view.ContractViewSet)
router.register(r'work', job_view.WorkViewSet)
router.register(r'feedback', job_view.WorkViewSet)
router.register(r'dispute', job_view.WorkViewSet)

# profile_list = ProfileViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })

# The API URLs are now determined automatically by the router.
urlpatterns = format_suffix_patterns([

    url('validate_avatar', account_views.validate_avatar,
        name='validate_avatar'),
    path('accounts/', include('rest_registration.api.urls')),
    url(r'^rest-auth/linkedin/$', account_views.LinkedinLogin.as_view(),
        name='linkedin_login'),

    # path('profile', profile_list),

])
urlpatterns += [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),

]
