from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
