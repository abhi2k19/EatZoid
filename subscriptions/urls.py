from django.urls import path
from .views import SubscriptionBoxList, SubscriptionList

urlpatterns = [
    path('boxes/', SubscriptionBoxList.as_view()),
    path('', SubscriptionList.as_view()),
]
