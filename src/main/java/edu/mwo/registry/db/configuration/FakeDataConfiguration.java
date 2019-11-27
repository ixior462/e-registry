package edu.mwo.registry.db.configuration;

import edu.mwo.registry.db.*;
import edu.mwo.registry.db.entities.*;
import org.springframework.context.annotation.Configuration;

import java.util.*;

/**
 * Configuration that provides fake data to H2
 * database on the start of application which
 * helps with local debugging and testing.
 */
@Configuration
public class FakeDataConfiguration {

    private static final Random random = new Random();

    private Teacher[] teachers;

    private Student[] students;

    private Course course1;

    private Course course2;

    public FakeDataConfiguration(StudentService studentService, TeacherService teacherService, CourseService courseService, CourseStudentService courseStudentService, CourseTeacherService courseTeacherService) {
        randomStudents(studentService);
        randomTeachers(teacherService);
        makeClasses(courseService, courseStudentService, courseTeacherService);
    }

    private void makeClasses(CourseService courseService, CourseStudentService courseStudentService, CourseTeacherService courseTeacherService) {
        course1 = new Course();
        ArrayList<Student> listOfStudents = new ArrayList<>(Arrays.asList(students).subList(0, 33));
        course1.setName("name1");
        courseService.saveOrUpdate(course1);

        CourseTeacher courseTeacher = new CourseTeacher();
        courseTeacher.setCourse(course1);
        courseTeacher.setTeacher(teachers[0]);
        courseTeacherService.saveOrUpdate(courseTeacher);

        for (Student student : listOfStudents) {
            CourseStudent courseStudent = new CourseStudent();
            courseStudent.setCourse(course1);
            courseStudent.setStudent(student);
            courseStudentService.saveOrUpdate(courseStudent);
        }

        course2 = new Course();
        listOfStudents = new ArrayList<>(Arrays.asList(students).subList(34, 88));
        course2.setName("name2");
        courseService.saveOrUpdate(course2);

        courseTeacher = new CourseTeacher();
        courseTeacher.setCourse(course2);
        courseTeacher.setTeacher(teachers[1]);
        courseTeacherService.saveOrUpdate(courseTeacher);

        for (Student student : listOfStudents) {
            CourseStudent courseStudent = new CourseStudent();
            courseStudent.setCourse(course2);
            courseStudent.setStudent(student);
            courseStudentService.saveOrUpdate(courseStudent);
        }
    }

    private void randomTeachers(TeacherService teacherService) {
        teachers = new Teacher[10];
        for (int i = 0; i < 10; i++) {
            teachers[i] = new Teacher();
            teachers[i].setName(randomName());
            teacherService.saveOrUpdate(teachers[i]);
        }
    }

    private void randomStudents(StudentService studentService) {
        students = new Student[100];
        for (int i = 0; i < 100; i++) {
            students[i] = new Student();
            students[i].setName(randomName());
            studentService.saveOrUpdate(students[i]);
        }
    }

    private String randomName() {
        List<String> names = Arrays.asList("Rajnold", "Rena", "Sofia", "Walter", "Wisława", "Żaklina", "Szymon", "Emil", "Bogdan");
        List<String> surnames = Arrays.asList("Szych", "Wodecki", "Grochal", "Rydz", "Zaremba", "Soból", "Babicki", "Klimek", "Sokalski", "Pokrywka", "Stachoń", "Rynkowski", "Danielewicz", "Makulski", "Wiktor", "Kobyłka", "Małyska", "Bobiński");
        return names.get(random.nextInt(names.size())) + " " + surnames.get(random.nextInt(surnames.size()));
    }
}
