from random import randint
from labyrinth.models import User, Module
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.core import serializers

def next(request):
    try:
        last = Module.objects.count() - 1
        index = randint(0, last)
        m = Module.objects.all()[index]
    except Module.DoesNotExist:
        raise Http404
    return HttpResponseRedirect(m.url)

def done(request):
    return HttpResponse("Thank you for taking the time.")

def user(request, user_id):
    # capture request attributes and update user
    u = get_object_or_404(User, pk=user_id)
    response = HttpResponse()
    response['CONTENT_TYPE'] = "application/json"
    response.write(serializers.serialize("json", [u]))
    return response

def create_user(request):
    # todo: create user from attributes.
    # drop a cookie w/ the userid.
    return HttpResponse("Welcome new user.")