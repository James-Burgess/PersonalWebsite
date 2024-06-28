FROM nginx:alpine
COPY v3/ /usr/share/nginx/html

#FROM python:3.6.5-slim
#
#WORKDIR /app
#ADD ./v3 /app
#RUN pip install --trusted-host pypi.python.org -r requirements.txt
#EXPOSE 80
#CMD ["python", "main_app.py"]
