from django.db import models
from django.contrib.auth.hashers import make_password


class User(models.Model):
	username = models.CharField(max_length=100)
	address = models.EmailField(max_length=100, unique=True)

	def __str__(self):
		return self.address

class RegisteredUser(models.Model):
	username = models.CharField(max_length=100)
	address = models.EmailField(max_length=100)
	password = models.CharField(max_length=200)

	def save(self, *args, **kwargs):
		 # Verifica si la contrasena es nueva o si se ha cambiado
		if self.pk is None or self.password != RegisteredUser.objects.get(pk=self.pk).password:
			self.password = make_password(self.password)
		super().save(*args, **kwargs)	

	def __str__(self):
		return self.username

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mensajes_enviados')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mensajes_recibidos')
    message_content = models.TextField()
    message_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mensaje de {self.sender} a {self.recipient} - {self.message_date}"

class FavouriteMessage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.ForeignKey(Message, on_delete=models.CASCADE)
    favorite_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"User: {self.user.username}, Message: {self.message.id}, Favorited at: {self.favorite_date}"

class DraftMessage(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='borradores_enviados')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='borradores_recibidos')
    message_content = models.TextField(blank=True, null=True)
    draft_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Borrador de {self.sender} para {self.recipient} - {self.draft_date}"

class ApplicationConfiguration(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)
    full_name = models.CharField(max_length=200)
    address = models.CharField(max_length=100)
    theme = models.BooleanField(default=False)
    language = models.CharField(max_length=100)

    def __str__(self):
        return f"Settings of {self.user.username}"

class SearchHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    search_query = models.TextField()
    search_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"User: {self.user.username}, Query: {self.search_query}, Date: {self.search_date}"

class PersonalNote(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    note_content = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"User: {self.user.username}, Note: {self.note_content[:50]}, Created: {self.creation_date}, Modified: {self.last_modified}"
