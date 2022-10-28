from django.urls import path
# from .views import CredentialsListView
from .views import CodesView

urlpatterns = [
    path('codes', CodesView.as_view()),
]
