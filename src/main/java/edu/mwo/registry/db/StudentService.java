package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.Student;
import edu.mwo.registry.db.repositories.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service which uses StudentRepository to access
 * database and uses it Student-related queries
 */
@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    /**
     * Returns all students in database.
     * @return list of Student
     */
    public List<Student> getAll() {
        List<Student> students = new ArrayList<>();
        studentRepository.findAll().forEach(students::add);
        return students;
    }

    /**
     * Returns a reference to the entity with the given identifier.
     * @param id of Student
     * @return Student
     */
    public Student getById(int id) {
        return studentRepository.findById(id).get();
    }

    /**
     * Save or update Student object to database.
     * @param student object
     */
    public void saveOrUpdate(Student student) {
        studentRepository.save(student);
    }

    /**
     * Deletes student from database.
     * @param id of Student
     */
    public void delete(int id) {
        studentRepository.deleteById(id);
    }
}
