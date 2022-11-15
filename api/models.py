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
    image = models.ImageField(upload_to='headshots', default='headshots/default.jpeg')
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

    # Notes:
    # I went ahead and added all the rest of the information we needed for our table.  
    # I organized the model to avoid any usage of foreign keys to make things as simple as possible. 
    # I did leave the previous classes you created for dispositions and breeds (commented out) 
    # just in case we want to revert back to it for some reason. 
    


