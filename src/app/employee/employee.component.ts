import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BatchService } from '../Services/batch.service'; // Adjust the path as needed
import { BatchEnrollment, EnrollmentStatus } from '../Models/batchmanagement.model'; // Adjust the path as needed
import {jwtDecode} from 'jwt-decode';

interface JwtPayload {
  sub: string; // Username or subject
  jti: string; // JWT ID
  email: string;
  role: string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string; // User ID or employee ID
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  showBatches = false;
  showCourseCalendar = false;
  showFeedbackForm = false;
  feedback: string = '';
  enrolledCourses: number = 0;
  batches: any[] = [];
  employeeId: string | null = null;
  enrollmentStatus: { [key: number]: EnrollmentStatus } = {};

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [
      { title: 'Task 1', start: '2024-07-01' },
      { title: 'Task 2', start: '2024-07-05' },
      { title: 'Task 3', start: '2024-07-08' },
      { title: 'Task 4', start: '2024-10-09' },
      { title: 'Task 5', start: '2024-11-10' },
      { title: 'Task 6', start: '2024-12-11' }
    ]
  };

  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
    this.loadBatches();
    this.employeeId = this.getEmployeeIdFromToken();
  }
  loadBatches() {
    this.batchService.getBatches().subscribe(
      (data: any[]) => {
        this.batches = data;
        this.checkEnrollmentStatuses(); // Check statuses for all batches after loading
      },
      error => {
        console.error('Error fetching batches', error);
      }
    );
  }

  getEmployeeIdFromToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: JwtPayload = jwtDecode(token);
        return decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']; // Extract the userId or employeeId
      } catch (error) {
        console.error('Failed to decode token', error);
        return null;
      }
    }
    return null;
  }

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
    if (this.employeeId) {
      const enrollment: BatchEnrollment = {
        batchId: batchId,
        employeeId: parseInt(this.employeeId, 10), // Convert to number if needed
        status: EnrollmentStatus.Pending
      };

      this.batchService.enrollEmployee(enrollment).subscribe(
        () => {
          alert(`Enrollment requested for batch ID: ${batchId}`);
          this.enrolledCourses++;
          this.checkEnrollmentStatus(batchId); // Check status after enrollment
        },
        error => {
          console.error('Error enrolling in batch', error);
        }
      );
    } else {
      console.error('Employee ID not found');
    }
  }


  checkEnrollmentStatus(batchId: number) {
    if (this.employeeId) {
      this.batchService.getEnrollmentStatus(batchId, parseInt(this.employeeId, 10)).subscribe(
        (data: BatchEnrollment) => {
          this.enrollmentStatus[batchId] = data.status;
        },
        error => {
          console.error('Error fetching enrollment status', error);
        }
      );
    }
  }

  checkEnrollmentStatuses() {
    if (this.employeeId) {
      this.batches.forEach(batch => {
        this.checkEnrollmentStatus(batch.id);
      });
    }
  }

  submitFeedback() {
    console.log(this.feedback);
    this.feedback = '';
    this.showFeedbackForm = false;
  }
}
