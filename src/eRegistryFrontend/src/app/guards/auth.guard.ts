import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const loggedUser = this.authService.loggedUserValue;
    console.log(loggedUser);
    if (loggedUser) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url} });
    return false;
  }
}
