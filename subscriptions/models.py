from django.db import models

class SubscriptionBox(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50)
    frequency = models.CharField(max_length=20)  # Weekly, Monthly

class Subscription(models.Model):
    user_id = models.IntegerField()  # Store user ID from `accounts`
    box = models.ForeignKey(SubscriptionBox, on_delete=models.CASCADE)
    start_date = models.DateField()
    status = models.CharField(max_length=20, default='Active')
