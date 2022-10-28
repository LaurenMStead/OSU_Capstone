from django.shortcuts import render

# Create your views here.


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def search(request, *args, **kwargs):
    return render(request, 'frontend/search.html')

def browse(request, *args, **kwargs):
    return render(request, 'frontend/browse.html')

def login(request, *args, **kwargs):
    return render(request, 'frontend/login.html')

def signup(request, *args, **kwargs):
    return render(request, 'frontend/signup.html')

def profile(request, *args, **kwargs):
    return render(request, 'frontend/profile.html')

