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
  batches = [
    { id: 1, batchName: 'Batch 1', courseId: 'C001', batchTutor: 'Tutor A' },
    { id: 2, batchName: 'Batch 2', courseId: 'C002', batchTutor: 'Tutor B' }
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [
      // Example events
      { title: 'Task 1', start: '2024-07-01' },
      { title: 'Task 2', start: '2024-07-05' }
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
  }

  submitFeedback() {
    // Logic for submitting feedback
    console.log(this.feedback);
    this.feedback = '';
    this.showFeedbackForm = false;
  }
}
