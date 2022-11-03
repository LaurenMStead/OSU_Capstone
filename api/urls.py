from django.urls import path
# from .views import CredentialsListView
from .views import PetsView

urlpatterns = [
    path('pets', PetsView.as_view()),
]
