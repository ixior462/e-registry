package edu.mwo.registry.db.entities;

import javax.persistence.*;

/**
 * Entity class which represent each grade in e-registry which is made from students and teachers.
 */
@Entity
public class Grade {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "courseStudent_id")
    private CourseStudent courseStudent;

    private String grade;

    private String note;

    public int getId() {
        return id;
    }

    public CourseStudent getCourseStudent() {
        return courseStudent;
    }

    public void setCourseStudent(CourseStudent courseStudent) {
        this.courseStudent = courseStudent;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Grade grade = (Grade) o;

        return id == grade.id;
    }

    @Override
    public int hashCode() {
        return id;
    }
}
