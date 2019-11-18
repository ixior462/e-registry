import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {ClassVM} from '../domain/class-vm';

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
    }, {
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
    }, {
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
    }, {
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
    return of(this.tmp.filter((el) => el.id === +id)[0] as ClassVM);
  }

  getAllClasses() {
    return of(this.tmp);
  }

  deleteClass(id: string) {
    console.log('deleting', id);
    return of(true);
  }

  addClass(classEntry: ClassVM) {
    console.log(JSON.stringify(classEntry, null, 2));
    return of({success: true});
  }
}
