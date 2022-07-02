from rest_framework.views import APIView
from rest_framework import status
from .models import Subject, Assignment, SubmitAssignment
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
