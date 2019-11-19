import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Authentication Guard
 * @export
 * @class AuthGuard
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   * Creates an instance of AuthGuard.
   * @param {Router} router
   * @param {AuthService} authService
   * @memberof AuthGuard
   */
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Checks if user is logged in
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {boolean}
   * @memberof AuthGuard
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.updateToken();
    const loggedUser = this.authService.loggedUserValue;
    if (loggedUser) {
      return true;
    }
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }
}
