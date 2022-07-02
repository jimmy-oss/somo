from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Subject, Assignment, SubmitAssignment, CustomUser
from .serializers import SubjectsSerializers
from rest_framework.response import Response

class SubjectsListView(APIView):
    def get(self, request, format=None):
        try:
            all_subjects = Subject.objects.all()
            if all_subjects:
                serializers = SubjectsSerializers(all_subjects, many=True)
                return Response(serializers.data, status=status.HTTP_200_OK)

            return Response('0 subjects found', status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(serializers, status=status.HTTP_400_BAD_REQUEST)


    def post(self, request, format=None):
        serializers  = SubjectsSerializers(data=request.data)

        if serializers.is_valid():
            check_if_exists = Subject.objects.get(name__iexact=request.data['name'])

            if check_if_exists:
                return Response('Subject already exists', status=status.HTTP_409_CONFLICT)
            else:
                serializers.save()
                return Response('Subject added successfully', status=status.HTTP_201_CREATED)

        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

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