package edu.mwo.registry.db.repositories;

import edu.mwo.registry.db.entities.CourseEntry;
import org.springframework.data.repository.CrudRepository;

public interface ClassRegistrationRepository extends CrudRepository<CourseEntry, Integer> {
}