from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('Dairy', 'Dairy'), ('Grocery', 'Grocery'),
        ('Meat', 'Meat'), ('Vegetable', 'Vegetable'),
        ('Fruit', 'Fruit')
    ]
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name
