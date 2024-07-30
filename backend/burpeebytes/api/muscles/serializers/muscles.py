from rest_framework import serializers
from base.models.Muscles.muscles import Muscles

class MuscleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muscles
        fields = '__all__'
    