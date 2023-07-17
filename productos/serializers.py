from rest_framework import serializers
from .models import ProductInfo

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProductInfo
        fields = '__all__'