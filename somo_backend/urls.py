import imp
from django.urls import path
from . import views


urlpatterns = [
    path('subjects/', views.SubjectsListView.as_view(), name='subjects'),
    path('subjects/<int:pk>', views.SubjectsListView.as_view(), name='update_subject')
]
