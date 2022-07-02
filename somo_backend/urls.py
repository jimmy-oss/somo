import imp
from django.urls import path
from . import views


urlpatterns = [
    path('subjects/', views.SubjectsListView.as_view(), name='subjects')
]
