import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseClassesComponent } from './browse-classes.component';

describe('BrowseClassesComponent', () => {
  let component: BrowseClassesComponent;
  let fixture: ComponentFixture<BrowseClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
