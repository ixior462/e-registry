import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  user: any;
  public title = '';

  private newUserForm: FormGroup;

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

  get login() {
    return this.newUserForm.get('login');
  }
  get name() {
    return this.newUserForm.get('name');
  }
  get surname() {
    return this.newUserForm.get('surname');
  }
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

  public submitAdding() {
    console.log(this.newUserForm.value);
  }
}
