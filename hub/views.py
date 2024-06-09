from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from .forms import UserRegistrationForm
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.http import HttpResponse


def home(request):
   return render(request, 'home.html')

def register(request):
   if request.method == 'POST':
       form = UserRegistrationForm(request.POST)
       if form.is_valid():
           form.save()

           messages.success(request, f'Your account has been created. You can log in now!')   
           return redirect('login')
   else:
       form = UserRegistrationForm()
   context = {'form': form}
   return render(request, 'register.html', context)

def connect(request):
    return render(request, 'connect.html')

def about(request):
    return render(request, 'about.html')

def president(request):
    return render(request, 'president.html')

def programs(request):
    return render(request, 'programs.html')

def donate(request):
    return render(request, 'donate.html')

def music(request):
    return render(request, 'music.html')

def photoANDvideo(request):
    return render(request, 'photoANDvideo.html')

def counselors(request):
    return render(request, 'counselors.html')

def send_message(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        age = request.POST.get('age')

        full_message = f"Message from {name}\nEmail: {email}\nAge: {age}\n\n{message}"

        send_mail(
            subject=f"Message from {name} via IVOC Website",
            message=full_message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=['dahearn2021@gmail.com'],
        )
        
        messages.success(request, "Your message has been sent. Thank you!")

        return redirect('home')
    else:
        return redirect('home')

