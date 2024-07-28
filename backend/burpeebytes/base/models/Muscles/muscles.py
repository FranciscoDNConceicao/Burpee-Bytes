from django.db import models

class Muscles(models.Model):

    name = models.CharField(max_length=300)
