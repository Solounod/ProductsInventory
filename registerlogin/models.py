from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class UserCustom(AbstractUser):
    email = models.EmailField(max_length=50, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']