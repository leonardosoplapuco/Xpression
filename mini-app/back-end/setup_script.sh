#!/bin/bash


# Create a virtual environment for all dependencies
python3 -m venv .venv

# Activate the virtual environment (.venv)
. .venv/bin/activate

# Install the required dependencies in the virtual environment
pip3 install django djangorestframework

# Start the Django project with the name 'users' in the current directory
django-admin startproject users .

# Create the SQLite database structure and migrate the data structures
python3 manage.py migrate

# Create superuser for the app
python3 manage.py createsuperuser
# This will ask you to provide a username, email address and password
