from django.db import models
from django.contrib.auth.models import AbstractUser

CATEGORIES = (
    ('trainer', 'trainer'),
    ('student', 'student')
)

class CustomUser(AbstractUser):
    category = models.CharField(choices=CATEGORIES, max_length=7, null=False, blank=False, default='student')


class Subject(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)