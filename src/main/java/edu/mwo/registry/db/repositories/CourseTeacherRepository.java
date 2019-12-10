package edu.mwo.registry.db.repositories;

import edu.mwo.registry.db.entities.CourseTeacher;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface which add to the CourseTeacher entity class a JPA functionality.
 */
public interface CourseTeacherRepository extends CrudRepository<CourseTeacher, Integer> {
}
