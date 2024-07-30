from django.db import models
from ..Exercises.exercises import Exercises

class ExercisesImages(models.Model):
    path = models.CharField(max_length=300)
    exercise = models.ForeignKey(Exercises, on_delete=models.SET_NULL, blank=True, null=True)
