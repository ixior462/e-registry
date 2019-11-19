package edu.mwo.registry.db.entities;

import javax.persistence.*;

/**
 * Entity class which represent each class in e-registry which is made from students and teachers.
 */
@Entity
public class CourseEntry {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("student_id")
    private Student student;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("course_id")
    private Course course;

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
