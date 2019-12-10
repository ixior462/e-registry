import { Component, OnInit } from '@angular/core';
import {ClassesService} from '../../services/classes.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-teacher-overview',
  templateUrl: './teacher-overview.component.html',
  styleUrls: ['./teacher-overview.component.css']
})
export class TeacherOverviewComponent implements OnInit {
  public classes = [];
  private userId = '';
  private userName = '';
  public courseForm: FormControl;
  private defaultOption = { id: -1, name: 'Select course' };

  constructor(
    private classesService: ClassesService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userId = this.authService.loggedUserValue.id;
    this.userName = this.authService.loggedUserValue.name;
    this.courseForm = new FormControl(this.defaultOption, Validators.required);
  }

  get courseId() {
    return this.courseForm.value.id;
  }

  ngOnInit() {
    this.classesService.getTeacherCourses(this.userId)
      .subscribe((result: any[]) => {
        this.userName = result.map((r) => r.teacher.name)[0];
        this.classes = result.map((course) => course.course);
      });
  }

  navigateToCourse(courseId: string) {
    this.router.navigate(['/grades/course/'.concat(courseId)]);
  }
}
