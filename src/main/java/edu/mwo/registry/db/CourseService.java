package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.Course;
import edu.mwo.registry.db.repositories.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service which uses StudentRepository to access
 * database and uses it Student-related queries
 */
@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    /**
     * Returns all classes in database.
     * @return list of Classes
     */
    public List<Course> getAll() {
        List<Course> courses = new ArrayList<>();
        courseRepository.findAll().forEach(courses::add);
        return courses;
    }

    /**
     * Returns a reference to the entity with the given identifier.
     * @param id of Class
     * @return Class
     */
    public Course getById(int id) {
        return courseRepository.findById(id).get();
    }

    /**
     * Save or update Student object to database.
     * @param newCourse object
     */
    public void saveOrUpdate(Course newCourse) {
        courseRepository.save(newCourse);
    }

    /**
     * Deletes student from database.
     * @param id of Student
     */
    public void delete(int id) {
        courseRepository.deleteById(id);
    }

}
