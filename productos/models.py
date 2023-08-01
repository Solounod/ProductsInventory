from django.db import models
from django.conf import settings


# Create your models here.

class ProductInfo(models.Model):
    name = models.CharField(max_length=20)
    name_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    quantity_avaible = models.PositiveIntegerField(default=0)
    category = models.CharField(max_length=20)
    brand = models.CharField(max_length=20)
    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True)
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False)

    


