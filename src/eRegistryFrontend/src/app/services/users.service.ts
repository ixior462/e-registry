import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/**
 * Service to perform CRUD operations on users
 * @export
 * @class UsersService
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public tmp = [
    {name: 'Marcin', surname: 'Zawada', login: 'zawadzix', roleId: 0},
    {name: 'Marcin', surname: 'Kik', login: 'kikonix', roleId: 0},
    {name: 'Rafał', surname: 'Marcin', login: 'RMM', roleId: 1},
    {name: 'Marcin', surname: 'Zawada', login: 'zawadzix', roleId: 0},
    {name: 'Marcin', surname: 'Kik', login: 'kikonix', roleId: 0},
    {name: 'Rafał', surname: 'Marcin', login: 'RMM', roleId: 1},
    {name: 'Marcin', surname: 'Zawada', login: 'zawadzix', roleId: 0},
    {name: 'Marcin', surname: 'Kik', login: 'kikonix', roleId: 0},
    {name: 'Rafał', surname: 'Marcin', login: 'RMM', roleId: 1},
  ];
  /**
   * Creates an instance of UsersService.
   * @memberof UsersService
   */
  constructor() { }

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
    return of(this.tmp);
  }

  /**
   * Gets specified user by Id
   * @param {string} id
   * @returns
   * @memberof UsersService
   */
  public getUserById(id: string) {
    return of(this.tmp.filter((e) => e.login === id)[0]);
  }
}
