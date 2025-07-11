# Generated by Django 5.2.4 on 2025-07-07 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('stock', models.IntegerField()),
                ('category', models.CharField(choices=[('Dairy', 'Dairy'), ('Grocery', 'Grocery'), ('Meat', 'Meat'), ('Vegetable', 'Vegetable'), ('Fruit', 'Fruit')], max_length=20)),
            ],
        ),
    ]
