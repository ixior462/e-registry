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

## Login
Login as a moderator, student or techer
```console
curl -i \
-H "Accept: application/json" \
-H "Contenet-Type:application/json" \
'{"username": name, "password": password}' /login 
```
where name is name of account and password is it's hashed password.
In response, application returns:
```json
{
  "logged": flag,
  "role": role,
  "id": id,
  "classes": classes
}
```
where flag is a true if username and password were valid, role is "admin", "teacher" or "student" which tells what kind of account it is. Next id is an id of account in database and classes is a list of classes which student/teacher attend.
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

## Getting grade
```
GET /grades/?studentId=student_id&courseId=course_id
```
returns collection of grades where student_id is id of student, course_id is id of the course.

## Getting all students from the class

```
GET /studentsFromClass?id=course_id
```
returns collection of students which attend specific class with id of course_id.
