from rest_framework import serializers
from .models import Pet


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id',
                  'name',
                  'type',
                  'age',
                  'gender',
                  'availability',
                  'description',
                  'last_updated',
                  'date_created'
                  )
