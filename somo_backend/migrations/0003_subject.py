# Generated by Django 4.0.4 on 2022-07-02 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('somo_backend', '0002_alter_customuser_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]