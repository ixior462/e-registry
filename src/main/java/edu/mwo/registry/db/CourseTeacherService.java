package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.CourseTeacher;
import edu.mwo.registry.db.repositories.CourseTeacherRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service which uses CourseTeacherRepository to access
 * database and uses it  CourseTeacher-related queries
 */
@Service
public class CourseTeacherService {

    private final CourseTeacherRepository courseTeacherRepository;

    public CourseTeacherService(CourseTeacherRepository courseTeacherRepository) {
        this.courseTeacherRepository = courseTeacherRepository;
    }

    /**
     * Save or update CourseTeacher object to database.
     * @param courseTeacher object
     */
    public void saveOrUpdate(CourseTeacher courseTeacher) {
        courseTeacherRepository.save(courseTeacher);
    }

    /**
     * Returns a reference to the entity with the given identifier.
     * @param id of CourseTeacher
     * @return CourseTeacher
     */
    public CourseTeacher get(int id) {
        return courseTeacherRepository.findById(id).get();
    }

    /**
     * Returns all CourseTeacher in database.
     * @return list of Classes
     */
    public List<CourseTeacher> getAll() {
        List<CourseTeacher> courses = new ArrayList<>();
        courseTeacherRepository.findAll().forEach(courses::add);
        return courses;
    }

    /**
     * Deletes courseStudent from database.
     * @param id of CourseTeacher
     */
    public void delete(int id) {
        courseTeacherRepository.deleteById(id);
    }
}
