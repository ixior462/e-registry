package edu.mwo.registry.db.entities;

import javax.persistence.*;

/**
 * Entity class which represent assigned teacher to class.
 */
@Entity
public class CourseTeacher {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    public int getId() {
        return id;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CourseTeacher that = (CourseTeacher) o;

        return id == that.id;
    }

    @Override
    public int hashCode() {
        return id;
    }
}
