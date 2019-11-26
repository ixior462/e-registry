package edu.mwo.registry.controllers;

import edu.mwo.registry.db.StudentService;
import edu.mwo.registry.db.entities.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * Controller with endpoints for accessing StudentRepository
 */
 @RestController
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/students")
    public Collection<Student> getStudents() {
        return studentService.getAll();
    }

    @PostMapping("/student")
    public void saveStudent(String name) {
        Student student = new Student();
        student.setName(name);
        studentService.saveOrUpdate(student);
    }

    @GetMapping("/student")
    public Student getStudent(int id) {
        return studentService.getById(id);
    }
}
