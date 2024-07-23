from django.urls import path, include
from . import authentication, users
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('register/', authentication.Authenticate),
    path('login/', authentication.Login),
    path('user/logged/', authentication.IsUserAuthenticated),
    path('user/token/', users.getUsersFromToken)
]