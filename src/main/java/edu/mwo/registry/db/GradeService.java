package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.Grade;
import edu.mwo.registry.db.repositories.GradeRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service which uses GradeRepository to access
 * database and uses it Grade-related queries
 */
@Service
public class GradeService {

    private final GradeRepository gradeRepository;

    public GradeService(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    /**
     * Returns all grades in database.
     * @return list of Grades
     */
    public List<Grade> getAll() {
        List<Grade> grades = new ArrayList<>();
        gradeRepository.findAll().forEach(grades::add);
        return grades;
    }

    /**
     * Returns a reference to the entity with the given identifier.
     * @param id of Grade
     * @return Grade
     */
    public Grade getById(int id) {
        return gradeRepository.findById(id).get();
    }

    /**
     * Save or update Grade object to database.
     * @param grade object
     */
    public void saveOrUpdate(Grade grade) {
        gradeRepository.save(grade);
    }

    /**
     * Deletes student from database.
     * @param id of Grade
     */
    public void delete(int id) {
        gradeRepository.deleteById(id);
    }
}
