package edu.mwo.registry.controllers;

import edu.mwo.registry.db.ClassService;
import edu.mwo.registry.db.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * Controller with endpoints for accessing ClassRepository
 */
@RestController
public class ClassController {

    @Autowired
    ClassService classService;

    @GetMapping("/classes")
    public Collection<Course> getClasses() {
        return classService.getAllClasses();
    }
}
