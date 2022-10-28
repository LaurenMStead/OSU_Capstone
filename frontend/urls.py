from django.urls import path
from .views import index

urlpatterns = [
    path('', index),            # home page/ news feed
    path('signup', index),      # signup page
]
