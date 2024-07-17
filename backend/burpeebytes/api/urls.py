from django.urls import path, include
from .authentication import authentication


urlpatterns = [
    path('web/register', authentication.Authenticate)
]