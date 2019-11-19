package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.Course;
import edu.mwo.registry.db.entities.Teacher;
import edu.mwo.registry.db.repositories.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service which uses TeacherRepository to access
 * DataBase and uses it Teacher-related queries
 */
@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;

    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    /**
     * Returns all teachers in database.
     * @return list of Teachers
     */
    public List<Teacher> getAllTeachers() {
        List<Teacher> teachers = new ArrayList<>();
        teacherRepository.findAll().forEach(teachers::add);
        return teachers;
    }

    public List<Course> getAllClasses(int id) {
        return getTeacherById(id).getCourses();
    }

    /**
     * Returns a reference to the entity with the given identifier.
     * @param id of Teacher
     * @return Teacher
     */
    public Teacher getTeacherById(int id) {
        return teacherRepository.findById(id).get();
    }

    /**
     * Save or update Teacher object to database.
     * @param teacher object
     */
    public void saveOrUpdate(Teacher teacher) {
        teacherRepository.save(teacher);
    }

    /**
     * Deletes teacher from database.
     * @param id of Teacher
     */
    public void delete(int id) {
        teacherRepository.deleteById(id);
    }
}
