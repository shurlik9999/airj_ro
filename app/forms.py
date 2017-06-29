from django import forms
from .models import RequestMessages

class MessageForm(forms.ModelForm):
    contacts = forms.CharField(required=True, max_length=100)
    message = forms.CharField(required=True, max_length=1000)
    route = forms.CharField(required=False, max_length=1000)
    route_date = forms.CharField(required=False, max_length=1000)
    pax = forms.CharField(required=False, max_length=100)
    created_date = forms.DateTimeField(required=False)

    class Meta:
        model = RequestMessages
        fields = '__all__'

