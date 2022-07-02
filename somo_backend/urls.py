from django.urls import path
from .views import *
from rest_framework.authtoken import views


urlpatterns = [
    path('token-auth/', views.obtain_auth_token),
    # path('signup/', SignupView.as_view(), name='signup'),
    path('subjects/', SubjectsView.as_view(), name='subjects'),
    path('subject/<int:pk>', SubjectsDescriptionView.as_view(), name='subject'),
    path('assignments/', AssignmentsView.as_view(), name='assignments'),
    path('assignment/<int:pk>', AssignmentsDescriptionView.as_view(), name='assignment'),
    path('sub-assignments/', SubmitAssignmentsView.as_view(), name='submitted_assignments'),
]
