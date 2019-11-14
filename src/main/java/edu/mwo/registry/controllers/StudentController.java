package edu.mwo.registry.controllers;

import edu.mwo.registry.db.StudentService;
import edu.mwo.registry.db.entities.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Collection;

/**
 * Controller with endpoints for accessing StudentRepository
 */
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping("/students")
    public Collection<Student> getStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/student")
    public void saveStudent(String name) {
        Student student = new Student();
        student.setName(name);
        studentService.saveOrUpdate(student);
    }
}
