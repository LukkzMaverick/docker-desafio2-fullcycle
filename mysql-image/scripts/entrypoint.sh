#!/bin/bash
mysql -h 127.0.0.1 -P 3306 -uroot -proot
use nodedb;
create table people(id int not null auto_increment primary key, name varchar(255));