from django.contrib import admin

# Register your models here.
from app.models import HomepageBlock, Text, RequestMessages, \
    Template, Section, PlaneCategory, Plane, News,NewsTemplate,HomepageBlockTemplate,Images,ImagesPlace


class HomePageBlockAdmin(admin.ModelAdmin):
    # fields_ = HomepageBlock._meta.get_all_field_names()
    # list_display = [
    #     'section',
    #     'template',
    #     'index',
    #     'image_background'
    #     'image_left',
    #     'image_right',
    #     'text',
    #     'visible'
    # ]
    fields_ = (
        'section',
        'template',
        'index',
        'image_background',
        'image_left',
        'image_right',
        'text',
        'visible'
    )
    list_display = fields_
    list_editable = ['text']
    class Media:
        js = ['/static/grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
              '/static/grappelli/tinymce_setup/tinymce_setup.js',
              ]

class TextAdmin(admin.ModelAdmin):
    fields_ = (
        'description',
        'code',
        'content'
    )
    # fields_ = Text._meta.get_all_field_names()
    list_display = fields_
    class Media:
        js = ['/static/grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
              '/static/grappelli/tinymce_setup/tinymce_setup.js',
              ]
class RequestMessagesAdmin(admin.ModelAdmin):
    fields_ = (
        'id',
       'contacts',
        'message',
        'route',
        'route_date',
        'pax',
        'created_date'
    )
    list_display = fields_
class NewsAdmin(admin.ModelAdmin):
    # fields_ = News._meta.get_all_field_names()
    fields_ = (
        'title',
        'content',
        'template',
        'visible',
        'image',
        'datetime',
        'pinned',
        )
    list_display = fields_

    class Media:
        js = ['/static/grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
              '/static/grappelli/tinymce_setup/tinymce_setup.js',
              ]
class PlaneAdmin(admin.ModelAdmin):
    class Media:
        js = ['/static/grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
              '/static/grappelli/tinymce_setup/tinymce_setup.js',
              ]
    fields_ = (
        'datetime',
        'title',
        'image_plan',
        'image_interior',
        'image_exterior',
        'description',
        'visible',
        'passengers',
        'range',
        'category',
        'flights'

    )
    list_display = fields_


class ImagesAdmin(admin.ModelAdmin):
    fields_ = (
        'title',
        'path',
        'image_place',
        'visible'
    )
    list_display = fields_

class PlaneCategoryAdmin(admin.ModelAdmin):
    fields_ = (
        'id',
        'description'
    )
    list_display = fields_

admin.site.register(HomepageBlock, HomePageBlockAdmin)
admin.site.register(Text, TextAdmin)
admin.site.register(RequestMessages, RequestMessagesAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Plane, PlaneAdmin)
admin.site.register(Images, ImagesAdmin)
admin.site.register(PlaneCategory, PlaneCategoryAdmin)