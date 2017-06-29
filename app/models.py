from django.db import models
from django.utils import timezone
from django.conf import settings

# Create your models here.

class Event(models.Model):
    begin_at = models.DateTimeField()
    end_at = models.DateTimeField()
    title = models.TextField()
    description = models.TextField()
    recommended_for = models.TextField()
    speaker_moderator = models.TextField()
    place = models.TextField()

    class Meta:
        managed = False
        db_table = 'event'


class HomepageBlock(models.Model):
    section = models.IntegerField(blank=True, null=True)
    template = models.ForeignKey('app.HomepageBlockTemplate', blank=True, null=True)
    index = models.IntegerField(blank=True, null=True)
    image_background = models.ImageField(upload_to='images/sections/', blank=True, null=True)
    image_left = models.ImageField(upload_to='images/sections/', blank=True, null=True)
    image_right = models.ImageField(upload_to='images/sections/', blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    visible = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.text

    class Meta:
        managed = False
        db_table = 'homepage_block'


class HomepageBlockTemplate(models.Model):
    description = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.description

    class Meta:
        managed = False
        db_table = 'homepage_block_template'


class Images(models.Model):
    title = models.TextField()
    path = models.ImageField(upload_to='images/slider/', blank=True, null=True)
    image_place = models.ForeignKey('app.ImagesPlace', blank=True, null=True)
    visible = models.IntegerField(default=1)

    class Meta:
        managed = False
        db_table = 'images'


class ImagesPlace(models.Model):
    place = models.TextField()

    def __str__(self):
        return self.place

    class Meta:
        managed = False
        db_table = 'images_place'


class Menu(models.Model):
    label = models.CharField(max_length=40)
    url = models.CharField(max_length=40)
    custom = models.CharField(max_length=255)
    visible = models.IntegerField()
    order = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'menu'
#
#
# class Migration(models.Model):
#     version = models.CharField(primary_key=True, max_length=180)
#     apply_time = models.IntegerField(blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'migration'

def generate_filesrc(instance, filename):
    url = ''
    if instance.template == 1 :
        url = 'images/news/full-width/%s' % ( filename)
    else:
        url = 'images/news/half-width/%s' % ( filename)

    # url = "images/news///%s/%s" % (self.user.username, filename)
    return url


class News(models.Model):
    template = models.ForeignKey('app.NewsTemplate', blank=True, null=True, default=1)
    # template_id = models.IntegerField()
    datetime = models.DateTimeField()
    title = models.TextField()
    # image = models.TextField()
    image = models.ImageField(upload_to=generate_filesrc, blank=True, null=False)

    content = models.TextField()
    visible = models.IntegerField(default=1)
    pinned = models.IntegerField(default=0)

    class Meta:
        managed = False
        db_table = 'news'


class NewsTemplate(models.Model):
    description = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.description

    class Meta:
        managed = False
        db_table = 'news_template'


class Plane(models.Model):
    datetime = models.DateTimeField()
    title = models.TextField(blank=True, null=True)
    image_plan = models.ImageField(upload_to='images/planes/plan/', blank=True, null=True)
    description = models.TextField()
    visible = models.IntegerField()
    passengers = models.CharField(max_length=255, blank=True, null=True)
    range = models.IntegerField(blank=True, null=True)
    category = models.ForeignKey('app.PlaneCategory', blank=True, null=True)
    flights = models.TextField(blank=True, null=True)
    image_interior = models.ImageField(upload_to='images/planes/interior/', blank=True, null=True)
    image_exterior = models.ImageField(upload_to='images/planes/exterior/', blank=True, null=True)

    def to_dict(self, fields):
        obj = {}
        for field in fields:
            if '__' in field:
                obj[field.split('__')[0]] = getattr(getattr(self, field.split('__')[0]), field.split('__')[1])
            else:
                obj[field] = getattr(self, field)
        return obj


    @property
    def plan_url(self):
        if self.image_plan and hasattr(self.image_plan, 'url'):
            return self.image_plan.url

    class Meta:
        managed = False
        db_table = 'plane'


class PlaneCategory(models.Model):
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'plane_category'

    def __str__(self):
        return self.description


class Section(models.Model):
    name = models.TextField()
    url = models.TextField()
    page = models.IntegerField()
    order = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'section'


class Template(models.Model):
    description = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'template'


class Text(models.Model):
    description = models.CharField(max_length=255)
    code = models.CharField(unique=True, max_length=255)
    content = models.TextField()

    class Meta:
        managed = False
        db_table = 'text'

class RequestMessages(models.Model):
    contacts = models.CharField(max_length=100)
    message = models.TextField()
    route = models.TextField()
    route_date = models.CharField(max_length=100)
    pax =  models.CharField(max_length=100)
    created_date = models.DateTimeField(default=timezone.now)

    class Meta:
        # managed = False
        db_table = 'request_messages'

#
# class User(models.Model):
#     email = models.CharField(unique=True, max_length=255)
#     role = models.CharField(max_length=255, blank=True, null=True)
#     auth_key = models.CharField(max_length=32)
#     password_hash = models.CharField(max_length=255)
#     created_at = models.IntegerField()
#     updated_at = models.IntegerField()
#     active = models.IntegerField()
#     login_ip = models.CharField(max_length=32, blank=True, null=True)
#     login_time = models.CharField(max_length=32, blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'user'