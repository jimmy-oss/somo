from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers

from .models import Subject, Assignment, SubmitAssignment, Trainer, Student, CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        exclude = ["password", "last_login", "is_superuser", "is_staff", "user_permissions", "groups"]

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

class TrainersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = ('username', 'email', )

class StudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'