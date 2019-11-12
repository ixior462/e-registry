package edu.mwo.registry.controllers;

import edu.mwo.registry.db.StudentService;
import edu.mwo.registry.db.entities.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class TestController {

    @Autowired
    StudentService studentService;

    @GetMapping("/test")
    public Student test() {
        Student test = new Student();
        test.setName("Jaś Testowy");
        return test;
    }

    @GetMapping("/students")
    public Collection<Student> getStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/student")
    public void insertStudent(Student student) {
        studentService.saveOrUpdate(student);
    }
}
