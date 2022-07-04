from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class CustomUser(AbstractUser):
  #Boolean fields to select the type of account.
  is_trainer = models.BooleanField(default=False)
  is_student = models.BooleanField(default=False)

class Trainer(models.Model):
    trainer = models.OneToOneField(
      settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    location = models.CharField(max_length=30)
    bio = models.TextField()

    def __str__(self):
        return self.trainer.username

class Student(models.Model):
    student = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    location = models.CharField(max_length=30)
    bio = models.TextField()

    def __str__(self):
        return self.student.username

class Subject(models.Model):
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.name

class Assignment(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=150, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    deadline = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.title


class SubmitAssignment(models.Model):
    student = models.ForeignKey(Student,on_delete=models.CASCADE)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    submitted_on = models.DateTimeField(auto_now_add=True)
    answer = models.TextField(null=False, blank=False)

    def __str__(self) -> str:
        return self.answer