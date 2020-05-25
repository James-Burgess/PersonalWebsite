#FROM python:3.7
#
#RUN pip install gunicorn
#RUN pip install bottle
#
#ADD ./public /app
#WORKDIR /app
#
#CMD ["gunicorn", "main_app:app"]
FROM nginx:alpine
COPY ./public/ /usr/share/nginx/html
