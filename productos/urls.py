from django.urls import path, include
from rest_framework.routers import DefaultRouter
from productos import views

router = DefaultRouter()
router.register(r'product', views.ProductInfoViewSet, basename='product')

urlpatterns = router.urls

