from django.urls import path
from rest_framework_simplejwt import views as jwt_views

#curl --header "Content-Type: application/json" -X POST http://0.0.0.0:8000/userapi/token/obtain/ --data '{"email":"test@test.com","password":"test123"}'
from rest_framework.routers import SimpleRouter
from .views import LoginViewSet, RegistrationViewSet, RefreshViewSet,FileUploadViewSet


routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'login', LoginViewSet, basename='login')
routes.register(r'register', RegistrationViewSet, basename='register')
routes.register(r'refresh', RefreshViewSet, basename='refresh')
# file upload n retrieve
routes.register(r'fileupload', FileUploadViewSet, basename='fileupload')


urlpatterns = [
    *routes.urls
]