import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

/**
 * Main component of web app
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eRegistryFrontend';

  /**
   * Creates an instance of AppComponent.
   * @param {AuthService} authService
   * @param {Router} router
   * @memberof AppComponent
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Checks if user is authenticated
   * @returns
   * @memberof AppComponent
   */
  public isAuthenticated() {
    return !!this.authService.loggedUserValue;
  }

  /**
   * Gets current user info
   * @returns
   * @memberof AppComponent
   */
  public getLoggedUser() {
    return this.authService.loggedUserValue;
  }

  /**
   * Logs user out and redirects to login page
   * @memberof AppComponent
   */
  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
