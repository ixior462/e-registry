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

## Creating Class
Create new class
```
POST /class/?name=class_name&teacherId=teacher_id&studentId=student_id1&studentId=student_id2 ...
```
where class_name is name of the class, teacher_id is the id of the teacher who will be teaching this class, {student_id1, student_id2 ...} is a set of students who will attend this class.

## Adding grade
Create new class
```
POST /grade/?studentId=student_id&courseId=course_id&grade=_grade&note=_note
```
where student_id is id of student who will recive grade, course_id is id of the cours, _note and _grade are aditional informations about grade.
