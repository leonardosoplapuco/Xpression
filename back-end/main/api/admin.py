from django.contrib import admin
from .models import User
from .models import Message
from .models import FavouriteMessage
from .models import DraftMessage
from .models import ApplicationConfiguration
from .models import SearchHistory
from .models import PersonalNote

admin.site.register(User)
admin.site.register(Message)
admin.site.register(FavouriteMessage)
admin.site.register(DraftMessage)
admin.site.register(ApplicationConfiguration)
admin.site.register(SearchHistory)
admin.site.register(PersonalNote)
