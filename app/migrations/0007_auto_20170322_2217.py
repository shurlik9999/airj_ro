# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20170322_2212'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('begin_at', models.DateTimeField()),
                ('end_at', models.DateTimeField()),
                ('title', models.TextField()),
                ('description', models.TextField()),
                ('recommended_for', models.TextField()),
                ('speaker_moderator', models.TextField()),
                ('place', models.TextField()),
            ],
            options={
                'db_table': 'event',
                'managed': False,
            },
        ),
        migrations.AlterModelTable(
            name='requestmessages',
            table='request_messages',
        ),
    ]
