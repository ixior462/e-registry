package edu.mwo.registry.db.repositories;

import edu.mwo.registry.db.entities.CourseStudent;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface which add to the CourseStudent entity class a JPA functionality.
 */
public interface CourseStudentRepository extends CrudRepository<CourseStudent, Integer> {
}