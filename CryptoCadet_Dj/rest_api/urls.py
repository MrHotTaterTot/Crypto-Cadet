# REST API URL Configuration


from django.urls import path
from . import views

urlpatterns = [
    path("user/<int:user_id>", views.UserExample.as_view(), name="example_hello_user"),
]
