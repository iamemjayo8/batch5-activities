--display the count of students
select count(*) as student_list from students

--select all student w/ location is manila
select
     * 
from 
    students
where
    location = 'Manila';

--display the average age of all students
select
     avg(age)
from
    students;

--display all students by age decending order
select * from students
order by age desc;