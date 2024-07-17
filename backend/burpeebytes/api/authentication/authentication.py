from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .serializers.users import UserSerializer

@api_view(['POST'])
def Authenticate(request):
    print(request.data)

    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


