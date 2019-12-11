import { Component, OnInit } from '@angular/core';
import {ClassesService} from '../../services/classes.service';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute} from '@angular/router';
import {GradeService} from '../../services/grade.service';
import {log} from 'util';
import {forkJoin} from 'rxjs';
import {ModalService} from '../../services/modal.service';
import {AddGradeComponent} from '../add-grade/add-grade.component';

@Component({
  selector: 'app-browse-class-grades',
  templateUrl: './browse-class-grades.component.html',
  styleUrls: ['./browse-class-grades.component.css']
})
export class BrowseClassGradesComponent implements OnInit {
  public courseId;
  public students = [];

  constructor(
    private classesService: ClassesService,
    private usersService: UsersService,
    private gradesService: GradeService,
    public modalService: ModalService,
    private activatedRoute: ActivatedRoute
  ) {
    if (activatedRoute && activatedRoute.params) {
      activatedRoute.params.forEach((param) => {
        this.courseId = param.id;
        this.loadData();
      });
    }
    gradesService.loadStudentData.subscribe((studentId) => {
      this.loadData();
    });
  }


  private loadData() {
    this.classesService.getCourseStudentsById(this.courseId)
      .subscribe((result: any[]) => {
        this.students = result.map((r) => ({
          id: r.student.id,
          name: r.student.name,
          grades: []
        }));
        this.processCourseStudents();
      });
  }

  ngOnInit() {
  }

  private processCourseStudents() {
    const y = this.students.map(
      (student) => this.gradesService.getStudentCourseGrade(student.id, this.courseId));
    forkJoin(y)
      .subscribe((result: any) => {
        for (let i  = 0; i < this.students.length; i += 1) {
          console.log(result[i] ? log(result[i]) : log());
          this.students[i].grades = result[i]
            .map((grade: any) => ({ id: grade.id,  value: grade.grade, note: grade.note}));
        }
    });
  }

  /**
   * Opens modal dialog to add new grade to user
   * @param user
   */
  public addGradeToUser(user: any) {
    console.log(user);
    const data = {
      userId: user.id,
      courseId: this.courseId,
      name: user.name
    };
    this.modalService.showComponent(AddGradeComponent, data);
  }

  /**
   * Returns CSS class for grade
   * @param grade
   */
  public getClassForGrade(grade: any) {
    const gradeValue = parseInt(grade.value, 10);
    return gradeValue < 7 && gradeValue > 0
      ? 'grade'.concat(gradeValue.toString())
      : 'grade3';
  }

  /**
   * Deletes user grade
   * @param gradeId
   * @param student
   */
  deleteUserGrade(gradeId: number, student: any) {
    console.log(student);
    this.gradesService.deleteGrade(gradeId)
      .subscribe(() => {
        this.loadStudentData(student);
      });
  }

  private loadStudentData(student: any) {
    this.gradesService.getStudentCourseGrade(student.id, this.courseId)
      .subscribe((result: any) => {
        student.grades = result.map((grade: any) => ({id: grade.id, value: grade.grade, note: grade.note}));
      });
  }
}
