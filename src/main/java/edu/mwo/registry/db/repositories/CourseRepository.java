package edu.mwo.registry.db.repositories;

import edu.mwo.registry.db.entities.Course;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface which add to the Class entity class a JPA functionality.
 */
public interface CourseRepository extends CrudRepository<Course, Integer> {
}
