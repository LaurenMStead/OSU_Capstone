from rest_framework import serializers
from .models import Pet
from django.contrib.auth.models import User


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'


class UpdatePetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id',
                  'image',
                  'name',
                  'type',
                  'breed',
                  'age',
                  'gender',
                  'good_with_children',
                  'good_with_other_animals',
                  'must_be_leashed'
                  'availability',
                  'description',
                  'news_blurb',
                  )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'is_superuser', )
        write_only_fields = ('password', )

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            is_superuser=validated_data['is_superuser'],
        )

        user.set_password(validated_data['password'])
        user.save()
        return user
