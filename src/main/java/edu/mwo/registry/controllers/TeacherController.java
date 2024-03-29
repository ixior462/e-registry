package edu.mwo.registry.controllers;

import edu.mwo.registry.db.TeacherService;
import edu.mwo.registry.db.entities.Teacher;
import org.springframework.web.bind.annotation.DeleteMapping;
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

    /**
     * Get all teachers
     */
    @GetMapping("/teachers")
    public Collection<Teacher> getTeachers() {
        return teacherService.getAll();
    }

    /**
     * Save new teacher
     */
    @PostMapping("/teacher")
    public void saveTeacher(String name, String password) {
        Teacher teacher = new Teacher();
        teacher.setName(name);
        teacher.setPassword(password);
        teacherService.saveOrUpdate(teacher);
    }

    /**
     * Get teacher
     */
    @GetMapping("/teacher")
    public Teacher getTeacher(int id) {
        return teacherService.getById(id);
    }

    /**
     * Delete Teacher with id
     */
    @DeleteMapping("/teacher")
    public void deleteTeacher(int id) {
        teacherService.delete(id);
    }
}
