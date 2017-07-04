from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from app import views


urlpatterns = [
    # Examples:
    url(r'^$', views.index, name='home'),
    url(r'^about/$', views.about, name='about'),
    # url(r'^contacts/$', views.contacts, name='contacts'),
    url(r'^planes/$', views.planes, name='planes'),
    # url(r'^news/$',views.news, name='news'),
    url(r'^send_message/$', views.send_message, name='send_mail'),
    url(r'^sitemap/$',views.generate_sitemap,name='sitemap'),

    url(r'^grappelli/', include('grappelli.urls')), # grappelli URLS
    url(r'^admin/', include(admin.site.urls)),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)