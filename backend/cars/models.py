from django.db import models


# Create your models here.
class Car(models.Model):
    make = models.CharField(max_length=120)
    model = models.CharField(max_length=120)
    img_url = models.URLField(max_length=500, default="")

    def __str__(self):
        return self.make + " " + self.model
