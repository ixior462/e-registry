package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.CourseTeacher;
import edu.mwo.registry.db.repositories.CourseTeacherRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseTeacherService {

    private final CourseTeacherRepository courseTeacherRepository;

    public CourseTeacherService(CourseTeacherRepository courseTeacherRepository) {
        this.courseTeacherRepository = courseTeacherRepository;
    }

    public void saveOrUpdate(CourseTeacher courseTeacher) {
        courseTeacherRepository.save(courseTeacher);
    }

    public CourseTeacher get(int id) {
        return courseTeacherRepository.findById(id).get();
    }

    public List<CourseTeacher> getAll() {
        List<CourseTeacher> courses = new ArrayList<>();
        courseTeacherRepository.findAll().forEach(courses::add);
        return courses;
    }
}
