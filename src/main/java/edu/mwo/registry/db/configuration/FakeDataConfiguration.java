package edu.mwo.registry.db.configuration;

import edu.mwo.registry.db.ClassRegistrationService;
import edu.mwo.registry.db.ClassService;
import edu.mwo.registry.db.StudentService;
import edu.mwo.registry.db.TeacherService;
import edu.mwo.registry.db.entities.Course;
import edu.mwo.registry.db.entities.CourseEntry;
import edu.mwo.registry.db.entities.Student;
import edu.mwo.registry.db.entities.Teacher;
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

    public FakeDataConfiguration(StudentService studentService, TeacherService teacherService, ClassService classService, ClassRegistrationService classRegistrationService) {
        randomStudents(studentService);
        randomTeachers(teacherService);
        makeClasses(classService, classRegistrationService);
    }

    private void makeClasses(ClassService classService, ClassRegistrationService classRegistrationService) {
//        course1 = new Course();
//        ArrayList<Student> listOfStudents = new ArrayList<>(Arrays.asList(students).subList(0, 33));
//        course1.setTeacher(teachers[0]);
//
//        for (Student student : listOfStudents) {
//            CourseEntry courseEntry = new CourseEntry();
//            courseEntry.setCourse(course1);
//            courseEntry.setStudent(student);
//            classRegistrationService.saveOrUpdate(courseEntry);
//        }
////        for (Student student : listOfStudents) {
////            CourseEntry courseEntry = new CourseEntry();
////            courseEntry.setStudent(student);
////            courseEntry.setCourse(course1);
////            classRegistrationService.saveOrUpdate(courseEntry);
////        }
//
//        course1.setName("class1");
//
//        course2 = new Course();
//        listOfStudents = new ArrayList<>(Arrays.asList(students).subList(34, 45));
//        course2.setTeacher(teachers[1]);
////        for (Student student : listOfStudents) {
////            CourseEntry courseEntry = new CourseEntry();
////            courseEntry.setStudent(student);
////            courseEntry.setCourse(course2);
////        }
//        course2.setName("class2");
//
//        classService.saveOrUpdate(course1);
//        classService.saveOrUpdate(course2);
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
