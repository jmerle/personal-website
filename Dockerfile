FROM nginx:1.19.8

WORKDIR /app

ADD ./static /usr/share/nginx/html
ADD ./CHECKS /app/CHECKS
