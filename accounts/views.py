from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class ProfileView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
