import { Injectable } from '@angular/core';
import {ClassVM} from '../domain/class-vm';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';

/**
 * Service to perform CRUD operations with classes
 * @export
 * @class ClassesService
 */
@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private addClassURL = env.backendURL + '/class';
  private getClassesURL = env.backendURL + '/classes';
  private getClassByIdURL = env.backendURL + '/class';
  private deleteClassURL = env.backendURL + '/class';
  private getCourseStudentsURL = env.backendURL + '/courseStudents';
  private getCourseTeacherURL = env.backendURL + '/courseTeacher';
  private getStudentsFromClassURL = env.backendURL + '/studentsFromClass';
  private getTeachersFromClassURL = env.backendURL + '/teachersFromClass';
  private getStudentCoursesURL = env.backendURL + '/studentCourses';
  private getTeacherCoursesURL = env.backendURL + '/teacherCourses';

  /**
   * Creates an instance of ClassesService.
   * @memberof ClassesService
   */
  constructor(private http: HttpClient) {  }

  /**
   * Gets specified class by Id
   * @param {*} id
   * @returns
   * @memberof ClassesService
   */
  getClassById(id: any) {
    return this.http.get(this.getClassByIdURL + `?id=${id}`);
  }

  /**
   * Gets all classes
   * @returns
   * @memberof ClassesService
   */
  getAllClasses() {
    return this.http.get(this.getClassesURL);
  }

  /**
   * Deletes specified class
   * @param {string} id
   * @returns
   * @memberof ClassesService
   */
  deleteClass(id: string) {
    return this.http.delete(this.deleteClassURL + `?id=${id}`);
  }

  /**
   * Adds new class
   * @param {ClassVM} classEntry
   * @returns
   * @memberof ClassesService
   */
  addClass(classEntry: any) {
    return this.http.post(this.addClassURL + `${classEntry}`, {});
  }

  getCourseStudentsById(courseId: any) {
    return this.http.get(this.getCourseStudentsURL + `?id=${courseId}`);
  }

  getCourseTeacherById(courseId: any) {
    return this.http.get(this.getCourseTeacherURL + `?id=${courseId}`);
  }

  getStudentsFromClass(classId: any) {
    return this.http.get(this.getStudentsFromClassURL + `?id=${classId}`);
  }

  getTeachersFromClass(classId: any) {
    return this.http.get(this.getTeachersFromClassURL + `?id=${classId}`);
  }

  getStudentCourses(studentId: any) {
    return this.http.get(this.getStudentCoursesURL + `?id=${studentId}`);
  }

  getTeacherCourses(teacherId: any) {
    return this.http.get(this.getTeacherCoursesURL + `?id=${teacherId}`);
  }
}
