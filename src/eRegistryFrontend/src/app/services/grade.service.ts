import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private saveGradeURL = env.backendURL + '/grade';
  private getStudentCourseGradeURL = env.backendURL + '/grades';
  private deleteGradeURL = env.backendURL + '/grade';
  constructor(private http: HttpClient) { }

  saveGrade(grade: any) {
    return this.http.post(this.saveGradeURL + `${grade}`, {});
  }

  getStudentCourseGrade(studentId: string, courseId: string) {
    return this.http.get(this.getStudentCourseGradeURL + `?studentId=${studentId}?courseId=${courseId}`);
  }

  deleteGrade(gradeId: string) {
    this.http.delete(this.deleteGradeURL + `?id=${gradeId}`);
  }
}
