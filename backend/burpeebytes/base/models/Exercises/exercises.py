from django.db import models
from ..Muscles.muscles import Muscles

class Exercises(models.Model):
    level_choices = {
        "begin": "Beginner",
        "medium": "Medium",
        "hard": "Hard"
    }
    
    name = models.CharField(max_length=200)
    description = models.TextField()
    level = models.CharField(max_length=6, choices=level_choices)
    rate = models.FloatField()
    muscles = models.ForeignKey(Muscles, on_delete=models.SET_NULL, blank=True, null=True)
    image1 = models.CharField()
