import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable, of } from 'rxjs';
import { StorageService } from './storage.service';

/**
 * Authentication service
 * @export
 * @class AuthService
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUserSubject: BehaviorSubject<any>;
  /**
   * Current user observable
   * @type {Observable<any>}
   * @memberof AuthService
   */
  public loggedUser: Observable<any>;

  /**
   * Creates an instance of AuthService.
   * @param {HttpClient} http
   * @param {StorageService} storageService
   * @memberof AuthService
   */
  constructor(private http: HttpClient, private storageService: StorageService) {
    this.loggedUserSubject = new BehaviorSubject<any>(JSON.parse(storageService.getToken()));
    this.loggedUser = this.loggedUserSubject.asObservable();
  }

  /**
   * Logged user getter
   * @readonly
   * @type {*}
   * @memberof AuthService
   */
  public get loggedUserValue(): any {
    return this.loggedUserSubject.value;
  }

  /**
   * Logs user in
   * @param {*} user
   * @returns
   * @memberof AuthService
   */
  public login(user: any) {
    this.storageService.setToken(JSON.stringify(user));
    this.loggedUserSubject.next(user);
    return of(user);
  }

  /**
   * Logs user out
   * @memberof AuthService
   */
  public logout() {
    this.storageService.removeToken();
    this.loggedUserSubject.next(null);
  }

  public authenticateFalse(token: any) {
    return throwError('kurde');
  }

  public authenticateTrue(something: any) {
    this.storageService.setToken(JSON.stringify(something));
  }
}
