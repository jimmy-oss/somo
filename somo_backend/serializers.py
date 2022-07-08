from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers

from .models import Subject, Assignment, SubmitAssignment, Trainer, Student, CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', 'is_active', 'is_trainer', 'is_student')

class TrainerCustomRegistrationSerializer(RegisterSerializer):
    trainer = serializers.PrimaryKeyRelatedField(read_only=True,)

    def save(self, request):
        user = super(TrainerCustomRegistrationSerializer, self).save(request)
        user.is_trainer = True
        user.save()
        trainer = Trainer(trainer=user, )
        trainer.save()
        return user


class StudentCustomRegistrationSerializer(RegisterSerializer):
    student = serializers.PrimaryKeyRelatedField(read_only=True,) #by default allow_null = False

    def save(self, request):
        user = super(StudentCustomRegistrationSerializer, self).save(request)
        user.is_student = True
        user.save()
        student = Student(student=user, )
        student.save()
        return user

class AssignmentsSerializer(serializers.ModelSerializer):
    subject = serializers.SerializerMethodField()
    trainer = serializers.SerializerMethodField()
    class Meta:
        model = Assignment
        fields = '__all__'
    
    def get_subject(self, obj):
        return obj.subject.name

    def get_trainer(self, obj):
        return obj.trainer.trainer.username


class SubjectsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = "__all__"

class SubmitAssignmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubmitAssignment
        fields = '__all__'

class TrainersSerializers(serializers.ModelSerializer):
    trainer = CustomUserSerializer(read_only=True)
    class Meta:
        model = Trainer
        fields = ("id", "trainer",)

class StudentsSerializers(serializers.ModelSerializer):
    student = CustomUserSerializer(read_only=True)
    class Meta:
        model = Student
        fields = ("id", "student", )