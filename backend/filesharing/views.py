from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from .models import File
from .controller.RegistrationController.RegistrationController import RegistrationController
from .controller.PersonController.PersonController import PersonController


# Create your views here.
registerController = RegistrationController()
personController = PersonController()

# --------------------------#Personapi#----------------------------
def register(request):
    email = request.POST.get('email')
    username = request.POST.get('username')
    password = request.POST.get('password')
    if registerController.checkIfEmailExists(email):
        user = User.objects.create_user(username, email, password)
        user.save()
        response = HttpResponse(user)
        response['Content-Type'] = 'application/json'
        response['Access-Control-Allow-Origin'] = '*'
        return response
    else:
        return HttpResponse('login failed')



def authenticate(request, response):
    email = request.POST.get('email')
    password = request.POST.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
        request.session['user'] = user.id
        login(request, user)
        response.set_cookie('user', user.id)
        return response



# ------------------------------#Fileapi#-------------------------
def newFile(request):
    if request.method == 'POST':
        file = request.FILES['file']
        user = request.POST.get('user')
        File.objects.create(file=file, owner=user)
        response = HttpResponse(file)
        response['Content-Type'] = 'multipart/form-data'
        response['Access-Control-Allow-Origin'] = '*'
        return response


def displayAllFiles(request):
    files = []
    for file in File.objects.all():
        print(file.name)
    files = File.objects.all()
    response = HttpResponse(files)
    return response
