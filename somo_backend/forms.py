import imp
from pyexpat import model
from django import forms

from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser


class MyUserCreationForm(UserCreationForm):
    password = forms.CharField(widget=forms.PasswordInput(), min_length=8)
    class Meta(UserCreationForm):
        model = CustomUser
        fields = ('username', 'email','first_name', 'last_name','password1', 'password2', )

class MyUserChangeForm(UserChangeForm):

    class Meta(UserChangeForm):
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', )

class LoginUserForm(forms.Form):
    username = forms.CharField(label='Username', required=True)
    password = forms.CharField(label='Password',
                               widget=forms.PasswordInput,
                               required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'password']