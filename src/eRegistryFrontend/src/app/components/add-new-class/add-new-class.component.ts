import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassesService} from '../../services/classes.service';
import {UserVM} from '../../domain/user-vm';
import {faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import {ClassVM} from '../../domain/class-vm';

@Component({
  selector: 'app-add-new-class',
  templateUrl: './add-new-class.component.html',
  styleUrls: ['./add-new-class.component.css']
})
export class AddNewClassComponent implements OnInit {
  public newClassForm: FormGroup;
  public submitted = false;
  public unassignedPupils: UserVM[] = [];
  public title = '';
  classEntry: ClassVM;
  classUsers: UserVM[] = [];
  arrowLeft = faArrowCircleLeft;
  arrowRight = faArrowCircleRight;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private classesService: ClassesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.newClassForm = this.formBuilder.group({
      name: ['', Validators.required],
      grade: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.getUnassignedUsers();
    this.route.params.forEach((params) => {
      console.log(params.id);
      if (params.id === undefined) {
        this.title = 'Add new class';
      } else {
        this.classesService.getClassById(params.id).subscribe((result) => {
          console.log(result);
          if (result) {
            this.classEntry = result;
            this.title = 'Edit class';
            this.newClassForm.patchValue(this.classEntry);
            this.classUsers = this.getClassUsers();
          } else {
            this.router.navigate(['/classes/new']);
          }
        });
      }
    });
  }

  get name() { return this.newClassForm.get('name'); }
  get grade() { return this.newClassForm.get('grade'); }

  getUnassignedUsers() {
    this.usersService.getUnassignedPupils().subscribe((result) => {
      this.unassignedPupils = result.map((el) => ({...el, selected: false} as UserVM));
    });
  }

  getClassUsers() {
    return this.classEntry && this.classEntry.pupils
      ? this.classEntry.pupils
        .map((el) => ({ ...el, selected: false } as UserVM))
      : [];
  }

  selectOnClick(user: UserVM) {
    user.selected = !user.selected;
  }

  assign() {
    const moved = this.unassignedPupils.filter((el) => el.selected);
    this.classUsers.push(...moved);
    this.unassignedPupils = _.differenceBy(this.unassignedPupils, moved, (el) => el.login);
    this.classUsers.forEach((el) => el.selected = false);
  }

  unassign() {
    const moved = this.classUsers.filter((el) => el.selected);
    this.unassignedPupils.push(...moved);
    this.classUsers = _.differenceBy(this.classUsers, moved, (el) => el.login);
    this.unassignedPupils.forEach((el) => el.selected = false);
  }

  public submitAddClass() {
    this.submitted = true;
    if (this.newClassForm.valid) {
      this.classEntry = {
        ...this.newClassForm.value,
        pupils: this.classUsers,
        id: this.classEntry.id
      };
      this.classesService.addClass(this.classEntry).subscribe(
        (result) => {
          console.log('Added:', this.classEntry.id);
          this.router.navigate(['/classes']);
      }, (error) => {
          console.log('');
      }
      );
    } else {
      this.submitted = true;
      this.newClassForm.markAllAsTouched();
    }
  }
}
