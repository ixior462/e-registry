package edu.mwo.registry.db.repositories;

import edu.mwo.registry.db.entities.Grade;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface which add to the Grade entity class a JPA functionality.
 */
public interface GradeRepository extends CrudRepository<Grade, Integer> {
}
