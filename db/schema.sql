### SCHEMA

create database burgers_db;
use burgers_db;

create table burgers (
    id int auto_increment,
    PRIMARY key (id),
    burger_name varchar(100),
    devoured tinyint
);