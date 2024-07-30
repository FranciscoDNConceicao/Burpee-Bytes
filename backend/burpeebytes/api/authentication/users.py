from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def getUsersFromToken(request):
    headers = request.headers
    if headers.get('Session'):
        user = Token.objects.get(key=headers.get('Session')).user
        result = {
            "username": user.username,
            "firstName": user.first_name,
            "lastName": user.last_name
        }
        return Response(result, status=status.HTTP_200_OK)
    return Response(None, status=status.HTTP_204_NO_CONTENT)