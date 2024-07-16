// Import necessary Angular modules and any other dependencies
import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-management', // Replace with your component selector
  templateUrl: './batch-management.component.html',
  styleUrls: ['./batch-management.component.css'] // If you have specific styles for this component
})
export class BatchManagementComponent {
  newBatch: any = {}; // Object to store new batch data
  selectedBatchId: string = ''; // To store selected batch ID
  selectedEmployeeId: string = ''; // To store selected employee ID

  constructor() {}

  // Method to create a new batch
  createBatch() {
    // Implement your logic here to create a new batch
    console.log('Creating batch:', this.newBatch);
    // Example: You can send HTTP request to API to create batch
    // Reset form or clear newBatch object after submission
    this.resetBatchForm();
  }

  // Method to enroll an employee to a batch
  enrollEmployee(batchId: string, employeeId: string) {
    // Implement your logic here to enroll an employee to a batch
    console.log('Enrolling employee:', batchId, employeeId);
    // Example: You can send HTTP request to API to enroll employee
    // Clear selectedBatchId and selectedEmployeeId after enrollment
    this.selectedBatchId = '';
    this.selectedEmployeeId = '';
  }

  // Optional method for resetting the newBatch form after submission
  resetBatchForm() {
    this.newBatch = {
      id: '',
      name: '',
      courseId: '',
      tutor: '',
      startDate: null, // Update based on your data model
      endDate: null // Update based on your data model
    };
  }
}
