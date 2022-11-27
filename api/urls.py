from django.urls import path
from .views import GetAllPetsView, UpdateCurrentPet, CreateNewUserView, LoginCurrentUserView, CreateNewPetView, \
                    GetChoicesView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('pets', GetAllPetsView, name='pets'),
    path('pets/add-new-pet', CreateNewPetView, name="new-pet"),
    path('pets/<int:pet_id>', UpdateCurrentPet, name='current-pet'),
    path('signup', CreateNewUserView, name='signup'),
    path('login', LoginCurrentUserView, name='login'),
    path('get-choices', GetChoicesView, name='choices'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
