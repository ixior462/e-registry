import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassesService} from '../../services/classes.service';

@Component({
  selector: 'app-add-new-class',
  templateUrl: './add-new-class.component.html',
  styleUrls: ['./add-new-class.component.css']
})
export class AddNewClassComponent implements OnInit {
  public newClassForm: FormGroup;
  public submitted = false;
  public unassignedPupils = [];
  public title = '';
  classEntry: any;

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
      users: this.formBuilder.array(this.unassignedPupils)
    });
  }

  ngOnInit() {
    this.route.params.forEach((params) => {
      console.log(params.id);
      if (params.id !== undefined) {
        console.log('if');
        this.classesService.getClassById(params.id).subscribe((result) => {
          console.log(result);
          if (result) {
            this.classEntry = result;
            this.title = 'Edit class';
            this.newClassForm.patchValue(this.classEntry);
          } else {
            this.router.navigate(['/classes/new']);
          }
        });
      } else {
        console.log('else');
        this.title = 'Add new class';
      }
    });
  }

  get name() { return this.newClassForm.get('name'); }
  get grade() { return this.newClassForm.get('grade'); }

  public submitAddClass() {
    this.submitted = true;
    if (this.newClassForm.valid) {
      console.log(JSON.stringify(this.newClassForm.value, null, 2));
    } else {
      this.submitted = true;
      this.newClassForm.markAllAsTouched();
    }
  }
}
