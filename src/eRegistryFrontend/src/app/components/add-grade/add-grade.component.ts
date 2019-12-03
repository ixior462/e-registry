import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap';
import {GradeCategory} from '../../domain/grade-category';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {
  public name: string;
  public addGradeForm: FormGroup;
  public gradeCategories = GradeCategory.values();

  constructor(
    private formBuilder: FormBuilder,
    private modalReference: BsModalRef
  ) {
    this.addGradeForm = this.formBuilder.group({
      grade: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(6)
        ],
      ],
      category: [
        GradeCategory.NONE,
      ]
    });
    console.log(this.gradeCategories);
  }

  ngOnInit() {
  }

  public get grade() {
    return this.addGradeForm.get('grade');
  }

  submit() {
    console.log(this.grade.value);
    this.close();
  }

  close() {
    this.modalReference.hide();
  }
}
