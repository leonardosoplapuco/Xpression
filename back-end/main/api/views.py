from django.shortcuts import render
from django.http import JsonResponse
from .models import User
from .models import Message
from .models import FavouriteMessage
from .models import DraftMessage
from .models import ApplicationConfiguration
from .models import SearchHistory
from .models import PersonalNote
from .serializers import UserSerializer
from .serializers import MessageSerializer
from .serializers import FavouriteMessageSerializer
from .serializers import DraftMessageSerializer
from .serializers import ApplicationConfigurationSerializer
from .serializers import SearchHistorySerializer
from .serializers import PersonalNoteSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def user_list(request, format=None):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, id, format=None):
    try:
        user = User.objects.get(pk=id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# mensajes:

@api_view(['GET', 'POST'])
def message_list(request, format=None):
    if request.method == 'GET':
        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def message_detail(request, id, format=None):
    try:
        message = Message.objects.get(pk=id)
    except Message.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MessageSerializer(message)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MessageSerializer(message, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# mensajesfavoritos:

@api_view(['GET', 'POST'])
def favourite_message_list(request, format=None):
    if request.method == 'GET':
        favourite_messages = FavouriteMessage.objects.all()
        serializer = FavouriteMessageSerializer(favourite_messages, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FavouriteMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def favourite_message_detail(request, id, format=None):
    try:
        favourite_message = FavouriteMessage.objects.get(pk=id)
    except FavouriteMessage.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FavouriteMessageSerializer(favourite_message)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FavouriteMessageSerializer(favourite_message, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        favourite_message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# mensajes_borrador:

@api_view(['GET', 'POST'])
def draft_message_list(request, format=None):
    if request.method == 'GET':
        draft_messages = DraftMessage.objects.all()
        serializer = DraftMessageSerializer(draft_messages, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DraftMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# configuracion_aplicacion

@api_view(['GET', 'POST'])
def application_configuration_list(request, format=None):
    if request.method == 'GET':
        configurations = ApplicationConfiguration.objects.all()
        serializer = ApplicationConfigurationSerializer(configurations, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ApplicationConfigurationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def application_configuration_detail(request, id, format=None):
    try:
        configuration = ApplicationConfiguration.objects.get(pk=id)
    except ApplicationConfiguration.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ApplicationConfigurationSerializer(configuration)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ApplicationConfigurationSerializer(configuration, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        configuration.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# historial_busqueda

@api_view(['GET', 'POST'])
def search_history_list(request, format=None):
    if request.method == 'GET':
        histories = SearchHistory.objects.all()
        serializer = SearchHistorySerializer(histories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SearchHistorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# notas_personales

@api_view(['GET', 'POST'])
def personal_note_list(request, format=None):
    if request.method == 'GET':
        notes = PersonalNote.objects.all()
        serializer = PersonalNoteSerializer(notes, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PersonalNoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
