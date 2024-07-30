from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .musclesAPI import createMuscle

urlpatterns = [
    path('create', createMuscle),
]