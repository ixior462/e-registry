import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eRegistryFrontend';

  constructor(private authService: AuthService, private router: Router
  ) {}

  public isAuthenticated() {
    return !!this.authService.loggedUserValue;
  }

  public getLoggedUser() {
    return this.authService.loggedUserValue;
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
