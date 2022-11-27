from django.db import models
from api.choices import *


def upload_to(instance, name, filename):
    return 'headshots/{name}/{filename}'.format(filename=filename, name=name)


class Pet(models.Model):

    name = models.CharField(max_length=25, blank=False)
    type = models.CharField(max_length=10, choices=PET_TYPE_CHOICES, blank=False, default=DOG)
    breed = models.CharField(max_length=50, choices=PET_BREED_CHOICES, blank=True)
    age = models.CharField(max_length=10, choices=PET_AGE_CHOICES, blank=False, default=BABY)
    gender = models.CharField(max_length=10, choices=PET_GENDER_CHOICES, blank=False, default=MALE)
    good_with_children = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=False, default=UNKNOWN)
    good_with_other_animals = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=False, default=UNKNOWN)
    must_be_leashed = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=False, default=UNKNOWN)
    availability = models.CharField(max_length=15, choices=PET_AVAILABILITY_CHOICES, blank=False, default=AVAILABLE)
    description = models.CharField(max_length=255, blank=True, default='')
    news_blurb = models.CharField(max_length=255, blank=True, default='')
    image = models.FileField(upload_to='headshots/', default='headshots/default.jpeg')
    last_updated = models.DateTimeField(auto_now=True, blank=False)
    date_created = models.DateTimeField(auto_now_add=True, blank=False)
