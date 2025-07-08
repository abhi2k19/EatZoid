from rest_framework import serializers
from .models import SubscriptionBox, Subscription

class SubscriptionBoxSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionBox
        fields = '__all__'

class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = '__all__'
