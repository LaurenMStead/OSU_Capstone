from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response

from .models import Pet
from .serializers import PetSerializer


def pets(request):
    data = Pet.objects.all()
    serializer = PetSerializer(data, many=True)
    return JsonResponse({'pets': serializer.data})


def pet(request, id):
    try:
        data = Pet.objects.get(pk=id)
    except Pet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PetSerializer(data)
    return JsonResponse({'pets': serializer.data})
