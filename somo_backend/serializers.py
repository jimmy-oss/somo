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
    subject = serializers.CharField(source='subject.name', read_only=True)
    trainer = serializers.CharField(source='trainer.trainer.username')
    class Meta:
        model = Assignment
        fields = '__all__'



class SubjectsSerializers(serializers.ModelSerializer):
    trainer = serializers.CharField(source='trainer.trainer.username')
    assignments = AssignmentsSerializer(source='subject_assignments', many=True)
    class Meta:
        model = Subject
        fields = ('id', 'name', 'description','trainer', 'created_at','assignments', )

class SubmitAssignmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubmitAssignment
        fields = '__all__'

class TrainersSerializers(serializers.ModelSerializer):
    trainer = CustomUserSerializer(read_only=True)
    assignments = serializers.PrimaryKeyRelatedField(many=True, read_only=False, queryset=Subject.objects.all())
    class Meta:
        model = Trainer
        fields = ("id", "trainer", "assignments")

class StudentsSerializers(serializers.ModelSerializer):
    student = CustomUserSerializer(read_only=True)
    class Meta:
        model = Student
        fields = ("id", "student", )