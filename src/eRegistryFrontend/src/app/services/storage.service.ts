import { Injectable } from '@angular/core';

/**
 * Service to perform CRUD operations on local storage
 * @export
 * @class StorageService
 */
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /**
   * Creates an instance of StorageService.
   * @memberof StorageService
   */
  constructor() { }

  /**
   * Sets token in local storage
   * @param {string} token
   * @memberof StorageService
   */
  public setToken(token: string): void {
    this.setInStorage('token', token);
  }

  /**
   * Gets token from local storage
   * @returns {string}
   * @memberof StorageService
   */
  public getToken(): string {
    return this.getFromStorage('token');
  }

  /**
   * Removes token from local storage
   * @memberof StorageService
   */
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
