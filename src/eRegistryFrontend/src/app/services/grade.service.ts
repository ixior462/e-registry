import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private saveGradeURL = env.backendURL + '/grade';
  private getStudentCourseGradeURL = env.backendURL + '/grades';
  private deleteGradeURL = env.backendURL + '/grade';

  public readonly loadStudentData  = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  saveGrade(grade: any, studentId, courseId) {
    const gradeUrlParam = `?studentId=${studentId}&courseId=${courseId}&grade=${grade.grade}&note=${grade.note}`;
    return this.http.post(this.saveGradeURL + `${gradeUrlParam}`, {});
  }

  getStudentCourseGrade(studentId: number, courseId: string) {
    return this.http.get(this.getStudentCourseGradeURL + `?studentId=${studentId.toString()}&courseId=${courseId}`);
  }

  deleteGrade(gradeId: number) {
    console.log(gradeId);

    return this.http.delete(this.deleteGradeURL + `?id=${gradeId}`);
  }
}
