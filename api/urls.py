from django.urls import path
from .views import pets, currPet, createNewUser, loginUser, newPet

urlpatterns = [
    path('pets', pets, name='pets'),
    path('pets/add-new-pet', newPet, name="new-pet"),
    path('pets/<int:id>', currPet, name='current-pet'),
    path('signup', createNewUser, name='signup'),
    path('login', loginUser, name='login'),
]
