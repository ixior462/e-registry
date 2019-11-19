import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

/**
 * Component to show other components
 * @export
 * @class OverviewComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  public isAuthenticated() {
    return this.authService.loggedUserValue ? true : false;
  }
}
