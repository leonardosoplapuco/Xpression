# HOW TO SET UP

There are two scripts on this directory:
- virtual_evironment.sh
- setup_script.sh

# FOLLOW THIS ORDER:

## FIRST:
__SOURCE__ the script `virtual_environment.sh`:

`$	source ./virtual_environment.sh`

## SECOND:
__EXECUTE__ the script `setup_script.sh`:

`(.venv)$	./setup_script.sh`

This will ask you to provide a username, email address and password
Example:

>Username (leave blank to use 'user'): __admin__
Email address: __admin@email.com__
Password: __1234__
Password (again): __1234__
This password is too short. It must contain at least 8 characters.
This password is too common.
This password is entirely numeric.
Bypass password validation and create user anyway? [y/N]: __y__
Superuser created successfully.

Now you have created a virtual environment within the directory `.venv`.
If you see `(.venv)` at the beggining of your prompt, it means you are
now within your virtual environment.

You have also set up the server and the database on SQLite.

# HOW TO RUN THE SERVER

## FIRST:
You need to be within your virtual environment.
If you see `(.venv)` at the beggining of your prompt, it means you are
already within your virtual environment and you can skip this step.

If not, execute the following from the command line:

`$	source ./.venv/bin/activate`

You should now see `(.venv)` at the beggining of your prompt.

## SECOND:
From the command line, on the root directory of your project (`back-end`)
and within your virtual environment `(.venv)` execute the following:

`(.venv)$	python3 manage.py runserver`


You should receive a response similar to this:

>Watching for file changes with StatReloader
Performing system checks...
>
>System check identified no issues (0 silenced).
April 26, 2024 - 00:01:39
Django version 5.0.4, using settings 'users.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.

## THIRD:
Go to your web browser and type: 'http://127.0.0.1:8000/admin'

It will ask you to input the username and password you configure previously
to run as administrator.


# Have fun!
