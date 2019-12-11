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

  /**
   * Creates instance of service
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Adds new grade to DB
   * @param grade
   * @param studentId
   * @param courseId
   */
  saveGrade(grade: any, studentId, courseId) {
    const gradeUrlParam = `?studentId=${studentId}&courseId=${courseId}&grade=${grade.grade}&note=${grade.note}`;
    return this.http.post(this.saveGradeURL + `${gradeUrlParam}`, {});
  }

  /**
   * Gets grades of selected user from selected course
   * @param studentId
   * @param courseId
   */
  getStudentCourseGrade(studentId: number, courseId: string) {
    return this.http.get(this.getStudentCourseGradeURL + `?studentId=${studentId.toString()}&courseId=${courseId}`);
  }

  /**
   * Deletes grade
   * @param gradeId
   */
  deleteGrade(gradeId: number) {
    return this.http.delete(this.deleteGradeURL + `?id=${gradeId}`);
  }
}
