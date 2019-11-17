import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  tmp = [
    {
      id: 1,
      name: 'WPPT',
      grade: 4
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
    },{
      id: 1,
      name: 'WPPT',
      grade: 4
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
    },{
      id: 1,
      name: 'WPPT',
      grade: 4
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
    },{
      id: 1,
      name: 'WPPT',
      grade: 4
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
    },
  ];
  constructor() { }

  getClassById(id: any) {
    return of(this.tmp.filter((el) => el.id === +id)[0]);
  }

  getAllClasses() {
    return of(this.tmp);
  }

  deleteClass(id: string) {
    console.log('deleting', id);
    return of(true);
  }
}
