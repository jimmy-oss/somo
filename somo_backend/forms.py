from django import forms

from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser


class MyUserCreationForm(UserCreationForm):
    password = forms.CharField(widget=forms.PasswordInput(), min_length=8)
    class Meta(UserCreationForm):
        model = CustomUser
        fields = '__all__'

class MyUserChangeForm(UserChangeForm):

    class Meta(UserChangeForm):
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', 'location', )