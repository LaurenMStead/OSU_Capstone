from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CodesSerializer
from .models import Codes
from rest_framework.views import APIView
from rest_framework.response import Response


class CodesView(generics.ListAPIView):
    queryset = Codes.objects.all()
    serializer_class = CodesSerializer

