import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  requestEnrollment() {
    throw new Error('Method not implemented.');
  }
  showBatches = false;
  showCourseCalendar = false;
  showFeedbackForm = false;
  feedback: string = '';
  enrolledCourses: number = 0;
  batches = [
    { id: 1, batchName: 'Batch 101', courseName: 'Course A', batchTutor: 'Tutor A' },
    { id: 2, batchName: 'Batch 102', courseName: 'Course B', batchTutor: 'Tutor B' },
    { id: 3, batchName: 'Batch 103', courseName: 'Course C', batchTutor: 'Tutor C' },
    { id: 4, batchName: 'Batch 104', courseName: 'Course D', batchTutor: 'Tutor D' },
    { id: 5, batchName: 'Batch 105', courseName: 'Course E', batchTutor: 'Tutor E' },
    { id: 6, batchName: 'Batch 106', courseName: 'Course F', batchTutor: 'Tutor F' }
    
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [
      // Example events
      { title: 'Task 1', start: '2024-07-01' },
      { title: 'Task 2', start: '2024-07-05' },
      { title: 'Task 3', start: '2024-07-08' },
      { title: 'Task 4', start: '2024-10-09' },
      { title: 'Task 5', start: '2024-11-10' },
      { title: 'Task 6', start: '2024-12-11' }
    ]

  };

  viewBatches() {
    this.showBatches = true;
    this.showCourseCalendar = false;
    this.showFeedbackForm = false;
  }

  viewCourseCalendar() {
    this.showBatches = false;
    this.showCourseCalendar = true;
    this.showFeedbackForm = false;
  }

  toggleFeedbackForm() {
    this.showFeedbackForm = !this.showFeedbackForm;
  }

  enrollInBatch(batchId: number) {
    // Logic for enrolling in a batch
    alert(`Enrollment requested for batch ID: ${batchId}`);
    this.enrolledCourses++;
  }

  submitFeedback() {
    // Logic for submitting feedback
    console.log(this.feedback);
    this.feedback = '';
    this.showFeedbackForm = false;
  }
}
