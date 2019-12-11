package edu.mwo.registry.controllers;

import edu.mwo.registry.controllers.forms.LoginForm;
import edu.mwo.registry.controllers.forms.LoginResponse;
import edu.mwo.registry.db.CourseStudentService;
import edu.mwo.registry.db.CourseTeacherService;
import edu.mwo.registry.db.StudentService;
import edu.mwo.registry.db.TeacherService;
import edu.mwo.registry.db.entities.Student;
import edu.mwo.registry.db.entities.Teacher;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Controller with endpoints for logging
 */
@RestController
public class LoginController {

    private final StudentService studentService;
    private final TeacherService teacherService;
    private final CourseStudentService courseStudentService;
    private final CourseTeacherService courseTeacherService;

    public LoginController(StudentService studentService, TeacherService teacherService, CourseStudentService courseStudentService, CourseTeacherService courseTeacherService) {
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.courseStudentService = courseStudentService;
        this.courseTeacherService = courseTeacherService;
    }

    /**
     * Endpoint where you can login with your login and hashed password.
     */
    @PostMapping("/login")
    @ResponseBody
    public LoginResponse login(
            @RequestBody LoginForm loginForm) {

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setLogged(false);
        loginResponse.setId(-1);

        // temporary hardcoded admin account
        if (loginForm.getLogin().equals("admin") && loginForm.getPassword().equals("21232f297a57a5a743894a0e4a801fc3")) {
            loginResponse.setLogged(true);
            loginResponse.setRole("admin");
            return loginResponse;
        }

        List<Student> matchingStudents = studentService.getAll().stream()
                .filter(student -> student.getName().equals(loginForm.getLogin()))
                .filter(student -> student.getPassword().equals(loginForm.getPassword()))
                .collect(Collectors.toList());

        if (matchingStudents.size() > 0) {
            loginResponse.setLogged(true);
            loginResponse.setRole("student");
            loginResponse.setId(matchingStudents.get(0).getId());
            List list = courseStudentService.getAll().stream()
                    .filter(courseStudent -> courseStudent.getStudent().getId() == (loginResponse.getId()))
                    .map(courseStudent -> courseStudent.getCourse().getId())
                    .collect(Collectors.toList());

            loginResponse.setClasses(list);
            return loginResponse;
        }

        List<Teacher> matchingTeachers = teacherService.getAll().stream()
                .filter(teacher -> teacher.getName().equals(loginForm.getLogin()))
                .filter(teacher -> teacher.getPassword().equals(loginForm.getPassword()))
                .collect(Collectors.toList());

        if (matchingTeachers.size() > 0) {
            loginResponse.setLogged(true);
            loginResponse.setRole("teacher");
            loginResponse.setId(matchingTeachers.get(0).getId());
            List list = courseTeacherService.getAll().stream()
                    .filter(courseTeacher -> courseTeacher.getTeacher().getId() == (loginResponse.getId()))
                    .map(courseTeacher -> courseTeacher.getCourse().getId())
                    .collect(Collectors.toList());

            loginResponse.setClasses(list);
        }

        return loginResponse;
    }
}
