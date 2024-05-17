# Xpression

Xpression - The new messaging client with the XMPP Protocol

## Xpression

Xpression is an instant messaging platform that utilizes the XMPP protocol for real-time communication. This project is developed with a Django backend and a React frontend. The database uses PostgreSQL.

## Description

Xpression is an instant messaging application designed to facilitate quick and efficient communication between users. With Xpression, you can send text messages and more to your contacts securely and privately.

### Key Features

*- Real-time instant messaging.*  
*- Intuitive and user-friendly interface.*  
*- Data security and privacy.*

## Installation
Clone the repository from GitHub:
git clone https://github.com/leosoplapuco/Xpression.git

#### FOLLOW THIS ORDER 

**FIRST** move to back-end:  
SOURCE the script virtual_environment.sh:

$	source ./virtual_environment.sh

**SECOND**
EXECUTE the script setup_script.sh:

(.venv)$	./setup_script.sh

This will ask you to provide a username, email address and password Example:

*Username (leave blank to use 'user'): admin Email address: admin@email.com Password: 1234 Password (again): 1234 This password is too short. It must contain at least 8 characters. This password is too common. This password is entirely numeric. Bypass password validation and create user anyway? [y/N]: y Superuser created successfully.*

Now you have created a virtual environment within the directory .venv. If you see (.venv) at the beggining of your prompt, it means you are now within your virtual environment.

You have also set up the server and the database on Postgres.

#### HOW TO RUN THE SERVER
***
***FIRST***  
You need to be within your virtual environment. If you see (.venv) at the beggining of your prompt, it means you are already within your virtual environment and you can skip this step.

If not, execute the following from the command line:

$	source ./.venv/bin/activate

You should now see (.venv) at the beggining of your prompt.

***SECOND***  
From the command line, on the root directory of your project (back-end) and within your virtual environment (.venv) execute the following:

(.venv)$	python3 manage.py runserver

You should receive a response similar to this:

Watching for file changes with StatReloader Performing system checks...

System check identified no issues (0 silenced). April 26, 2024 - 00:01:39 Django version 5.0.4, using settings 'users.settings' Starting development server at http://127.0.0.1:8000/ Quit the server with CONTROL-C.

***THIRD:***  
Go to your web browser and type: 'http://127.0.0.1:8000/admin'

It will ask you to input the username and password you configure previously to run as administrator.

cd xpression/backend

## Database Setup

Find the executable script setup_database.sh inside the Database/ directory and run it as superuser (sudo).  
That's all :)

## Technologies Used

* Django For Back-End
* PostgresSQL for Database
* React for Front-End      
* XMPP protocol for server

## Project Structure


The project is organized as follows:

- Xpression/
  - README.md
  - back-end/
    - main/
      - main/
      - api/
        - migrations/
      - websockets/
  - front-end/
    - public/
    - src/
  - database/ 


## License

This project is licensed under the [MIT License](LICENSE).

## Contributions

Contributions are welcome!  
Please contact Leonardo Soplapuco at email : " "

## Useful Links

- [Documentation](https://example.com/docs)
- [Project Page](https://github.com/leosoplapuco/Xpression)

## FAQ

### Q: What if I encounter issues during installation?
A: Please refer to the [Installation](#installation) section for troubleshooting steps.

### Q: Can I use Xpression for commercial purposes?
A: Yes, Xpression is licensed under the MIT License, allowing for commercial use.

## Project Status

This project is actively maintained. Current version: 1.0.0.

## Credits 

If you have any questions or suggestions, feel free to contact us

Created with ❤️  by   :

- Leonardo Soplapuco
- Bryan Yep
- Diego Napam
- Kevin Huaynates
