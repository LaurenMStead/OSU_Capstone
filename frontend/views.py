from django.shortcuts import render
# Create your views here.


# We only need this one - all pages will be rendered through here
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
