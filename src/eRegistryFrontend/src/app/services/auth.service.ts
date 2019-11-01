import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, throwError, BehaviorSubject, Observable, of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUserSubject: BehaviorSubject<any>;
  public loggedUser: Observable<any>;

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.loggedUserSubject = new BehaviorSubject<any>(JSON.parse(storageService.getToken()));
    this.loggedUser = this.loggedUserSubject.asObservable();
  }

  public get loggedUserValue(): any {
    return this.loggedUserSubject.value;
  }

  public login(user: any) {
    this.storageService.setToken(JSON.stringify(user));
    this.loggedUserSubject.next(user);
    return of(user);
  }

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
