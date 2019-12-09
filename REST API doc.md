# REST API documentation

## Creating Students
Create new student
```
POST /student/?name=student_name&password
```
where student_name is studnet's name and password is hashed password which student will login to his account.

## Creating Teacher
Create new teacher
```
POST /teacher/?name=teacher_name&password
```
where teacher_name is teacher's name and password is hashed password which teacher will login to his account.
