import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .models import Pet
from .serializers import PetSerializer, CreatePetSerializer, UserSerializer
from .choices import *


@csrf_exempt
@api_view(['POST'])
def GetAllPetsView(request):
    data = Pet.objects.all()
    serializer = PetSerializer(data, many=True)
    return Response({'pets': serializer.data})


@csrf_exempt
@api_view(['POST'])
def CreateNewPetView(request):
    serializer_class = CreatePetSerializer

    new_pet_data = json.loads(request.body)
    print(new_pet_data)
    serializer = serializer_class(data=new_pet_data)

    if serializer.is_valid():
        serializer.save()
        return Response(data={"new_pet": serializer.data}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST', 'DELETE', 'PATCH'])
def currPet(request, pet_id):
    try:
        data = Pet.objects.get(pk=pet_id)
    except Pet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        serializer = PetSerializer(data)
        return Response(data={'pet': serializer.data}, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == "UPDATE":
        serializer = PetSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={'pet': serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def CreateNewUserView(request):
    body = json.loads(request.body)
    serializer = UserSerializer(data=body)

    if serializer.is_valid():
        user = serializer.save()
        tokens = {
            'success': True,
            'is_superuser': user.is_superuser
        }
        return Response(data=tokens, status=status.HTTP_200_OK)
    else:
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def LoginCurrentUserView(request):
    body = json.loads(request.body)

    verifyUsername = body['username']
    verifyPassword = body['password']

    user = authenticate(username=verifyUsername, password=verifyPassword)
    if user is not None:
        admin = {'is_superuser': user.is_superuser}
        return Response(data=admin, status=status.HTTP_200_OK)
    else:
        return Response(data={'Error': 'Username or password is incorrect'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', 'GET'])
def GetChoicesView(request):
    disp_choices = tup_to_list(PET_DISPOSITION_CHOICES)
    age_choices = tup_to_list(PET_AGE_CHOICES)
    avail_choices = tup_to_list(PET_AVAILABILITY_CHOICES)
    type_choices = tup_to_list(PET_TYPE_CHOICES)
    list_breed_choices = tup_to_list(PET_BREED_CHOICES)

    breed_choices = {'Dog': tup_to_list(list_breed_choices[0]),
                     'Cat': tup_to_list(list_breed_choices[1]),
                     'Other': tup_to_list(list_breed_choices[2])}

    gender_choices = tup_to_list(PET_GENDER_CHOICES)

    return Response(data={'dispositions': disp_choices,
                          'ages': age_choices,
                          'availabilities': avail_choices,
                          'types': type_choices,
                          'breeds': breed_choices,
                          'genders': gender_choices,
                          })


def tup_to_list(full_list):
    rtn_lst = [full_list[i][1] for i in range(0, len(full_list))]
    return rtn_lst
