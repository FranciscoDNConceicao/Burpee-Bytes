from django.db import models
from django.contrib.auth.models import User
from ..Exercises.exercises import Exercises

class Rating(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    value = models.FloatField()
    comment = models.TextField()
    exercise = models.ForeignKey(Exercises, on_delete=models.CASCADE)

