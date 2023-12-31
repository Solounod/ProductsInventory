# Generated by Django 4.2.3 on 2023-07-20 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ProductInfo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=20)),
                ("description", models.TextField(blank=True)),
                ("quantity_avaible", models.PositiveIntegerField(default=0)),
                ("category", models.CharField(max_length=20)),
                ("brand", models.CharField(max_length=20)),
                ("datetime_creation", models.DateTimeField(auto_now=True)),
                ("update_datetime", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
