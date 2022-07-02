from secrets import choice
from django.db import models
from django.contrib.auth.models import AbstractUser

CATEGORIES = (
    ('trainer', 'trainer'),
    ('student', 'student')
)

class CustomUser(AbstractUser):
    category = models.CharField(choices=CATEGORIES, max_length=7, null=False, blank=False, default='student')