package edu.mwo.registry.db.repositories;

import edu.mwo.registry.db.entities.CourseStudent;
import org.springframework.data.repository.CrudRepository;

public interface CourseStudentRepository extends CrudRepository<CourseStudent, Integer> {
}