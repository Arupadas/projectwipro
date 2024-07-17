// src/app/employee/employee.component.ts
import { Component } from '@angular/core';

interface Batch {
  id: number;
  courseName: string;
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  showBatches = false;
  showCourseCalendar = false;
  showFeedbackForm = false;
  feedback: string = '';
  
  batches: Batch[] = [
    { id: 1, courseName: 'Angular Basics', startDate: new Date('2024-08-01'), endDate: new Date('2024-08-10') },
    { id: 2, courseName: 'Advanced Angular', startDate: new Date('2024-09-01'), endDate: new Date('2024-09-15') }
  ];

  viewBatches(): void {
    this.showBatches = true;
    this.showCourseCalendar = false;
    this.showFeedbackForm = false;
  }

  viewCourseCalendar(): void {
    this.showBatches = false;
    this.showCourseCalendar = true;
    this.showFeedbackForm = false;
  }

  requestEnrollment(): void {
    alert('Enrollment request sent!');
  }

  toggleFeedbackForm(): void {
    this.showFeedbackForm = !this.showFeedbackForm;
  }

  enrollInBatch(batchId: number): void {
    alert(`Enrollment requested for batch ID: ${batchId}`);
  }

  submitFeedback(): void {
    if (this.feedback.trim()) {
      alert(`Feedback submitted: ${this.feedback}`);
      this.feedback = '';
      this.showFeedbackForm = false;
    } else {
      alert('Please enter feedback before submitting.');
    }
  }
}
