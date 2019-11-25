import { Injectable } from '@angular/core';
import {of} from 'rxjs';
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
  tmp = [
    {
      id: 1,
      name: 'WPPT',
      grade: 4,
      pupils: [{
        name: 'pup1'
      }]
    },
    {
      id: 2,
      name: 'WIZ',
      grade: 4
    },
    {
      id: 3,
      name: 'WEKA',
      grade: 1
    },
    {
      id: 4,
      name: 'MIMUW',
      grade: 32141234213
    }
  ];
  private getClassesURL = env.backendURL + '/classes';
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
    return of(this.tmp.filter((el) => el.id === +id)[0] as ClassVM);
  }

  /**
   * Gets all classes
   * @returns
   * @memberof ClassesService
   */
  getAllClasses() {
    return of(this.tmp);
  }

  /**
   * Deletes specified class
   * @param {string} id
   * @returns
   * @memberof ClassesService
   */
  deleteClass(id: string) {
    console.log('deleting', id);
    return of(true);
  }

  /**
   * Adds new class
   * @param {ClassVM} classEntry
   * @returns
   * @memberof ClassesService
   */
  addClass(classEntry: ClassVM) {
    console.log(JSON.stringify(classEntry, null, 2));
    return of({success: true});
  }
}
