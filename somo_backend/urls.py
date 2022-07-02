from django.urls import path, include
from .views import *


urlpatterns = [
    path('accounts/', include('rest_registration.api.urls')),
    path('subjects/', SubjectsView.as_view(), name='subjects'),
    path('subjects/<int:pk>', SubjectsDescriptionView.as_view(), name='subject'),
    path('assignments/', AssignmentsView.as_view(), name='assignments'),
    path('assignments/<int:pk>', AssignmentsDescriptionView.as_view(), name='assignment'),
    path('sub-assignments/', SubmitAssignmentsView.as_view(), name='submitted_assignments'),
    path('sub-assignments/<int:pk>', SubmitAssignmentsDetailView.as_view(), name='submitted_assignment'),
]
