from rest_framework import serializers
from .models import Pets


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pets
        fields = ('id', 'name', 'type', 'breed', 'age', 'disposition', 'picture_link', 'availability', 'location',
                  'news', 'last_updated', 'data_created')

