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

POODLE = 'Poodle'
GERMAN_SHEPHERD = 'German Shepherd'
CHIHUAHUA = 'Chihuahua'
MUT = 'Mut'
LABRADOR = 'Labrador'
DSH = 'Domestic Short Hair'
DLH = 'Domestic Long Hair'
SIAMESE = 'Siamese'
RUSSIAN_BLUE = 'Russian Blue'
MAINE_COON = 'Main Coon'
FISH = 'Fish'
SNAKE = 'Snake'
TURTLE = 'Turtle'
IGUANA = 'Iguana'
PET_BREED_CHOICES = [
    (POODLE, 'Poodle'),
    (GERMAN_SHEPHERD, 'German Shepherd'),
    (CHIHUAHUA, 'Chihuahua'),
    (MUT, 'Mut'),
    (LABRADOR, 'Labrador'),
    (DSH, 'Domestic Short Hair'),
    (DLH, 'Domestic Long Hair'),
    (SIAMESE, 'Siamese'),
    (RUSSIAN_BLUE, 'Russian Blue'),
    (MAINE_COON, 'Main Coon'),
    (FISH, 'Fish'),
    (SNAKE, 'Snake'),
    (TURTLE, 'Turtle'),
    (IGUANA, 'Iguana')
]

YES = 'Yes'
NO = 'No'
UNKNOWN = 'Unknown'

PET_DISPOSITION_CHOICES = [
    (YES, 'Yes'),
    (NO, 'No'),
    (UNKNOWN, 'Unknown'),
    ]


# class Breeds(models.Model):
#     PET_BREED_CHOICES = [
#         ('Poodle', 'Poodle'),
#         ('German Shepherd', 'German Shepherd'),
#         ('Chihuahua', 'Chihuahua'),
#         ('Mut', 'Mut'),
#         ('Labrador', 'Labrador'),
#         ('DSH', 'Domestic Short Hair'),
#         ('DLH', 'Domestic Long Hair'),
#         ('Siamese', 'Siamese'),
#         ('Russian Blue', 'Russian Blue'),
#         ('Maine Coon', 'Maine Coon'),
#         ('Fish', 'Fish'),
#         ('Snake', 'Snake'),
#         ('Turtle', 'Turtle'),
#         ('Iguana', 'Iguana'),
#     ]
#     breed = models.CharField(max_length=50, choices=PET_BREED_CHOICES, blank=True)


# class Dispositions(models.Model):

#     OPTION_1 = 'Good with children'
#     OPTION_2 = 'Good with other animals'
#     OPTION_3 = 'Must be leashed at all times'

#     PET_DISPOSITION_CHOICES = [
#         (OPTION_1, 'Good with children'),
#         (OPTION_2, 'Good with other animals'),
#         (OPTION_3, 'Must be leashed at all times'),

#     ]
#     disposition_1 = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=True)
#     disposition_2 = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=True, unique=True)
#     disposition_3 = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=True, unique=True)


class Pet(models.Model):
    name = models.CharField(max_length=25, blank=False)
    type = models.CharField(max_length=10, choices=PET_TYPE_CHOICES, blank=False, default=DOG)
    
    breed = models.CharField(max_length=50, choices=PET_BREED_CHOICES, blank=True)
    
    age = models.CharField(max_length=10, choices=PET_AGE_CHOICES, blank=False, default=BABY)
    gender = models.CharField(max_length=10, choices=PET_SEX_CHOICES, blank=False, default=MALE)
    
    good_with_children = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=False, default=UNKNOWN)
    good_with_other_animals = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=False, default=UNKNOWN)
    must_be_leashed = models.CharField(max_length=50, choices=PET_DISPOSITION_CHOICES, blank=False, default=UNKNOWN)
    
    availability = models.CharField(max_length=15, choices=PET_AVAILABILITY_CHOICES, blank=False, default=AVAILABLE)
    description = models.CharField(max_length=255, blank=True, default='')
    
    news_blurb = models.CharField(max_length=255, blank=True, default='')
    
    last_updated = models.DateTimeField(auto_now=True, blank=False)
    date_created = models.DateTimeField(auto_now_add=True, blank=False)

    # TO ADD:
    # breed -> I was struggling with this one, like if an admin is adding a new pet, and specifies that the pet is of
    #           type dog, the "ideal" situation would be that only dog breeds would pop up, but I couldn't wrap my head
    #           around how to do this in sql. not necessary though, just a thought .
    # picture_links -> there's a special django way to do this. might need a table like Dispositions so we can have
    #                   multiple pictures for one animal.
    #                   Helpful ink: https://docs.djangoproject.com/en/3.1/faq/usage/#how-do-i-use-image-and-file-fields
    # news blurb -> may need to be its own table?
    # dispositions -> needs to be added as a foreign key to Pets


