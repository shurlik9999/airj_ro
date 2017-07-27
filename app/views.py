import os
from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.http import HttpResponseNotFound
from django.conf import settings
from app.forms import MessageForm
from app import models

from project import __project_version__
# Create your views here.

def index(request):
    import re
    p = re.compile(r'<.*?>')
    description = models.Text.objects.get(code='common-description').content
    description = p.sub('', description)

    keywords = models.Text.objects.get(code='common-keywords').content
    keywords = p.sub('', keywords)

    content_blocks = models.Text.objects.filter(code__startswith='home-section')
    # print(content_blocks['code'])

    carousel_section_2 = []
    carousel_section_3 = []
    carousel_section_4 = []
    for content_block in content_blocks:
        if 'home-section-2-text-block-1-text-' in content_block.code:
            carousel_section_2.append(content_block)
        if 'home-section-3-text-block-1-text-' in content_block.code:
            carousel_section_3.append(content_block)
        if 'home-section-4-text-block-1-text-' in content_block.code:
            carousel_section_4.append(content_block)

    block = models.HomepageBlock.objects.all()

    slick_slider_images = list(models.Images.objects.filter(visible = 1))
    # print(slick_slider_images)
    slick_object = {}
    for image in slick_slider_images:

        if not str(image.image_place) in slick_object.keys():
            slick_object[str(image.image_place)] = []
        slick_object[str(image.image_place)].append(image)




    form = MessageForm()
    # for home_block in block:
        # print (home_block.section)
    return render(request, 'index.html',
                  {
                      'version': __project_version__,
                      'form': form,
                      'blocks':block,
                      'slick_images': slick_object,
                      'description' : description,
                      'keywords':keywords,
                      'content_blocks':content_blocks,
                      'page_class': 'page-home',
                      'carousel_section_content': {
                            'section_2': carousel_section_2,
                            'section_3': carousel_section_3,
                            'section_4': carousel_section_4,
                        },
                  }
                  )
def about(request):
    import re
    p = re.compile(r'<.*?>')
    description = models.Text.objects.get(code='about-description').content
    description = p.sub('', description)

    keywords = models.Text.objects.get(code='common-keywords').content
    keywords = p.sub('', keywords)

    content_blocks = models.Text.objects.filter(code__startswith='about-section')
    form = MessageForm()
    return render(request, 'about.html',
                  {
                      'version': __project_version__,
                      'form': form,
                      'description' : description,
                      'keywords': keywords,
                      'content_blocks':content_blocks,
                      'page_class': 'page-about',
                  }
                  )


def contacts(request):
    import re
    p = re.compile(r'<.*?>')
    description = models.Text.objects.get(code='contacts-description').content
    description = p.sub('', description)

    keywords = models.Text.objects.get(code='common-keywords').content
    keywords = p.sub('', keywords)

    content_blocks = models.Text.objects.filter(code__startswith='contacts-section')
    form = MessageForm()
    return render(request, 'contacts.html',
                  {
                      'version': __project_version__,
                      'form': form,
                      'description' : description,
                      'keywords': keywords,
                      'content_blocks':content_blocks,
                      'page_class': 'page-contacts',
                  }
                  )


def planes(request):
    import re
    p = re.compile(r'<.*?>')
    description = models.Text.objects.get(code='planes-description').content
    description = p.sub('', description)

    keywords = models.Text.objects.get(code='common-keywords').content
    keywords = p.sub('', keywords)

    planes = [p.to_dict(['datetime',
        'title',
        'image_plan',
        'description',
        'visible',
        'passengers',
        'range',
        'category',
        'flights',
        'image_interior',
        'image_exterior',
        'category']) for p in models.Plane.objects.all()]





    # planes = models.Plane.objects.all().values(
    #     'datetime',
    #     'title',
    #     'image_plan',
    #     'description',
    #     'visible',
    #     'passengers',
    #     'range',
    #     'category',
    #     'flights',
    #     'image_interior',
    #     'image_exterior',
    #     'category__description'
    # )

    for plane in planes:

        plane['images_count'] = 0
        plane['images_arr'] = []
        if plane['image_plan']:
            # print(plane['image_plan'])
            plane['images_arr'].append(plane['image_plan'].url)
            # plane.images_count += 1
        if plane['image_exterior']:
            plane['images_arr'].append(plane['image_exterior'].url)
            # plane.images_count += 1
        if plane['image_interior']:
            plane['images_arr'].append(plane['image_interior'].url)
            # plane.images_count += 1
        # print (str(plane.images_arr))

    form = MessageForm()
    return render(request, 'planes.html',
                  {
                      'version': __project_version__,
                      'form': form,
                      'planes': planes,
                      'keywords': keywords,
                      'description' : description,
                      'page_class': 'page-planes',
                  }
                  )


def news(request):
    import re
    p = re.compile(r'<.*?>')
    description = models.Text.objects.get(code='news-description').content
    description = p.sub('', description)
    news = models.News.objects.all()
    form = MessageForm()

    keywords = models.Text.objects.get(code='common-keywords').content
    keywords = p.sub('', keywords)

    return render(request, 'news.html',
                  {
                      'version': __project_version__,
                      'form': form,
                      'news': news,
                      'description': description,
                      'keywords': keywords,
                      'page_class': 'page-news',
                  }
                  )

# from django.core.mail import send_mail, BadHeaderError
# from django.http import HttpResponse, HttpResponseRedirect
#
# def send_email(request):
#     subject = request.POST.get('subject', 'test')
#     message = request.POST.get('message', 'test')
#     from_email = request.POST.get('from_email', 'test@test.com')
#     if subject and message and from_email:
#         try:
#             send_mail(subject, message, from_email, ['admin@example.com'])
#         except BadHeaderError:
#             return HttpResponse('Invalid header found.')
#         return HttpResponseRedirect('/contact/thanks/')
#     else:
#         # In reality we'd use a form class
#         # to get proper validation errors.
#         return HttpResponse('Make sure all fields are entered and valid.')
def generate_sitemap(request):
    sitemap_path = os.path.join(settings.BASE_DIR,
                                "sitemap.xml")
    return HttpResponse(open(sitemap_path).read(), content_type='text/xml')



def send_message(request):
    from app.forms import MessageForm
    from django.core.mail import send_mail
    from django.utils import timezone

    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = MessageForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            post = form.save(commit=False)
            post.created_date = timezone.now()
            post.save()
            message = 'Oт: {0} \n' \
                      'Сообщение: {1} {2} {3} {4}'.format(
                                            form.cleaned_data['contacts'],
                                            form.cleaned_data['route'],
                                            form.cleaned_data['route_date'],
                                            form.cleaned_data['pax'],
                                            form.cleaned_data['message'])

            # subject = request.POST.get('subject', '')
            # message = request.POST.get('message', '')
            # from_email = request.POST.get('from_email', '')

            sender = 'zakazchartera@mail.ru'
            #sender = 'alexandr.taracanov@gmail.com'
            receivers = ['zakazchartera@mail.ru']
            try:
                send_mail('Сообщение с сайта AirJets.ro', message, sender,
                          receivers, fail_silently=False)
                print("Successfully sent email")
            except Exception as e:
                print("Error: unable to send email " + str(e))
                return JsonResponse({'status': 'error', 'errors': "Error: unable to send email " + str(e)})
            # ...
            # redirect to a new URL:
            return JsonResponse({'status':'OK'})
        else:
            print(form.errors)
            return JsonResponse({'status':'error','errors':form.errors})
    return HttpResponseNotFound('<h1>No Page Here</h1>')