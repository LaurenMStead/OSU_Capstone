import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate

from .models import Pet
from .serializers import PetSerializer, UpdatePetSerializer, UserSerializer


def pets(request):
    data = Pet.objects.all()
    serializer = PetSerializer(data, many=True)
    return JsonResponse({'pets': serializer.data})


def pet(request, id):

    try:
        data = Pet.objects.get(pk=id)
    except Pet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        serializer = PetSerializer(data)
        return JsonResponse({'pets': serializer.data})
    elif request.method == 'DELETE':
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == "UPDATE":
        serializer = UpdatePetSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'pets': serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def createNewUser(request):

    body = json.loads(request.body)
    serializer = UserSerializer(data=body)

    if serializer.is_valid():
        user = serializer.save()
        tokens = {
            'success': True,
            'is_superuser': user.is_superuser
        }
        return Response(data=tokens)
    else:
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def loginUser(request):
    body = json.loads(request.body)

    verifyUsername = body['username']
    verifyPassword = body['password']

    user = authenticate(username=verifyUsername, password=verifyPassword)
    if user is not None:
        tokens = {
            'success': True,
            'is_superuser': user.is_superuser
        }
        print("login success!")
        return Response(data=tokens, status=status.HTTP_200_OK)
    else:
        return Response(data={'Error': 'Username or password is incorrect'}, status=status.HTTP_400_BAD_REQUEST)
