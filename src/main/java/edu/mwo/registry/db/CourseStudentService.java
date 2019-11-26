package edu.mwo.registry.db;

import edu.mwo.registry.db.entities.CourseStudent;
import edu.mwo.registry.db.repositories.CourseStudentRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseStudentService {

    private final CourseStudentRepository courseStudentRepository;

    public CourseStudentService(CourseStudentRepository courseStudentRepository) {
        this.courseStudentRepository = courseStudentRepository;
    }

    public void saveOrUpdate(CourseStudent courseStudent) {
        courseStudentRepository.save(courseStudent);
    }

    public CourseStudent getById(int id) {
        return courseStudentRepository.findById(id).get();
    }

    public List<CourseStudent> getAll() {
        List<CourseStudent> courses = new ArrayList<>();
        courseStudentRepository.findAll().forEach(courses::add);
        return courses;
    }
}
