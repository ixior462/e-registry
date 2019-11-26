package edu.mwo.registry.db.entities;

import javax.persistence.*;

@Entity
public class CourseTeacher {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private
    Teacher teacher;

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

    @ManyToOne
    @JoinColumn(name = "course_id")
    private
    Course course;
}
