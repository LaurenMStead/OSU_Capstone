from rest_framework import serializers
from .models import Pet


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id',
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
                  'last_updated',
                  'date_created'
                  )
