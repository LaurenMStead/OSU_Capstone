YES = 'Yes'
NO = 'No'
UNKNOWN = 'Unknown'

PET_DISPOSITION_CHOICES = [
    (YES, 'Yes'),
    (NO, 'No'),
    (UNKNOWN, 'Unknown'),
]

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
PET_GENDER_CHOICES = [
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
        (OTHER, 'Other'),
    )),
]
