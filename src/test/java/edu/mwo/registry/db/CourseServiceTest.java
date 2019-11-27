package edu.mwo.registry.db;

import edu.mwo.registry.ApplicationInitializer;
import edu.mwo.registry.controllers.CourseController;
import edu.mwo.registry.db.entities.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ApplicationInitializer.class})
public class CourseServiceTest {

    @Autowired
    StudentService studentService;

    @Autowired
    CourseService courseService;

    @Autowired
    TeacherService teacherService;

    @Autowired
    CourseStudentService courseStudentService;

    @Autowired
    CourseTeacherService courseTeacherService;

    @Autowired
    CourseController courseController;

    private Student student1 = new Student();
    private Student student2 = new Student();
    private Student student3 = new Student();
    private Teacher teacher1 = new Teacher();
    private Teacher teacher2 = new Teacher();
    private Course course1 = new Course();
    private Course course2 = new Course();

    @Before
    public void init() {
        student1.setName("Jan Kowalski");
        student2.setName("Marek Roztocki");
        student3.setName("Ewa Kuta");
        teacher1.setName("Jan Kowalski");
        teacher2.setName("Marek Roztocki");
        studentService.saveOrUpdate(student1);
        studentService.saveOrUpdate(student2);
        studentService.saveOrUpdate(student3);
        teacherService.saveOrUpdate(teacher1);
        teacherService.saveOrUpdate(teacher2);
    }

    @After
    public void clean() {
        courseStudentService.getAll().stream().map(CourseStudent::getId).forEach(id -> courseStudentService.delete(id));
        courseTeacherService.getAll().stream().map(CourseTeacher::getId).forEach(id -> courseTeacherService.delete(id));
        courseService.getAll().stream().map(Course::getId).forEach(id -> courseService.delete(id));
        studentService.getAll().stream().map(Student::getId).forEach(id -> studentService.delete(id));
        teacherService.getAll().stream().map(Teacher::getId).forEach(id -> teacherService.delete(id));
    }

    @Test
    public void getAllClassesTest(){
        courseService.saveOrUpdate(course1);
        courseService.saveOrUpdate(course2);
        assertEquals(Arrays.asList(course1, course2), courseService.getAll());
    }

    @Test
    public void getStudentsAndTeachersFromClass(){
        courseController.saveClass("class", teacher1.getId(), student1.getId(), student2.getId());
        Course course = courseController.getClasses().iterator().next();
        assertEquals(Arrays.asList(student1, student2), courseController.getStudents(course.getId()));
        assertEquals(teacher1, courseController.getTeacher(course.getId()));
    }

    @Test
    public void deleteClassTest() {
        courseService.saveOrUpdate(course1);
        courseService.saveOrUpdate(course2);
        courseService.delete(course1.getId());
        assertEquals(Collections.singletonList(course2), courseService.getAll());
    }
}
