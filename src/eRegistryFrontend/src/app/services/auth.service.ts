import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StorageService } from './storage.service';
import { environment as env } from '../../environments/environment';

/**
 * Authentication service
 * @export
 * @class AuthService
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private getLoginURL = env.backendURL + '/login';


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

    user.id = 101;
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

  /**
   * Passes user data for verification
   * @memberOf AuthService
   */
  public updateToken() {
    this.loggedUserSubject.next(JSON.parse(this.storageService.getToken()));
  }
}
