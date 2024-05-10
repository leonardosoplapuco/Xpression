from rest_framework import serializers
from .models import User
from .models import RegisteredUser
from .models import Message
from .models import FavouriteMessage
from .models import DraftMessage
from .models import ApplicationConfiguration
from .models import SearchHistory
from .models import PersonalNote


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'address']
        extra_kwargs = {
            'username': {'required': False, 'allow_blank': True}
        }

class RegisteredUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisteredUser
        fields = ['id', 'username', 'address', 'password']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'recipient', 'message_content', 'message_date']

class FavouriteMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavouriteMessage
        fields = ['id', 'user', 'message', 'favourite_date']

class DraftMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DraftMessage
        fields = ['id', 'sender', 'recipient', 'message_content', 'draft_date']

class ApplicationConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationConfiguration
        fields = ['id', 'user', 'username', 'full_name', 'address', 'theme', 'language']
        extra_kwargs = {
            'username': {'required': False, 'allow_blank': True},
            'full_name': {'required': False, 'allow_blank': True},
            'theme': {'required': False, 'allow_blank': True},
            'language': {'required': False, 'allow_blank': True}
        }

class SearchHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchHistory
        fields = ['id', 'user', 'search_query', 'search_date']

class PersonalNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalNote
        fields = ['id', 'user', 'note_content', 'creation_date', 'last_modified']
