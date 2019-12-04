import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherOverviewComponent } from './teacher-overview.component';

describe('TeacherOverviewComponent', () => {
  let component: TeacherOverviewComponent;
  let fixture: ComponentFixture<TeacherOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
