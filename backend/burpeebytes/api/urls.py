from django.urls import path, include
from .authentication import authentication
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('web/', include('api.authentication.urls')),
]