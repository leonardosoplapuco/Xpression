"""
URL configuration for main project.

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
from api import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('registered_users/', views.registered_user_list),
    path('users/', views.user_list),
    path('users/<int:id>', views.user_detail),
    path('messages/', views.message_list),  # Nueva ruta para la lista de mensajes
    path('messages/<int:id>/', views.message_detail),  # Nueva ruta para detalles de men    saje
    path('favourite_messages/', views.favourite_message_list),
    path('favourite_messages/<int:id>/', views.favourite_message_detail),
    path('draft_messages/', views.draft_message_list),
    path('application_configurations/', views.application_configuration_list),
    path('application_configurations/<int:id>/', views.application_configuration_detail)    ,
    path('search_history/', views.search_history_list),
    path('personal_notes/', views.personal_note_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)
