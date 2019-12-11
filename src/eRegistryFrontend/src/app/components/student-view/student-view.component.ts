import { Component, OnInit } from '@angular/core';
import {GradeService} from '../../services/grade.service';
import {ClassesService} from '../../services/classes.service';
import {ActivatedRoute, Router} from '@angular/router';
import { forkJoin } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  private studentId: number;
  public courses = [];
  public grades = {};
  constructor(
    private gradeService: GradeService,
    private classService: ClassesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((param) => {
      if (param.id === undefined) {
        this.router.navigate(['/']);
      } else {
        this.studentId = param.id;
        this.classService.getStudentCourses(param.id).subscribe((result: any[]) => {
          this.courses = result.map((course) => course.course);
          console.log(this.courses);
          this.getStudentGrades();
        }, () => {
          this.router.navigate(['/']);
        });
      }
    });
  }

  getStudentGrades() {
    const gradesStream = this.courses.map(
      (course) => this.gradeService.getStudentCourseGrade(this.studentId, course.id)
    );
    forkJoin(gradesStream)
      .subscribe((result) => {
        console.log(result);
        this.grades =  _.chain(result)
          .flatMap()
          .map((grade) => ({
            courseId: grade.courseStudent.course.id,
            value: grade.grade,
            note: grade.note
          }))
          .groupBy((grade) => grade.courseId)
          .value();
      });
  }

  getClassForGrade(grade: any) {
    const gradeValue = parseInt(grade.value, 10);
    return gradeValue < 7 && gradeValue > 0
      ? 'grade'.concat(gradeValue.toString())
      : 'grade3';
  }
}
