# Generated by Django 4.0.4 on 2022-07-02 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('somo_backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='category',
            field=models.CharField(choices=[('trainer', 'trainer'), ('student', 'student')], default='student', max_length=7),
        ),
    ]