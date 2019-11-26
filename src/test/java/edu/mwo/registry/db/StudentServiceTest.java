package edu.mwo.registry.db;

import edu.mwo.registry.ApplicationInitializer;
import edu.mwo.registry.db.entities.Student;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ApplicationInitializer.class})
public class StudentServiceTest {

    @Autowired
    StudentService studentService;

    private Student student1 = new Student();
    private Student student2 = new Student();
    private Student student3 = new Student();

    @Before
    public void init() {
        student1.setName("Jan Kowalski");
        student2.setName("Marek Roztocki");
        student3.setName("Ewa Kuta");
        studentService.saveOrUpdate(student1);
        studentService.saveOrUpdate(student2);
        studentService.saveOrUpdate(student3);
    }

    @After
    public void clean() {
        studentService.getAll().stream().map(Student::getId).forEach(id -> studentService.delete(id));
    }

    @Test
    public void getAllStudentsTest() {
        assertEquals(Arrays.asList(student1, student2, student3), studentService.getAll());
    }

    @Test
    public void deleteStudentsTest() {
        studentService.delete(student1.getId());
        assertEquals(Arrays.asList(student2, student3), studentService.getAll());
    }

}