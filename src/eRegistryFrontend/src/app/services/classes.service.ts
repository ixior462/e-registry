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
  private getClassTeachersURL = env.backendURL + '/classTeachers';
  private getClassStudentsURL = env.backendURL + '/classStudents';
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

  getClassTeachers() {
    // return this.http.get()
  }
}
