# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomepageBlock',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('section', models.IntegerField(blank=True, null=True)),
                ('template_id', models.IntegerField(blank=True, null=True)),
                ('index', models.IntegerField(blank=True, null=True)),
                ('image_background', models.TextField(blank=True, null=True)),
                ('image_left', models.TextField(blank=True, null=True)),
                ('image_right', models.TextField(blank=True, null=True)),
                ('text', models.TextField(blank=True, null=True)),
                ('visible', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'homepage_block',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='HomepageBlockTemplate',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('description', models.CharField(max_length=255, blank=True, null=True)),
            ],
            options={
                'db_table': 'homepage_block_template',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('title', models.TextField()),
                ('path', models.TextField()),
                ('image_place_id', models.IntegerField()),
            ],
            options={
                'db_table': 'images',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ImagesPlace',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('place', models.TextField()),
            ],
            options={
                'db_table': 'images_place',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('label', models.CharField(max_length=40)),
                ('url', models.CharField(max_length=40)),
                ('custom', models.CharField(max_length=255)),
                ('visible', models.IntegerField()),
                ('order', models.IntegerField()),
            ],
            options={
                'db_table': 'menu',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Messages',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('contacts', models.CharField(max_length=100)),
                ('message', models.TextField()),
                ('route', models.TextField()),
                ('route_date', models.CharField(max_length=100)),
                ('pax', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'messages',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('template_id', models.IntegerField()),
                ('datetime', models.DateTimeField()),
                ('title', models.TextField()),
                ('image', models.TextField()),
                ('content', models.TextField()),
                ('visible', models.IntegerField()),
                ('pinned', models.IntegerField()),
            ],
            options={
                'db_table': 'news',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='NewsTemplate',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('description', models.CharField(max_length=255, blank=True, null=True)),
            ],
            options={
                'db_table': 'news_template',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Plane',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('datetime', models.DateTimeField()),
                ('title', models.TextField(blank=True, null=True)),
                ('image_plan', models.ImageField(upload_to='images/planes/plan/')),
                ('description', models.TextField()),
                ('visible', models.IntegerField()),
                ('passengers', models.CharField(max_length=255, blank=True, null=True)),
                ('range', models.IntegerField(blank=True, null=True)),
                ('flights', models.TextField(blank=True, null=True)),
                ('image_interior', models.ImageField(blank=True, null=True, upload_to='images/planes/interior/')),
                ('image_exterior', models.ImageField(blank=True, null=True, upload_to='images/planes/exterior/')),
            ],
            options={
                'db_table': 'plane',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PlaneCategory',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('description', models.CharField(max_length=255, blank=True, null=True)),
            ],
            options={
                'db_table': 'plane_category',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.TextField()),
                ('url', models.TextField()),
                ('page', models.IntegerField()),
                ('order', models.IntegerField()),
            ],
            options={
                'db_table': 'section',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Template',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('description', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'template',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Text',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('description', models.CharField(max_length=255)),
                ('code', models.CharField(max_length=255, unique=True)),
                ('content', models.TextField()),
            ],
            options={
                'db_table': 'text',
                'managed': False,
            },
        ),
    ]
