from django.urls import path
from . import views


urlpatterns = [
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('subjects/', views.SubjectsListView.as_view(), name='subjects'),
    path('subjects/<int:pk>', views.SubjectsListView.as_view(), name='update_subject')
]
