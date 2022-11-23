from django.db import models


class Pet(models.Model):
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

    MALE = 'Male'
    FEMALE = 'Female'
    PET_SEX_CHOICES = [
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    ]

    YES = 'Yes'
    NO = 'No'
    UNKNOWN = 'Unknown'
    PET_DISPOSITION_CHOICES = [
        (YES, 'Yes'),
        (NO, 'No'),
        (UNKNOWN, 'Unknown'),
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

    DOG = 'Dog'
    CAT = 'Cat'
    OTHER = 'Other'
    PET_TYPE_CHOICES = [
        (DOG, 'Dog'),
        (CAT, 'Cat'),
        (OTHER, 'Other'),
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
    OTHER = 'Other'
    PET_BREED_CHOICES = [
        (DOG, (
            (POODLE, 'Poodle'),
            (GERMAN_SHEPHERD, 'German Shepherd'),
            (CHIHUAHUA, 'Chihuahua'),
            (MUT, 'Mut'),
            (LABRADOR, 'Labrador'),
        )),
        (CAT, (
            (DSH, 'Domestic Short Hair'),
            (DLH, 'Domestic Long Hair'),
            (SIAMESE, 'Siamese'),
            (RUSSIAN_BLUE, 'Russian Blue'),
            (MAINE_COON, 'Main Coon'),
        )),
        (OTHER, (
            (FISH, 'Fish'),
            (SNAKE, 'Snake'),
            (TURTLE, 'Turtle'),
            (IGUANA, 'Iguana'),
        )),
    ]

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
