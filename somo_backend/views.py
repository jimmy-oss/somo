from rest_framework.views import APIView
from rest_framework import status
from .models import Subject, Assignment, SubmitAssignment, Trainer, Student
from .serializers import StudentsSerializers, SubjectsSerializers, AssignmentsSerializer, SubmitAssignmentsSerializer, TrainerCustomRegistrationSerializer, StudentCustomRegistrationSerializer, TrainersSerializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from dj_rest_auth.registration.views import RegisterView

class TrainerRegistrationView(RegisterView):
    serializer_class = TrainerCustomRegistrationSerializer

class StudentRegistrationView(RegisterView):
    serializer_class = StudentCustomRegistrationSerializer

class TrainersView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        try:
            all_trainers = Trainer.objects.all()
            serializers = TrainersSerializers(all_trainers, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)

        except:
            return Response('No trainers found', status=status.HTTP_404_NOT_FOUND)

class StudentsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        try:
            all_students = Student.objects.all()
            serializers = StudentsSerializers(all_students, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)

        except:
            return Response('No students found', status=status.HTTP_404_NOT_FOUND)

class SubjectsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        try:
            all_subjects = Subject.objects.all()
            serializers = SubjectsSerializers(all_subjects, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)

        except:
            return Response('No subjects found', status=status.HTTP_404_NOT_FOUND)

    def post(self, request, format=None):
        serializers  = SubjectsSerializers(data=request.data)

        if serializers.is_valid():
            check_if_subject_exists = Subject.objects.filter(name__iexact=request.data['name'])

            if not check_if_subject_exists:
                serializers.save()
                return Response('Subject added successfully', status=status.HTTP_201_CREATED)
            else:
                return Response('Subject already exists', status=status.HTTP_409_CONFLICT)
        
        else:
            return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class SubjectsDescriptionView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk, format=None):
        try:
            subject = Subject.objects.get(pk=pk)
            serializers = SubjectsSerializers(subject)
            return Response(serializers.data, status=status.HTTP_200_OK)

        except:
            return Response('Subject not found', status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        subject = Subject.objects.get(pk=pk)

        serializers  = SubjectsSerializers(subject, request.data)

        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_200_OK)

        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        try:
            subject = Subject.objects.get(pk=pk)
            if subject:
                subject.delete()
                return Response('Subject deleted successfully', status=status.HTTP_200_OK)
        except Subject.DoesNotExist:
            return Response('Subject does not exist', status=status.HTTP_400_BAD_REQUEST)


class AssignmentsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        try:
            all_assignments = Assignment.objects.all()
            serializers = AssignmentsSerializer(all_assignments, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)
        except:
            return Response('No assignments found', status=status.HTTP_404_NOT_FOUND)

    def post(self, request, format=None):
        serializers  = AssignmentsSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save()
            return Response('Assignment added successfully', status=status.HTTP_201_CREATED)
        
        else:
            return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

class AssignmentsDescriptionView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk, format=None):
        try:
            assignment = Assignment.objects.get(pk=pk)
            serializers = AssignmentsSerializer(assignment)
            return Response(serializers.data, status=status.HTTP_200_OK)
        except:
            return Response('Assignment not found', status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        assignment = Assignment.objects.get(pk=pk)

        serializers  = AssignmentsSerializer(assignment, request.data)

        if serializers.is_valid():
            serializers.save()
            return Response('Assignment updated successfully', status=status.HTTP_200_OK)

        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        try:
            assignment = Assignment.objects.get(pk=pk)
            assignment.delete()
            return Response('Assignment deleted successfully', status=status.HTTP_200_OK)
        except Assignment.DoesNotExist:
            return Response('Assignment does not exist', status=status.HTTP_400_BAD_REQUEST)


class SubmitAssignmentsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        try:
            all_submitted_assignments = SubmitAssignment.objects.all()
            serializers = SubmitAssignmentsSerializer(all_submitted_assignments, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)

        except:
            return Response('No submitted assignments found', status=status.HTTP_404_NOT_FOUND)

    def post(self, request, format=None):
        serializers  = SubmitAssignmentsSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save()
            return Response('Assignment submitted successfully', status=status.HTTP_201_CREATED)
        
        else:
            return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

class SubmitAssignmentsDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk, format=None):
        try:
            submitted_assignment = SubmitAssignment.objects.get(pk=pk)
            serializers = SubmitAssignmentsSerializer(submitted_assignment)
            return Response(serializers.data, status=status.HTTP_200_OK)
        except:
            return Response('Submitted assignment not found', status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        submitted_assignment = SubmitAssignment.objects.get(pk=pk)

        serializers  = SubmitAssignmentsSerializer(submitted_assignment, request.data)

        if serializers.is_valid():
            serializers.save()
            return Response('Submitted assignment updated successfully', status=status.HTTP_200_OK)

        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        try:
            submitted_assignment = SubmitAssignment.objects.get(pk=pk)
            submitted_assignment.delete()
            return Response('Submitted assignment deleted successfully', status=status.HTTP_200_OK)
        except Assignment.DoesNotExist:
            return Response('Submitted assignment does not exist', status=status.HTTP_400_BAD_REQUEST)