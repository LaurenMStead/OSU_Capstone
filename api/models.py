from django.db import models

BABY = 'Baby'
YOUNG = 'Young'
ADULT = 'Adult'
SENIOR = 'Senior'
PET_AGE_CHOICES = [
    (BABY, 'Baby'),
    (YOUNG, 'Young'),
    (ADULT, 'Adult'),
    (SENIOR, 'Senior'),
]

DOG = 'Dog'
CAT = 'Cat'
REPTILE = 'Reptile'
OTHER = 'Other'
PET_TYPE_CHOICES = [
    (DOG, 'Dog'),
    (CAT, 'Cat'),
    (REPTILE, 'Reptile'),
    (OTHER, 'Other'),
]

MALE = 'Male'
FEMALE = 'Female'
PET_SEX_CHOICES = [
    (MALE, 'Male'),
    (FEMALE, 'Female'),
]

AVAILABLE = 'Available'
NOT_AVAILABLE = 'Not Available'
PENDING = 'Pending'
ADOPTED = 'Adopted'
PET_AVAILABILITY_CHOICES = [
    (AVAILABLE, 'Available'),
    (NOT_AVAILABLE, 'Not Available'),
    (PENDING, 'Pending'),
    (ADOPTED, 'Adopted')
]


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


class Pet(models.Model):
    name = models.CharField(max_length=25, blank=False)
    type = models.CharField(max_length=10, choices=PET_TYPE_CHOICES, blank=False, default=DOG)
    age = models.CharField(max_length=10, choices=PET_AGE_CHOICES, blank=False, default=BABY)
    gender = models.CharField(max_length=10, choices=PET_SEX_CHOICES, blank=False, default=MALE)
    availability = models.CharField(max_length=15, choices=PET_AVAILABILITY_CHOICES, blank=False, default=AVAILABLE)
    description = models.CharField(max_length=255, blank=True, default='')
    last_updated = models.DateTimeField(auto_now=True, blank=False)
    date_created = models.DateTimeField(auto_now_add=True, blank=False)

    # TO ADD:
    # breed, picture_links, news blurb, dispositions

