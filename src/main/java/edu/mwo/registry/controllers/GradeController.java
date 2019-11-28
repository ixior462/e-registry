package edu.mwo.registry.controllers;

import edu.mwo.registry.db.CourseStudentService;
import edu.mwo.registry.db.GradeService;
import edu.mwo.registry.db.entities.CourseStudent;
import edu.mwo.registry.db.entities.Grade;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

/**
 * Controller with endpoints for accessing GradeRepository
 */
@RestController
public class GradeController {

    private final GradeService gradeService;
    private final CourseStudentService courseStudentService;


    public GradeController(GradeService gradeService, CourseStudentService courseStudentService) {
        this.gradeService = gradeService;
        this.courseStudentService = courseStudentService;
    }

    /**
     * Mapping where you can save a new grade entry to the database
     */
    @PostMapping("/grade")
    public void saveGrade(int courseStudentId, String grade, String note) {
        CourseStudent courseStudent = courseStudentService.getById(courseStudentId);
        Grade newGrade = new Grade();
        newGrade.setCourseStudent(courseStudent);
        newGrade.setGrade(grade);
        newGrade.setNote(note);
        gradeService.saveOrUpdate(newGrade);
    }

    /**
     * Get all grades from CourseStudent id
     */
    @GetMapping("/grades")
    public Collection<Grade> getGrades(int courseStudentId) {
        return gradeService.getAll().stream()
                .filter(grade -> grade.getCourseStudent().getId() == courseStudentId)
                .collect(Collectors.toList());
    }

    /**
     * Delete Grade with id
     */
    @DeleteMapping("/grade")
    public void deleteGrade(int id) {
        gradeService.delete(id);
    }
}
