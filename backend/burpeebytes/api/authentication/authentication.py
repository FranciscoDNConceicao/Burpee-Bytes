from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .serializers.users import UserSerializer
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

@api_view(['POST'])
def Authenticate(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def Login(request):
    if 'username' in request.data and 'password' in request.data:
        userDataDict = {
            'username': request.data['username'],
            'password': request.data['password']
        }
        user = get_object_or_404(User, username=userDataDict['username'])
        if user:
            if not user.check_password(request.data['password']):
                return Response(status=status.HTTP_404_NOT_FOUND)
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "user": userDataDict}, status=status.HTTP_200_OK)
        else:
            return Response(userDataDict, status=status.HTTP_404_NOT_FOUND)
    return Response(None, status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def IsUserAuthenticated(request):
    data = request.data
    if 'username' in data:
        user = get_object_or_404(User, username=data['username'])
        return Response({'is_auth': user.is_authenticated}, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)