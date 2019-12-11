import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassesService} from '../../services/classes.service';
import {UserVM} from '../../domain/user-vm';
import {faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import {ClassVM} from '../../domain/class-vm';

/**
 * Component with form to create new class
 * @export
 * @class AddNewClassComponent
 * @implements {OnInit}
 */
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

  /**
   * Creates an instance of AddNewClassComponent.
   * @param {FormBuilder} formBuilder
   * @param {UsersService} usersService
   * @param {ClassesService} classesService
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @memberof AddNewClassComponent
   */
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private classesService: ClassesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.newClassForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (!this.route.params) {
      this.router.navigate(['/classes/new']);
    }
    this.route.params.forEach((params) => {
      if (params.id === undefined) {
        this.title = 'Add new class';
      } else {
        this.classesService.getClassById(params.id).subscribe((result: any) => {
          console.log(result);
          if (result) {
            this.classEntry = result;
            this.title = 'Edit class';
            this.newClassForm.get('name').setValue(result.name)
            this.getClassUsers();
            this.getUnassignedUsers();
          } else {
            this.router.navigate(['/classes/new']);
          }
        });
      }
    });
  }

  /**
   * Name form field getter
   * @readonly
   * @memberof AddNewClassComponent
   */
  get name() { return this.newClassForm.get('name'); }
  /**
   * Grade form field getter
   * @readonly
   * @memberof AddNewClassComponent
   */
  get grade() { return this.newClassForm.get('grade'); }

  /**
   * Call Users Service to get unassigned pupils
   * @memberof AddNewClassComponent
   */
  getUnassignedUsers() {
    this.usersService.getStudents().subscribe((result) => {
      this.unassignedPupils = result.map((el) => ({...el, selected: false} as UserVM));
    });
  }

  /**
   * Gets users of current class
   * @returns
   * @memberof AddNewClassComponent
   */
  getClassUsers() {
    if (this.classEntry) {
      this.classesService.getStudentsFromClass(this.classEntry.id).subscribe((result: any[]) => {
        this.classUsers = result.map((student) => {
          return { ...student, selected: false } as UserVM;
        });
      });
    }
  }

  /**
   * Sets user as selected on click
   * @param {UserVM} user
   * @memberof AddNewClassComponent
   */
  selectOnClick(user: UserVM) {
    user.selected = !user.selected;
  }

  /**
   * Moves selected unassigned pupils to current class pupils
   * @memberof AddNewClassComponent
   */
  assign() {
    const moved = this.unassignedPupils.filter((el) => el.selected);
    this.classUsers.push(...moved);
    this.unassignedPupils = _.differenceBy(this.unassignedPupils, moved, (el) => el.login);
    this.classUsers.forEach((el) => el.selected = false);
  }

  /**
   * Moves selected current class pupils to unassigned pupils
   * @memberof AddNewClassComponent
   */
  unassign() {
    const moved = this.classUsers.filter((el) => el.selected);
    this.unassignedPupils.push(...moved);
    this.classUsers = _.differenceBy(this.classUsers, moved, (el) => el.login);
    this.unassignedPupils.forEach((el) => el.selected = false);
  }

  /**
   * Calls service to add new class
   * @memberof AddNewClassComponent
   */
  public submitAddClass() {
    this.submitted = true;
    if (this.newClassForm.valid) {
      this.classEntry = {
        ...this.newClassForm.value,
        pupils: this.classUsers,
        id: this.classEntry.id ? this.classEntry.id : ''
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
