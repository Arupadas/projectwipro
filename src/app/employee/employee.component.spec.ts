// src/app/employee/employee.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Employee Dashboard');
  });

  it('should display buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.employee-actions button'));
    expect(buttons.length).toBe(4);
    expect(buttons[0].nativeElement.textContent).toContain('View Available Batches');
    expect(buttons[1].nativeElement.textContent).toContain('View Course Calendar');
    expect(buttons[2].nativeElement.textContent).toContain('Request Enrollment');
    expect(buttons[3].nativeElement.textContent).toContain('Record Feedback');
  });

  it('should toggle batches visibility', () => {
    component.viewBatches();
    fixture.detectChanges();
    const table = fixture.debugElement.query(By.css('.employee-table'));
    expect(table).toBeTruthy();
  });

  it('should toggle course calendar visibility', () => {
    component.viewCourseCalendar();
    fixture.detectChanges();
    const courseCalendar = fixture.debugElement.query(By.css('.employee-table'));
    expect(courseCalendar).toBeFalsy();
  });

  it('should toggle feedback form visibility', () => {
    component.toggleFeedbackForm();
    fixture.detectChanges();
    const feedbackForm = fixture.debugElement.query(By.css('.feedback-form'));
    expect(feedbackForm).toBeTruthy();
  });

  it('should submit feedback', () => {
    component.toggleFeedbackForm();
    fixture.detectChanges();
    component.feedback = 'This is a feedback';
    const button = fixture.debugElement.query(By.css('.feedback-form button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.feedback).toBe('');
    expect(component.showFeedbackForm).toBeFalsy();
  });

  it('should enroll in batch', () => {
    spyOn(window, 'alert');
    const batchId = 1;
    component.enrollInBatch(batchId);
    expect(window.alert).toHaveBeenCalledWith(`Enrollment requested for batch ID: ${batchId}`);
  });

  it('should request enrollment', () => {
    spyOn(window, 'alert');
    component.requestEnrollment();
    expect(window.alert).toHaveBeenCalledWith('Enrollment request sent!');
  });
});
