from django.urls import path
from .views import pets, pet, createNewUser, loginUser

urlpatterns = [
    # path('pets', PetsView.as_view({'get': 'list'})),
    path('pets', pets, name='pets'),
    path('pets/<int:id>', pet, name='pet'),
    path('signup', createNewUser, name='signup'),
    path('login', loginUser, name='login'),
]
