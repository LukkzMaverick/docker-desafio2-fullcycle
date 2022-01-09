FROM node:latest

WORKDIR /usr/src/app
COPY . .
RUN chmod -R 777 /root
RUN chown -R 1000:1000 "/root/.npm"

EXPOSE 3000