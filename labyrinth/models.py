from django.db import models

# Create your models here.
class User (models.Model):
    name = models.CharField(max_length=50)
    emailaddress = models.EmailField(max_length=254)

    def __unicode__(self):
        return self.name
    
class Module (models.Model):
    name = models.CharField(max_length=50)
    url = models.CharField(max_length=1024)

    def __unicode__(self):
        return self.name


    