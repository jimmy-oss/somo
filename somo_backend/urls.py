from django.urls import path, include
from .views import *


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('registration/trainer/', TrainerRegistrationView.as_view(), name='register-trainer'),
    path('registration/student/', StudentRegistrationView.as_view(), name='register-student'),
    path('all-users/', UsersView.as_view(), name='users'),
    path('current-loggedin-trainer/', CurrentLoggedInTrainerView.as_view(), name='current_logged_in_trainer'),
    path('current-loggedin-student/', CurrentLoggedInStudentView.as_view(), name='current_logged_in_student'),
    path('trainers/', TrainersView.as_view(), name='trainers'),
    path('trainer/<int:pk>/', TrainerDescriptionView.as_view(), name='trainer'),
    path('students/', StudentsView.as_view(), name='students'),
    path('student/<int:pk>/', StudentDescriptionView.as_view(), name='student'),
    path('subjects/', SubjectsView.as_view(), name='subjects'),
    path('subjects/<int:pk>/', SubjectsDescriptionView.as_view(), name='subject'),
    path('assignments/', AssignmentsView.as_view(), name='assignments'),
    path('assignments/<int:pk>/', AssignmentsDescriptionView.as_view(), name='assignment'),
    path('sub-assignments/', SubmitAssignmentsView.as_view(), name='submitted_assignments'),
    path('sub-assignments/<int:pk>/', SubmitAssignmentsDetailView.as_view(), name='submitted_assignment'),
]
