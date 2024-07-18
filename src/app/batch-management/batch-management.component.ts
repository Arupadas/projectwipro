// Import necessary Angular modules and any other dependencies
import { Component } from '@angular/core';
import { Batch, BatchEnrollment, EnrollmentStatus } from '../Models/batchmanagement.model';
import { BatchService } from '../Services/batch.service';

@Component({
  selector: 'app-batch-management', // Replace with your component selector
  templateUrl: './batch-management.component.html',
  styleUrls: ['./batch-management.component.css'] // If you have specific styles for this component
})
export class BatchManagementComponent {
  showAddBatchForm = true;
  showAddEnrollEmployeeForm = false ;
  newBatch: Batch = {
    batchName: '',
    coursecalendarId: null,
    batchTutor: '',
  };// Object to store new batch data
  selectedBatchId: number = 0; // To store selected batch ID
  selectedEmployeeId: number = 0; // To store selected employee ID

  constructor(private batchService: BatchService) {}

  toggleAddBatchForm() {
    this.showAddBatchForm = !this.showAddBatchForm;
    this.showAddEnrollEmployeeForm = false ;
  }
  toggleAddEnrollEmployeeForm() {
    this.showAddEnrollEmployeeForm = !this.showAddEnrollEmployeeForm;
    this.showAddBatchForm = false ;
  }
  // Method to create a new batch
  createBatch() {
    this.batchService.createBatch(this.newBatch).subscribe({
      next: (createdBatch) => {
        console.log('Batch created:', createdBatch);
        this.resetBatchForm();
      },
      error: (error) => console.error('Error creating batch:', error)
    });
  }

  // Method to enroll an employee to a batch
  enrollEmployee() {
    const enrollment: BatchEnrollment = {
      batchId: this.selectedBatchId,
      employeeId: this.selectedEmployeeId,
      status: EnrollmentStatus.Pending
    };

    this.batchService.enrollEmployee(enrollment).subscribe({
      next: (createdEnrollment) => {
        console.log('Employee enrolled:', createdEnrollment);
        this.selectedBatchId = 0;
        this.selectedEmployeeId = 0;
      },
      error: (error) => console.error('Error enrolling employee:', error)
    });
  }

  // Optional method for resetting the newBatch form after submission
  resetBatchForm() {
    this.newBatch = {
      batchName: '',
      coursecalendarId: null,
      batchTutor: '',
    };
  }
}
