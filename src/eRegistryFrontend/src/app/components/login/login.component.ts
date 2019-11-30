import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

/**
 * Component for logging in
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * Form for logging in
   * @type {FormGroup}
   * @memberof LoginComponent
   */
  public loginForm: FormGroup;
  /**
   * Current auth status
   * @memberof LoginComponent
   */
  public authStatus = true;

  /**
   * Creates an instance of LoginComponent.
   * @param {Router} router
   * @param {AuthService} authService
   * @param {FormBuilder} formBuilder
   * @memberof LoginComponent
   */
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  /**
   * Calls authService to log in
   * @memberof LoginComponent
   */
  public submitLogin() {
    this.authService.login(this.loginForm.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  /**
   * Calls authService to check if user is logged in
   * @returns {boolean}
   * @memberof LoginComponent
   */
  public isAuthenticated(): boolean {
    return this.authService.loggedUserValue ? true : false;
  }
}
