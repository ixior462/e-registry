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
/**
 * Component, shown in Modal Dialog, for adding grade to student
 */
export class AddGradeComponent implements OnInit {
  /**
   * Name of user that is getting new grade
   * @type {string}
   * @memberOf AddGradeComponent
   */
  public name: string;
  /**
   * Id of user that is getting new grade
   * @type {number}
   * @memberOf AddGradeComponent
   */
  userId: number;
  /**
   * Id of course that new grade is connected with
   * @type {string}
   * @memberOf AddGradeComponent
   */
  courseId: number;
  /**
   * Form with grade value
   * @type {FormGroup}
   * @memberOf AddGradeComponent
   */
  public addGradeForm: FormGroup;
  /**
   * Grade categories array
   * @type {GradeCategory[]}
   * @memberOf AddGradeComponent
   */
  public gradeCategories = GradeCategory.values();

  /**
   * Creates instance of component
   * @param formBuilder
   * @param modalReference
   * @param gradeService
   * @memberOf AddGradeComponent
   */
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

  /**
   * Grade value form getter
   * @memberOf AddGradeComponent
   */
  public get grade() {
    return this.addGradeForm.get('grade').value;
  }

  /**
   * Category value form getter
   * @memberOf AddGradeComponent
   */
  public get category() {
    return this.addGradeForm.get('category').value;
  }

  /**
   * Finishes adding grade
   * @memberOf AddGradeComponent
   */
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

  /**
   * Closes modal dialog
   * @memberOf AddGradeComponent
   */
  close() {
    this.modalReference.hide();
  }
}
