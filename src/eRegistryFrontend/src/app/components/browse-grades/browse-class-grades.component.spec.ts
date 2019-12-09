import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseClassGradesComponent } from './browse-class-grades.component';

describe('BrowseClassGradesComponent', () => {
  let component: BrowseClassGradesComponent;
  let fixture: ComponentFixture<BrowseClassGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseClassGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseClassGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
