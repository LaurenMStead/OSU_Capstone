from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PetSerializer
from .models import Pets
from rest_framework.views import APIView
from rest_framework.response import Response


class PetsView(generics.ListAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetSerializer

