package edu.mwo.registry.db.entities;

import javax.persistence.*;

/**
 * Entity class which represent set of students in course.
 */
@Entity
public class CourseStudent {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "course_id")
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

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CourseStudent that = (CourseStudent) o;

        return id == that.id;
    }

    @Override
    public int hashCode() {
        return id;
    }
}
