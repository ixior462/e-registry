import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

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
