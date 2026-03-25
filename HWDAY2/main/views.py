from django.shortcuts import render

def gallery(request):
    return render(request, 'main/gallery.html')

def contact(request):
    return render(request, 'main/contact.html')
