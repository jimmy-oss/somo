from dataclasses import field
from rest_framework import serializers
from .models import CustomUser, Subject, Assignment, SubmitAssignment

class CustomUserSerlializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class SubjectsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class AssignmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'
