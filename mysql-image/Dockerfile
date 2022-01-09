from mysql:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
ADD /scripts/sql_people.sql /docker-entrypoint-initdb.d
EXPOSE 3306
