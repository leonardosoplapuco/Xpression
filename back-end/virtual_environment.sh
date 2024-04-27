#!/bin/bash

########## YOU NEED TO SOURCE THIS SCRIPT FIRST ##########
# From the command line:
# $   source ./virtual_environment.sh


# Create a virtual environment for all dependencies
python3 -m venv .venv

# Activate the virtual environment (.venv)
. .venv/bin/activate
