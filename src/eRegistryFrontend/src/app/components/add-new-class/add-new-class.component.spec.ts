import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClassComponent } from './add-new-class.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Mock } from 'ts-mocks';
import {UsersService} from '../../services/users.service';
import {ClassesService} from '../../services/classes.service';
import {of} from 'rxjs';

describe('AddNewClassComponent', () => {
  let component: AddNewClassComponent;
  let fixture: ComponentFixture<AddNewClassComponent>;
  let routerMock;
  let usersServiceMock;
  let classesServiceMock;
  let activatedRouteMock;

  beforeEach(async(() => {
    usersServiceMock = new Mock<UsersService>({
      getUnassignedPupils: () => of([])
    });
    classesServiceMock = new Mock<ClassesService>();
    activatedRouteMock = new Mock<ActivatedRoute>({
      params: undefined
    });
    routerMock = new Mock<Router>({
      navigate: Mock.ANY_FUNC
    });
    TestBed.configureTestingModule({
      declarations: [ AddNewClassComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useFactory: () => routerMock.Object },
        { provide: UsersService, useFactory: () => usersServiceMock.Object },
        { provide: ClassesService, useFactory: () => classesServiceMock.Object },
        { provide: ActivatedRoute, useFactory: () => activatedRouteMock.Object }
      ],
      imports: [ ReactiveFormsModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    usersServiceMock
      .setup((mock) => mock.getUnassignedPupils)
      .is(() => of([]));
    expect(component).toBeTruthy();
  });
});
