package edu.mwo.registry.controllers.forms;

import java.util.List;

public class LoginResponse {

    private boolean logged;
    private String role;
    private int id;
    private List classes;

    public boolean isLogged() {
        return logged;
    }

    public void setLogged(boolean logged) {
        this.logged = logged;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List getClasses() {
        return classes;
    }

    public void setClasses(List classes) {
        this.classes = classes;
    }
}
