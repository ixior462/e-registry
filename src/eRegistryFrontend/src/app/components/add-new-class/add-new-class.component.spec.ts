import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClassComponent } from './add-new-class.component';

describe('AddNewClassComponent', () => {
  let component: AddNewClassComponent;
  let fixture: ComponentFixture<AddNewClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
