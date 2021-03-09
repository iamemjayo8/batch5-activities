
--create table
CREATE TABLE students (
	id INTEGER PRIMARY KEY AUTOINCREMENT,-- primary key column
	first_name varchar(50) NOT NULL,
	middle_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	age INTEGER NOT NULL,
	location varchar(50) NOT NULL
);

--insert values
INSERT INTO students
    (first_name,
     middle_name,
     last_name,
     age,
     location)
VALUES
    ('Juan',
     'Blank',
     'Cruz',
     18,
     'Manila'),
    ('John',
     'Blank',
     'Young',
     20,
     'Manila'),
    ('Victor',
     'Blank',
     'Rivera',
     21,
     'Manila'),
    ('Adrian',
     'Blanck',
     'Co',
     19,
     'Laguna'),
    ('Pau',
     'Blank',
     'Riosa',
     18,
     'Marikina'),
    ('Piolo',
     'Blank',
     'Pascual',
     18,
     'Manila');

--update first record
UPDATE students
SET
    first_name = 'Ana',
    middle_name = 'Cui',
    last_name = 'Cajocson',
    age = 25,
    location = 'Bulacan'
WHERE
    id=1;

--delete last record
delete from students
where id=(select max(id) from students);