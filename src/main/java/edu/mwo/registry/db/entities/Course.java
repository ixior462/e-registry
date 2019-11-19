package edu.mwo.registry.db.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Entity class which represent each class in e-registry which is made from students and teachers.
 */
@Entity
public class Course {

    @Id
    @GeneratedValue
    private int id;

    private String name;

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(
            mappedBy = "course",
            cascade = CascadeType.MERGE,
            orphanRemoval = true
    )
    private List<CourseEntry> courseEntries = new ArrayList<>();


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Course course = (Course) o;

        if (id != course.id) return false;
        return name.equals(course.name);
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + name.hashCode();
        return result;
    }


    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public List<CourseEntry> getCourseEntries() {
        return courseEntries;
    }
}
