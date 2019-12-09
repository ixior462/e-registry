import { Component, OnInit } from '@angular/core';
import {ClassesService} from '../../services/classes.service';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-browse-class-grades',
  templateUrl: './browse-class-grades.component.html',
  styleUrls: ['./browse-class-grades.component.css']
})
export class BrowseClassGradesComponent implements OnInit {
  public classEntry: any;

  constructor(
    private classesService: ClassesService,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    if (activatedRoute && activatedRoute.params) {
      activatedRoute.params.forEach((param) => {
        const id = param.id;
        classesService.getClassById(id).subscribe((result) => {
          console.log(result);
        });
      });
    }
  }


  ngOnInit() {
  }

}
