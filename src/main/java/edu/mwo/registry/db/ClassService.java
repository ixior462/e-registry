package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.Course;
import edu.mwo.registry.db.entities.CourseEntry;
import edu.mwo.registry.db.repositories.ClassRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service which uses StudentRepository to access
 * database and uses it Student-related queries
 */
@Service
public class ClassService {

    private final ClassRepository classRepository;

    public ClassService(ClassRepository classRepository) {
        this.classRepository = classRepository;
    }

    /**
     * Returns all classes in database.
     * @return list of Classes
     */
    public List<Course> getAllClasses() {
        List<Course> courses = new ArrayList<>();
        classRepository.findAll().forEach(courses::add);
        return courses;
    }

    /**
     * Returns a reference to the entity with the given identifier.
     * @param id of Class
     * @return Class
     */
    public Course getClassById(int id) {
        return classRepository.findById(id).get();
    }

    /**
     * Save or update Student object to database.
     * @param newCourse object
     */
    public void saveOrUpdate(Course newCourse) {
        classRepository.save(newCourse);
    }

    /**
     * Deletes student from database.
     * @param id of Student
     */
    public void delete(int id) {
        classRepository.deleteById(id);
    }

}
