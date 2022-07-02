from django.http import Http404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Subject, Assignment, SubmitAssignment, CustomUser
from .serializers import SubjectsSerializers, CustomUserSerlializer
from rest_framework.response import Response
from django.contrib.auth import login, logout, authenticate
from .forms import LoginUserForm
from somo_backend import serializers


# class SignupView(APIView):
#     def post(self, request, format=None):
#         serializers = CustomUserSerlializer(data=request.data)

#         if serializers.is_valid():
#             check_if_user_exists = CustomUser.objects.filter(email=request.data['email']).exists()

#             if check_if_user_exists:
#                 return Response('User already exists', status=status.HTTP_409_CONFLICT)
#             else:
#                 serializers.save()
#                 return Response('User created successfully', status=status.HTTP_201_CREATED)
        
#         return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def login_user(request):
#     form = LoginUserForm()

#     if request.method == "POST":
#         username = request.POST.get('username')
#         password = request.POST.get('password')

#         user = authenticate(request, username=username, password=password)

#         print(user)

#         if user is not None:
#             login(request, user)
#             return Response('logged in successfully', status=status.HTTP_200_OK)

#         return Response('Invalid username, password or email', status=status.HTTP_401_UNAUTHORIZED)

class SubjectsView(APIView):
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
    def get(self, request, pk, format=None):
        try:
            subject = Subject.objects.get(pk=pk)
            serializers = SubjectsSerializers(subject, many=True)
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


