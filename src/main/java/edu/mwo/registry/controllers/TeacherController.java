package edu.mwo.registry.controllers;

import edu.mwo.registry.db.TeacherService;
import edu.mwo.registry.db.entities.Student;
import edu.mwo.registry.db.entities.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.Collection;

/**
 * Controller with endpoints for accessing TeacherRepository
 */
  @RestController
public class TeacherController {

    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/teachers")
    public Collection<Teacher> getTeachers() {
        return teacherService.getAll();
    }

    @PostMapping("/teacher")
    public void saveTeacher(String name) {
        Teacher teacher = new Teacher();
        teacher.setName(name);
        teacherService.saveOrUpdate(teacher);
    }

    @GetMapping("/teacher")
    public Teacher getTeacher(int id) {
        return teacherService.getById(id);
    }
}
