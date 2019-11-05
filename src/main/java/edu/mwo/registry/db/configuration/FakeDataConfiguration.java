package edu.mwo.registry.db.configuration;

import edu.mwo.registry.db.StudentService;
import edu.mwo.registry.db.TeacherService;
import edu.mwo.registry.db.entities.Student;
import edu.mwo.registry.db.entities.Teacher;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

/**
 * Configuration that provides fake data to H2
 * database on the start of application which
 * helps with local debugging and testing.
 */
@Configuration
public class FakeDataConfiguration {

    private static final Random random = new Random();

    public FakeDataConfiguration(StudentService studentService, TeacherService teacherService) {
        randomStudents(studentService);
        randomTeachers(teacherService);
    }

    private void randomTeachers(TeacherService teacherService) {
        Teacher[] teachers = new Teacher[10];
        for (int i = 0; i < 10; i++) {
            teachers[i] = new Teacher();
            teachers[i].setName(randomName());
            teacherService.saveOrUpdate(teachers[i]);
        }
    }

    private void randomStudents(StudentService studentService) {
        Student[] students = new Student[100];
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
