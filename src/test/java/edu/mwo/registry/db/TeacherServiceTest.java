package edu.mwo.registry.db;

import edu.mwo.registry.Application;
import edu.mwo.registry.db.entities.Teacher;
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
@ContextConfiguration(classes = {Application.class})
public class TeacherServiceTest {

    @Autowired
    TeacherService teacherService;

    private Teacher teacher1 = new Teacher();
    private Teacher teacher2 = new Teacher();
    private Teacher teacher3 = new Teacher();

    @Before
    public void init() {
        teacher1.setName("Jan Kowalski");
        teacher2.setName("Marek Roztocki");
        teacher3.setName("Ewa Kuta");
        teacherService.saveOrUpdate(teacher1);
        teacherService.saveOrUpdate(teacher2);
        teacherService.saveOrUpdate(teacher3);
    }

    @After
    public void clean() {
        teacherService.getAll().stream().map(Teacher::getId).forEach(id -> teacherService.delete(id));
    }

    @Test
    public void getAllTeachersTest() {
        assertEquals(Arrays.asList(teacher1, teacher2, teacher3), teacherService.getAll());
    }

    @Test
    public void deleteTeachersTest() {
        teacherService.delete(teacher1.getId());
        assertEquals(Arrays.asList(teacher2, teacher3), teacherService.getAll());
    }

}