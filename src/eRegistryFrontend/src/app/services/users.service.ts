import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import {map} from 'rxjs/operators';

/**
 * Service to perform CRUD operations on users
 * @export
 * @class UsersService
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private getStudentsURL = env.backendURL + '/students';
  private getStudentByIdURL = env.backendURL + '/student';
  private getUnassignedStudentsURL = env.backendURL + '/unassigned';
  private submitUserFormURL = env.backendURL + '/student';

  public tmp = [
    {name: 'Marcin', surname: 'Zordon', login: 'zawadzix', roleId: 0},
    {name: 'Marcin', surname: 'Krakowski', login: 'kikonix', roleId: 0},
    {name: 'Rafał', surname: 'Marcin', login: 'RMM', roleId: 1}
  ];
  /**
   * Creates an instance of UsersService.
   * @memberof UsersService
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets list of unassigned users
   * @returns
   * @memberof UsersService
   */
  public getUnassignedPupils() {
    return of([this.tmp[0], this.tmp[1], this.tmp[2]]);
  }

  /**
   * Gets list of all users
   * @returns
   * @memberof UsersService
   */
  public getUsers() {
    return this.http.get(this.getStudentsURL)
      .pipe(map((response: [{id: number, name: string}]) => {
        return response.map((user) => {
          const [name, surname] = user.name.split(' ');
          return {
            name,
            surname,
            id: user.id,
            login: name + surname,
            roleId: 1
          };
        });
      }));
  }

  /**
   * Gets specified user by Id
   * @param {string} id
   * @returns
   * @memberof UsersService
   */
  public getStudentById(id: string) {
    return this.http.get(this.getStudentByIdURL + '?id=' + id)
      .pipe(map((response: {id: number, name: string}) => {
        const [name, surname] = response.name.split(' ');
        return {
          name,
          surname,
          id: response.id,
          login: name + surname
        };
      }));
  }

  public submitUserForm(user: any) {
    return this.http.post(this.submitUserFormURL + '?name=' + user.name + '\ ' + user.surname, {});
  }
}
