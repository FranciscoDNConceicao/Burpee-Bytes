from django.db import models
from django.contrib.auth.models import User
from ..Exercises.exercises import Exercises

class PlayList(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    exercises = models.ManyToManyField(Exercises)
