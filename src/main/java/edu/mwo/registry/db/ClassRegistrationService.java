package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.CourseEntry;
import edu.mwo.registry.db.repositories.ClassRegistrationRepository;
import org.springframework.stereotype.Service;

@Service
public class ClassRegistrationService {

    private final ClassRegistrationRepository classRegistrationRepository;

    public ClassRegistrationService(ClassRegistrationRepository classRegistrationRepository) {
        this.classRegistrationRepository = classRegistrationRepository;
    }

    public void saveOrUpdate(CourseEntry courseEntry) {
        classRegistrationRepository.save(courseEntry);
    }

    public CourseEntry getClassRegistrationById(int id) {
        return classRegistrationRepository.findById(id).get();
    }
}
