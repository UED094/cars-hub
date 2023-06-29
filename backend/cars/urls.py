from django.urls import path
from . import views

urlpatterns = [path("cars/", views.CarsView.as_view(), name="cars")]
