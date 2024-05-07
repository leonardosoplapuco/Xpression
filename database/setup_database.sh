#!/bin/bash
if ! command -v psql &> /dev/null; then
	sudo apt-get update
	sudo apt-get install -y postgresql
fi

db_user="postgres"
db_password="postgres"
new_database="xpression_database"


# Create new user and database and grant all privileges
sudo -u postgres psql -c "ALTER USER $db_user WITH PASSWORD '$db_password';"
sudo -u postgres psql -c "CREATE DATABASE $new_database";
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $new_database TO $db_user;"
