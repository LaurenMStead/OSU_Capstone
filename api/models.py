from django.db import models


# Create your models here.
class Credentials(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password_hash = models.CharField(max_length=255, unique=True)


class Types(models.Model):
    DOG = 'D'
    CAT = 'C'
    REPTILE = 'R'
    OTHER = 'O'

    PET_TYPE_CHOICES = [
        (DOG, 'Dog'),
        (CAT, 'Cat'),
        (REPTILE, 'Reptile'),
        (OTHER, 'Other'),
    ]
    type = models.CharField(max_length=25, choices=PET_TYPE_CHOICES, blank=False)


class Breeds(models.Model):
    PET_BREED_CHOICES = [
        ('Poodle', 'Poodle'),
        ('German Shepherd', 'German Shepherd'),
        ('Chihuahua', 'Chihuahua'),
        ('Mut', 'Mut'),
        ('Labrador', 'Labrador'),
        ('DSH', 'Domestic Short Hair'),
        ('DLH', 'Domestic Long Hair'),
        ('Siamese', 'Siamese'),
        ('Russian Blue', 'Russian Blue'),
        ('Maine Coon', 'Maine Coon'),
        ('Fish', 'Fish'),
        ('Snake', 'Snake'),
        ('Turtle', 'Turtle'),
        ('Iguana', 'Iguana'),
    ]
    breed = models.CharField(max_length=50, choices=PET_BREED_CHOICES, blank=True)


class Ages(models.Model):
    BABY = 'B'
    YOUNG = 'Y'
    ADULT = 'A',
    SENIOR = 'S'
    PET_AGE_CHOICES = [
        ('Baby', 'Baby'),
        ('Young', 'Young'),
        ('Adult', 'Adult'),
        ('Senior', 'Senior'),
    ]
    age = models.CharField(max_length=25, choices=PET_AGE_CHOICES, blank=False)


class Dispositions(models.Model):

    OPTION_1 = 'Good with children'
    OPTION_2 = 'Good with other animals'
    OPTION_3 = 'Must be leashed at all times'

    PET_DISPOSITION_CHOICES = [
        (OPTION_1, 'Good with children'),
        (OPTION_2, 'Good with other animals'),
        (OPTION_3, 'Must be leashed at all times'),

    ]
    disposition_1 = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=True)
    disposition_2 = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=True)
    disposition_3 = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=True)


class Availabilities(models.Model):

    AVAILABLE = 'AV'
    NOT_AVAILABLE = 'NA'
    PENDING = 'P'
    ADOPTED = 'AD'

    PET_AVAILABILITY_CHOICES = [
        (AVAILABLE, 'Available'),
        (NOT_AVAILABLE, 'Not Available'),
        (PENDING, 'Pending'),
        (ADOPTED, 'Adopted')
    ]
    availability = models.CharField(max_length=15)


class Pets(models.Model):
    name = models.CharField(max_length=25)
    type = models.ForeignKey(Types, on_delete=models.CASCADE)
    breed = models.ForeignKey(Breeds, on_delete=models.CASCADE)
    age = models.ForeignKey(Ages, on_delete=models.CASCADE)
    disposition = models.ForeignKey(Dispositions, on_delete=models.CASCADE)
    picture_link = models.CharField(max_length=255)
    availability = models.ForeignKey(Availabilities, on_delete=models.CASCADE)
    location = models.CharField(max_length=255, default='Shelter')
    news = models.CharField(max_length=255, default='')
    last_updated = models.DateTimeField(auto_now=True)
    date_created = models.DateTimeField(auto_now_add=True)
