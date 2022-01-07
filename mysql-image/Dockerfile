from mysql:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
ADD /scripts/sql_people.sql /docker-entrypoint-initdb.d
#RUN ["chmod", "+x", "./scripts/entrypoint.sh"]
#ENTRYPOINT ["./scripts/entrypoint.sh"]
EXPOSE 3306
