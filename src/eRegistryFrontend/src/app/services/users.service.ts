import { Injectable } from '@angular/core';
import { of } from 'rxjs';

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
  constructor() { }

  public getUnassignedPupils() {
    return of([this.tmp[0], this.tmp[1], this.tmp[2]]);
  }

  public getUsers() {
    return of(this.tmp);
  }

  public getUserById(id: string) {
    return of(this.tmp.filter((e) => e.login === id)[0]);
  }
}
