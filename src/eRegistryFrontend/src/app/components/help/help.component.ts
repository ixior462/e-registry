import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

/**
 * Component to show other components
 * @export
 * @class HelpComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
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
