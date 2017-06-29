from django import template
from django.template.defaultfilters import stringfilter
import locale

register = template.Library()

@register.filter
@stringfilter
def path_helper(path, width):
    """Create path to images"""
    if width:
        return '/resize/w_' + width + path
    else:
        return path


@register.filter
@stringfilter
def path_helper(path, width):
    """Create path to images"""
    if width:
        return '/resize/w_' + width + path
    else:
        return path


@register.filter
@stringfilter
def number_format(num):
    return '{:,}'.format(int(num)).replace(',', ' ')

@register.filter
@stringfilter
def date_format_rem_0(value):
    if value[0] == '0':
        return  value[1:]
    else:
        return value
