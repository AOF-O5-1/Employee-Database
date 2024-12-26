create table department ( id SERIAL primary key, NAME VARCHAR(30) unique not null);

create table role ( ID SERIAL primary key, TITLE VARCHAR(30) unique not null, DEPRARTMENT_ID INTEGER not null,);

create table employee (id serial primary key, firstName varchar(30) not null, lastName varchar(30) not null, roleId Integer not null, managerId integer);

