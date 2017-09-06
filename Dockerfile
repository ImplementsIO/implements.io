FROM nginx:stable-alpine

RUN rm /usr/share/nginx/html/*.*
ADD build /usr/share/nginx/html
COPY ext/default.conf /etc/nginx/conf.d/default.conf