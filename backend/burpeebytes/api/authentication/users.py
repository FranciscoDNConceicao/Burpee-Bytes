from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def getUsersFromToken(request):
    data = request.data
    if 'token' in request.data:
        user = Token.objects.get(key=data['token']).user
        result = {
            "username": user.username,
            "firstName": user.first_name,
            "lastName": user.last_name
        }
        return Response(result, status=status.HTTP_200_OK)
    return Response(None, status=status.HTTP_204_NO_CONTENT)