package edu.mwo.registry.db.repositories;

import edu.mwo.registry.db.entities.Teacher;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface which add to the Teacher entity class a JPA functionality.
 */
public interface TeacherRepository extends CrudRepository<Teacher, Integer> {
}
