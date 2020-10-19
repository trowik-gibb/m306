from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=50)
    creator = models.IntegerField()
    created_at = models.DateField()
