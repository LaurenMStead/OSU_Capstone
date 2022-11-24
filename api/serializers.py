from rest_framework import serializers
from .models import Pet
from django.contrib.auth.models import User


class PetSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=False)

    class Meta:
        model = Pet
        fields = '__all__'

# class CreatePetSerializer(self):
#     pet = Pet.object.create(
#         name=data['name'],
#         type=data['type'],
#         breed=data['breed'],
#         age=data['age'],
#         gender=data['gender'],
#         good_with_children=data['good_with_children'],
#         good_with_other_animals=data['good_with_other_animals'],
#         must_be_leashed=data['must_be_leashed'],
#         availability=data['availability'],
#         description=data['description'],
#         news_blurb=data['news_blurb'],
#         image=data['image'],
#     )
#
#     pet.save()
#     return pet


class CreatePetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('name',
                  'type',
                  'breed',
                  'age',
                  'gender',
                  'good_with_children',
                  'good_with_other_animals',
                  'must_be_leashed',
                  'availability',
                  'description',
                  'news_blurb',
                  )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'is_superuser',)
        write_only_fields = ('password',)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            is_superuser=validated_data['is_superuser'],
        )

        user.set_password(validated_data['password'])
        user.save()
        return user
