package edu.mwo.registry.controllers;

import edu.mwo.registry.db.CourseService;
import edu.mwo.registry.db.CourseStudentService;
import edu.mwo.registry.db.CourseTeacherService;
import edu.mwo.registry.db.entities.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

/**
 * Controller with endpoints for accessing ClassRepository
 */
@RestController
public class CourseController {

    private final CourseService courseService;
    private final CourseStudentService courseStudentService;
    private final CourseTeacherService courseTeacherService;
    private final TeacherController teacherController;
    private final StudentController studentController;

    public CourseController(CourseService courseService, CourseStudentService courseStudentService, CourseTeacherService courseTeacherService, TeacherController teacherController, StudentController studentController) {
        this.courseService = courseService;
        this.courseStudentService = courseStudentService;
        this.courseTeacherService = courseTeacherService;
        this.teacherController = teacherController;
        this.studentController = studentController;
    }

    @PostMapping("/class")
    public void saveClass(String name, int teacherId, int... studentId) {
        Course course = new Course();
        course.setName(name);
        courseService.saveOrUpdate(course);

        CourseTeacher courseTeacher = new CourseTeacher();
        courseTeacher.setCourse(course);
        courseTeacher.setTeacher(teacherController.getTeacher(teacherId));
        courseTeacherService.saveOrUpdate(courseTeacher);

        for (int id : studentId) {
            CourseStudent courseStudent = new CourseStudent();
            courseStudent.setCourse(course);
            courseStudent.setStudent(studentController.getStudent(id));
            courseStudentService.saveOrUpdate(courseStudent);
        }
    }

    @GetMapping("/classes")
    public Collection<Course> getClasses() {
        return courseService.getAll();
    }

    @GetMapping("/class")
    public Course getClass(int id) {
        return courseService.getById(id);
    }

    @GetMapping("/classTeachers")
    public Collection<CourseTeacher> getTeachers() {
        return courseTeacherService.getAll();
    }

    @GetMapping("/classStudents")
    public Collection<CourseStudent> getStudents() {
        return courseStudentService.getAll();
    }

    @GetMapping("/studentsFromClass")
    public Collection<Student> getStudents(int id) {
        return courseStudentService.getAll().stream()
                .filter(courseStudent -> courseStudent.getCourse().getId() == id)
                .map(CourseStudent::getStudent)
                .collect(Collectors.toList());
    }

    @GetMapping("/teachersFromClass")
    public Teacher getTeacher(int id) {
        return courseTeacherService.getAll().stream()
                .filter(courseTeacher -> courseTeacher.getCourse().getId() == id)
                .map(CourseTeacher::getTeacher)
                .collect(Collectors.toList())
                .get(0);
    }
}
