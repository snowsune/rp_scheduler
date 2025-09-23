from django.urls import path
from . import views

app_name = "rp_scheduler"

urlpatterns = [
    path("", views.RPLandingView.as_view(), name="landing"),
    # Add your URL patterns here
]
