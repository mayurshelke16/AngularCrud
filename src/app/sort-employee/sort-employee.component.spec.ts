import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortEmployeeComponent } from './sort-employee.component';

describe('SortEmployeeComponent', () => {
  let component: SortEmployeeComponent;
  let fixture: ComponentFixture<SortEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
