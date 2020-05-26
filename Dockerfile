FROM python:3.7

RUN pip install gunicorn
RUN pip install bottle

ADD ./public /app
WORKDIR /app

CMD ["gunicorn", "main_app:app", "-b 0.0.0.0:80"]
#FROM nginx:alpine
#COPY ./public/ /usr/share/nginx/html
