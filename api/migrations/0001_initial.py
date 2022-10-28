# Generated by Django 4.1.2 on 2022-10-27 01:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Availabilities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('availability', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Breeds',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('breed', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Codes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default='', max_length=8, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Credentials',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, unique=True)),
                ('password_hash', models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Dispositions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('disposition_description', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Types',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Pets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('picture_link', models.CharField(max_length=255)),
                ('location', models.CharField(default='Shelter', max_length=255)),
                ('news', models.CharField(default='', max_length=255)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('age', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.ages')),
                ('availability', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.availabilities')),
                ('breed', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.breeds')),
                ('disposition_description', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.dispositions')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.types')),
            ],
        ),
    ]
