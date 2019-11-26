package edu.mwo.registry.db.entities;

import javax.persistence.*;

/**
 * Entity class which represent each class in e-registry which is made from students and teachers.
 */
@Entity
public class CourseStudent {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    Student student;

    @ManyToOne
    @JoinColumn(name = "course_id")
    Course course;

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
