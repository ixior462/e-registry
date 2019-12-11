import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap';
import {GradeCategory} from '../../domain/grade-category';
import {GradeService} from '../../services/grade.service';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {
  public name: string;
  userId: number;
  courseId: number;
  public addGradeForm: FormGroup;
  public gradeCategories = GradeCategory.values();

  constructor(
    private formBuilder: FormBuilder,
    private modalReference: BsModalRef,
    private gradeService: GradeService
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
    return this.addGradeForm.get('grade').value;
  }

  public get category() {
    return this.addGradeForm.get('category').value;
  }

  submit() {
    this.gradeService.saveGrade({
      grade: this.grade,
      note: this.category },
      this.userId,
      this.courseId
    )
    .subscribe(() => {
      this.gradeService.loadStudentData.next(this.userId);
      this.close();
    });
  }

  close() {
    this.modalReference.hide();
  }
}
