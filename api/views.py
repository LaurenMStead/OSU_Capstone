from django.shortcuts import render
from rest_framework import generics
from .serializers import CodesSerializer
from .models import Codes


class CodesView(generics.ListAPIView):
    queryset = Codes.objects.all()
    serializer_class = CodesSerializer
