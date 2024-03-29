package edu.mwo.registry.db.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Entity class which represent each class in e-registry which is made from students and teachers.
 */
@Entity
public class Course {

    @Id
    @GeneratedValue
    private int id;

    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Course course = (Course) o;

        return id == course.id;
    }

    @Override
    public int hashCode() {
        return id;
    }
}
