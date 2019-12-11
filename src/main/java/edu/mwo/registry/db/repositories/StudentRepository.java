package edu.mwo.registry.db.repositories;

import edu.mwo.registry.db.entities.Student;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface which add to the Student entity class a JPA functionality.
 */
public interface StudentRepository extends CrudRepository<Student, Integer> {
}
