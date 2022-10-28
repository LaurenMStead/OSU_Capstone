from django.urls import path
from .views import index, search, browse, login, signup, profile

urlpatterns = [
    path('', index),            # home page/ news feed
    path('search', search),      # search page
    path('browse', browse),      # browse page
    path('login', login),      # login page
    path('signup', signup),      # signup page
    path('profile', profile),      # profile page
]
