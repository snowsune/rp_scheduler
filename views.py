from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.


class RPLandingView(TemplateView):
    template_name = "rp_scheduler/landing.html"
