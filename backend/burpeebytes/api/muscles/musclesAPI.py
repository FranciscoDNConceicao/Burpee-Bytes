from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from .serializers.muscles import MuscleSerializer

@api_view(['POST'])
def createMuscle(request):
    data = request.data
    headers = request.headers
    if headers.get('Session'):
        user = Token.objects.get(key=headers.get('Session')).user
        if not user or not user.is_authenticated():
            return Response(None, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(None, status=status.HTTP_404_NOT_FOUND)
    
    muscleSerializer = MuscleSerializer(data=data)
    if muscleSerializer.is_valid():
        muscleObj = muscleSerializer.save()
        return Response({'id': muscleObj.id,'name':muscleObj.name}, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)

    