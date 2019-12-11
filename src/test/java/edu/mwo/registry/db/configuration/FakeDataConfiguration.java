package edu.mwo.registry.db.configuration;

import edu.mwo.registry.db.StudentService;
import edu.mwo.registry.db.TeacherService;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FakeDataConfiguration {
    public FakeDataConfiguration(StudentService studentService, TeacherService teacherService) {
    }
}
