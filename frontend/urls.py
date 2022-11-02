from django.urls import path
from .views import index

urlpatterns = [
    path('', index),            # home page/ news feed
    path('search', index),      # search page
    path('browse', index),      # browse page
    # path('login', index),      # login page
    # path('signup', index),      # signup page
    # path('profile', index),      # profile page
]
