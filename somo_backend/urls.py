from django.urls import path
from .views import *
from rest_framework.authtoken import views


urlpatterns = [
    path('token-auth/', views.obtain_auth_token),
    # path('signup/', SignupView.as_view(), name='signup'),
    path('subjects/', SubjectsListView.as_view(), name='subjects'),
    path('subjects/<int:pk>', SubjectsListView.as_view(), name='update_subject')
]
