from rest_framework import serializers
from allauth.account.adapter import get_adapter
from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import Subject, Assignment, SubmitAssignment, Trainer, Student

class TrainerCustomRegistrationSerializer(RegisterSerializer):
    trainer = serializers.PrimaryKeyRelatedField(read_only=True,) #by default allow_null = False
    location = serializers.CharField(required=True)
    bio = serializers.CharField(required=True)
    
    def get_cleaned_data(self):
            data = super(TrainerCustomRegistrationSerializer, self).get_cleaned_data()
            extra_data = {
                'location' : self.validated_data.get('location', ''),
                'bio' : self.validated_data.get('bio', ''),
            }
            data.update(extra_data)
            return data

    def save(self, request):
        user = super(TrainerCustomRegistrationSerializer, self).save(request)
        user.is_trainer = True
        user.save()
        trainer = Trainer(trainer=user, location=self.cleaned_data.get('location'), 
                bio=self.cleaned_data.get('bio'))
        trainer.save()
        return user


class StudentCustomRegistrationSerializer(RegisterSerializer):
    student = serializers.PrimaryKeyRelatedField(read_only=True,) #by default allow_null = False
    location = serializers.CharField(required=True)
    bio = serializers.CharField(required=True)
    
    def get_cleaned_data(self):
            data = super(StudentCustomRegistrationSerializer, self).get_cleaned_data()
            extra_data = {
                'location' : self.validated_data.get('location', ''),
                'bio' : self.validated_data.get('bio', ''),
            }
            data.update(extra_data)
            return data

    def save(self, request):
        user = super(StudentCustomRegistrationSerializer, self).save(request)
        user.is_student = True
        user.save()
        student = Student(student=user,location=self.cleaned_data.get('location'),
                            bio=self.cleaned_data.get('bio'))
        student.save()
        return user
class SubjectsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class AssignmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'

class SubmitAssignmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubmitAssignment
        fields = '__all__'