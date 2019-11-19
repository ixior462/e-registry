import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

/**
 * Component to add new users
 * @export
 * @class AddNewUserComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  user: any;
  public title = '';

  private newUserForm: FormGroup;

  /**
   * Creates an instance of AddNewUserComponent.
   * @param {UsersService} usersService
   * @param {FormBuilder} formBuilder
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @memberof AddNewUserComponent
   */
  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.newUserForm = formBuilder.group({
      login: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      roleId: [-1, AddNewUserComponent.properRoleValidator()],
      currentClass: ['']
    });
  }

  private static properRoleValidator() {
    return (form: AbstractControl) => form.value === -1
      ? { properRoleError: true }
      : null;
  }

  /**
   * Gets login form field
   * @readonly
   * @memberof AddNewUserComponent
   */
  get login() {
    return this.newUserForm.get('login');
  }
  /**
   * Gets name form field
   * @readonly
   * @memberof AddNewUserComponent
   */
  get name() {
    return this.newUserForm.get('name');
  }
  /**
   * Gets surname form field
   * @readonly
   * @memberof AddNewUserComponent
   */
  get surname() {
    return this.newUserForm.get('surname');
  }
  /**
   * Gets roleId form field
   * @readonly
   * @memberof AddNewUserComponent
   */
  get roleId() {
    return this.newUserForm.get('roleId');
  }

  ngOnInit() {
    this.route.params.forEach((params) => {
      console.log(params.id);
      if (params.id !== undefined) {
        this.usersService.getUserById(params.id).subscribe((result) => {
          if (result) {
            this.user = result;
            this.title = 'Edit user';
            this.newUserForm.patchValue(this.user);
            this.login.disable();
          } else {
            this.router.navigate(['/users/new']);
          }
        });
      } else {
        this.title = 'Add new user';
      }
    });
  }

  /**
   * Calls UsersService to add new user
   * @memberof AddNewUserComponent
   */
  public submitAdding() {
    console.log(this.newUserForm.value);
  }
}
