from django.conf.urls import url, include
from . import views

urlpatterns = [
    url('/register', views.authenticate, name='register'),
    url('/login', views.login, name='login'),
    url('/newfile', views.newFile, name='newFile')
]


