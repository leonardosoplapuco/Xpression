#!/bin/bash

###### EXECUTE THIS SCRIPT ONLY AFTER SOURCING VIRTUAL_ENVIRONMENT.SH ######
# From the command line:
# $   ./setup_script.sh


# Install the required dependencies in the virtual environment
pip3 install django djangorestframework django-cors-headers

# Start the Django project with the name 'users' in the current directory
django-admin startproject users .

# Create the SQLite database structure and migrate the data structures
python3 manage.py makemigrations users
python3 manage.py migrate

# Create superuser for the app
python3 manage.py createsuperuser
# This will ask you to provide a username, email address and password
# Example:

# Username (leave blank to use 'user'): admin
# Email address: admin@email.com
# Password: 1234
# Password (again): 1234
# This password is too short. It must contain at least 8 characters.
# This password is too common.
# This password is entirely numeric.
# Bypass password validation and create user anyway? [y/N]: y
# Superuser created successfully.
