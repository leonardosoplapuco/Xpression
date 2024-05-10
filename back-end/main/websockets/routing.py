from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'^ws/socket-server/', consumers.LoginConsumer.as_asgi()),
    re_path(r'^ws/signup-socket-server/', consumers.SignUpConsumer.as_asgi())
]
