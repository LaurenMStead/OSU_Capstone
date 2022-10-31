from django.db import models
import string, random


def return_rand_code():
    length = 5

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Codes.objects.filter(code=code).count() == 0:
            return code


# Create your models here.
class Credentials(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password_hash = models.CharField(max_length=255, unique=True)


class Types(models.Model):
    type = models.CharField(max_length=25)


class Breeds(models.Model):
    breed = models.CharField(max_length=50)


class Ages(models.Model):
    age = models.CharField(max_length=25)


class Dispositions(models.Model):
    disposition_description = models.CharField(max_length=100)


class Availabilities(models.Model):
    availability = models.CharField(max_length=15)


class Pets(models.Model):
    name = models.CharField(max_length=25)
    type = models.ForeignKey(Types, on_delete=models.CASCADE)
    breed = models.ForeignKey(Breeds, on_delete=models.CASCADE)
    age = models.ForeignKey(Ages, on_delete=models.CASCADE)
    disposition_description = models.ForeignKey(Dispositions, on_delete=models.CASCADE)
    picture_link = models.CharField(max_length=255)
    availability = models.ForeignKey(Availabilities, on_delete=models.CASCADE)
    location = models.CharField(max_length=255, default='Shelter')
    news = models.CharField(max_length=255, default='')
    last_updated = models.DateTimeField(auto_now=True)
    date_created = models.DateTimeField(auto_now_add=True)


# FOR TESTING PURPOSES ONLY
class Codes(models.Model):
    code = models.CharField(max_length=8, default='', unique=True)
