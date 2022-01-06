# FINANACEPEERTASK1
A short task

Rough design:
![Screenshot](rough.jpg)


Installation Guide:

Django + ReactJs + Postgres

git clone repo

For Backend::

setup postgres
create users roles, database

Change .env file accordingly

create virtual env
virtualenv -p python_path venv
source venv/bin/activate

pip install -r requirements

cd backend
python manage.py runserver 127.0.0.1:8000

For Frontend::

cd jsonapp
npm install
npm start


Note: this is not production ready app. 
production plan: media storage to aws/ or to minio storage at docker, webpack usage, docker runnable.

find the video demo here:


https://drive.google.com/file/d/16lehaYsb0pP99T8wmjFdwp4sGjP325G9/view?usp=sharing


<iframe src="https://drive.google.com/file/d/16lehaYsb0pP99T8wmjFdwp4sGjP325G9/preview" width="640" height="480" allow="autoplay"></iframe>



