"""
URL configuration for ivoc project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path 
from django.contrib.auth import views as auth_views
from hub import views as user_views
from hub import views  # Import your views


urlpatterns = [
   path('admin/', admin.site.urls),
   path('', user_views.home, name='home'),
   path('register/', user_views.register, name='register'),
   path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
   path('logout/', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
   path('connect/', user_views.connect, name='connect'),
   path('about/', user_views.about, name='about'),
   path('president/', user_views.president, name='president'),
   path('programs/', user_views.programs, name='programs'),
   path('donate/', user_views.donate, name='donate'),
   path('music/', user_views.music, name='music'),
   path('photoANDvideo/', user_views.photoANDvideo, name='photoANDvideo'),
   path('counselors/', user_views.counselors, name='counselors'),
   path('send_email/', views.send_message, name='send_email'),
   path('services/', user_views.services, name='services'),


]

