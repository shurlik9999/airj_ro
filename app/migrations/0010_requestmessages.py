# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_delete_requestmessages'),
    ]

    operations = [
        migrations.CreateModel(
            name='RequestMessages',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('contacts', models.CharField(max_length=100)),
                ('message', models.TextField()),
                ('route', models.TextField()),
                ('route_date', models.CharField(max_length=100)),
                ('pax', models.CharField(max_length=100)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
