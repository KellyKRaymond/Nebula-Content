CREATE DATABASE v6;

\c v6

DROP TABLE IF EXISTS students

CREATE TABLE students(
    id SERIAL PRIMARY KEY 
    name TEXT 
    age INTEGER
    favorite_color TEXT
)

INSERT INTO students VALUES
(DEFAULT,'Kelly',27,'Navy Blue'),
(DEFAULT,'Jordan',19,'Red'),
(DEFAULT,'Daniel',40,'Turquoise'), 

