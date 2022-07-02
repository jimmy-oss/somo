# Generated by Django 4.0.4 on 2022-07-02 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('somo_backend', '0018_alter_customuser_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email address'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='is_active',
            field=models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active'),
        ),
    ]
