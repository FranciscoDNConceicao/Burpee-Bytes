from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']
        
    def create(self,validated_data):
        username = validated_data['username'] if 'username' in validated_data else None
        password = validated_data['password'] if 'password' in validated_data else None
        email = validated_data['email'] if 'email' in validated_data else None
        firstName = validated_data['first_name'] if 'first_name' in validated_data else None
        lastName = validated_data['last_name'] if 'last_name' in validated_data else None


        user = User.objects.create(
            username=username, email=email, first_name=firstName, last_name=lastName
        )
        user.set_password(validated_data['password'])
        user.save()
        return user