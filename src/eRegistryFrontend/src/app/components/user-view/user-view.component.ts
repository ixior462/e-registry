import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  // todo: fetch list of existing students from DB
  students = ['Student1', 'Student2', 'Student3', 'Student11',
  'Student22', 'Student33', 'Student111', 'Student222', 'Student333333333',
  'Student1111', 'Student2212', 'Student3313'];

  // todo: fetch list of existing teachers from DB
  teachers = ['Teacher1', 'Teacher2', 'Teacher3', 'Teacher11', 'Teacher12', 'Teacher13', 'Teacher21', 'Teacher22', 'Teacher23'];

  constructor(
      private router: Router,
      private authService: AuthService,
    ) { }

  ngOnInit() {
  }

  public logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
