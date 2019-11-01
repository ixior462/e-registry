import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setToken(token: string): void {
    this.setInStorage('token', token);
  }

  public getToken(): string {
    return this.getFromStorage('token');
  }

  public removeToken(): void {
    this.removeFromStorage('token');
  }

  private setInStorage(id: string, value: string): void {
    localStorage.setItem(id, value);
  }

  private removeFromStorage(id: string): void {
    localStorage.removeItem(id);
  }

  private getFromStorage(id: string): string {
    return localStorage.getItem(id);
  }
}
