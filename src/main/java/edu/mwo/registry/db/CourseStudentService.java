package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.CourseStudent;
import edu.mwo.registry.db.repositories.CourseStudentRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service which uses CourseStudentRepository to access
 * database and uses it CourseStudent-related queries
 */
@Service
public class CourseStudentService {

    private final CourseStudentRepository courseStudentRepository;

    public CourseStudentService(CourseStudentRepository courseStudentRepository) {
        this.courseStudentRepository = courseStudentRepository;
    }

    /**
     * Save or update CourseStudent object to database.
     * @param courseStudent object
     */
    public void saveOrUpdate(CourseStudent courseStudent) {
        courseStudentRepository.save(courseStudent);
    }

    /**
     * Returns a reference to the entity with the given identifier.
     * @param id of CourseStudent
     * @return CourseStudent
     */
    public CourseStudent getById(int id) {
        return courseStudentRepository.findById(id).get();
    }

    /**
     * Returns all CourseStudent in database.
     * @return list of Classes
     */
    public List<CourseStudent> getAll() {
        List<CourseStudent> courses = new ArrayList<>();
        courseStudentRepository.findAll().forEach(courses::add);
        return courses;
    }

    /**
     * Deletes courseStudent from database.
     * @param id of CourseStudent
     */
    public void delete(int id) {
        courseStudentRepository.deleteById(id);
    }
}
