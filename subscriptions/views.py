from rest_framework import generics
from .models import SubscriptionBox, Subscription
from .serializers import SubscriptionBoxSerializer, SubscriptionSerializer

class SubscriptionBoxList(generics.ListCreateAPIView):
    queryset = SubscriptionBox.objects.all()
    serializer_class = SubscriptionBoxSerializer

class SubscriptionList(generics.ListCreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
