import imp
from pyexpat import model
from django import forms

from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser


class MyUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = CustomUser
        fields = '__all__'


class MyUserChangeForm(UserChangeForm):

    class Meta(UserChangeForm):
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email')