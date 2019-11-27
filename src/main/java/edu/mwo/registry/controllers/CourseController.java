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

    /**
     * Mapping where you can save a new class entry to the database
     * arguments passed in url should be passed as follows:
     * /class?name=xxx&teacherId=102&studentId=2&studentId=5&studentId=3...
     */
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

    /**
     * Get all classes in database
     */
    @GetMapping("/classes")
    public Collection<Course> getClasses() {
        return courseService.getAll();
    }

    /**
     * Get class in database
     */
    @GetMapping("/class")
    public Course getClass(int id) {
        return courseService.getById(id);
    }

    /**
     * Get all teachers with their assigned classes
     */
    @GetMapping("/classTeachers")
    public Collection<CourseTeacher> getTeachers() {
        return courseTeacherService.getAll();
    }

    /**
     * Get all students with their assigned classes
     */
    @GetMapping("/classStudents")
    public Collection<CourseStudent> getStudents() {
        return courseStudentService.getAll();
    }

    /**
     * Get all students from specific class
     */
    @GetMapping("/studentsFromClass")
    public Collection<Student> getStudents(int id) {
        return courseStudentService.getAll().stream()
                .filter(courseStudent -> courseStudent.getCourse().getId() == id)
                .map(CourseStudent::getStudent)
                .collect(Collectors.toList());
    }

    /**
     * Get teacher from specific class
     */
    @GetMapping("/teachersFromClass")
    public Teacher getTeacher(int id) {
        return courseTeacherService.getAll().stream()
                .filter(courseTeacher -> courseTeacher.getCourse().getId() == id)
                .map(CourseTeacher::getTeacher)
                .collect(Collectors.toList())
                .get(0);
    }
}
