from rest_framework import serializers
from .models import User
from .models import Message
from .models import FavoriteMessage
from .models import DraftMessage
from .models import ApplicationConfiguration
from .models import SearchHistory
from .models import PersonalNote

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'recipient', 'message_content', 'message_date']

class FavoriteMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteMessage
        fields = ['id', 'user', 'message', 'favorite_date']

class DraftMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DraftMessage
        fields = ['id', 'sender', 'recipient', 'message_content', 'draft_date']

class ApplicationConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationConfiguration
        fields = ['id', 'user', 'language', 'theme', 'notification_settings']

class SearchHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchHistory
        fields = ['id', 'user', 'search_query', 'search_date']

class PersonalNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalNote
        fields = ['id', 'user', 'note_content', 'creation_date', 'last_modified']

