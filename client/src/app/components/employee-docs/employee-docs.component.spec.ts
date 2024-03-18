import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDocsComponent } from './employee-docs.component';

describe('EmployeeDocsComponent', () => {
  let component: EmployeeDocsComponent;
  let fixture: ComponentFixture<EmployeeDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDocsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
