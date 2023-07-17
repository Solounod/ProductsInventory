from rest_framework import viewsets
from .serializers import ProductSerializers
from .models import ProductInfo

# Create your views here.
class ProductInfoViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializers
    queryset = ProductInfo.objects.all()
    
