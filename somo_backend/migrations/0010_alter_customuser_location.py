# Generated by Django 4.0.4 on 2022-07-02 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('somo_backend', '0009_customuser_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='location',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]