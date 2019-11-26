package edu.mwo.registry.db;

import edu.mwo.registry.ApplicationInitializer;
import edu.mwo.registry.db.entities.Course;
import edu.mwo.registry.db.entities.Student;
import edu.mwo.registry.db.entities.Teacher;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Arrays;
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
        course1.setName("Class1");
        course2.setName("Class2");
        studentService.saveOrUpdate(student1);
        studentService.saveOrUpdate(student2);
        studentService.saveOrUpdate(student3);
        teacherService.saveOrUpdate(teacher1);
        teacherService.saveOrUpdate(teacher2);
    }

    @After
    public void clean() {
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
//        classService.saveOrUpdate(course1);
//
//        CourseEntry courseEntry = new CourseEntry();
//        courseEntry.setCourse(course1);
//        courseEntry.setStudent(student1);
//        classRegistrationService.saveOrUpdate(courseEntry);
//
//        courseEntry = new CourseEntry();
//        courseEntry.setCourse(course1);
//        courseEntry.setStudent(student2);
//        classRegistrationService.saveOrUpdate(courseEntry);
//
//        Course resultCourse = classService.getClassById(course1.getId());
////        assertEquals(Arrays.asList(student1, student2), resultCourse.getCourseEntries().stream().map(CourseEntry::getStudent).collect(Collectors.toList()));
//        assertEquals(teacher1, resultCourse.getTeacher());
    }

    @Test
    public void deleteClassTest() {
        courseService.saveOrUpdate(course1);
        courseService.saveOrUpdate(course2);
        courseService.delete(course1.getId());
        assertEquals(Collections.singletonList(course2), courseService.getAll());
    }

}
