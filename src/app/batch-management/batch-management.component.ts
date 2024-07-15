import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Batch } from './batch.model'; // Assuming you have a Batch model defined

@Component({
  selector: 'app-batch-management',
  templateUrl: './batch-management.component.html',
  styleUrls: ['./batch-management.component.css']
})
export class BatchManagementComponent {
  batchForm: FormGroup;
  batches: Batch[] = []; // Assuming you have a list of batches

  constructor(private fb: FormBuilder) {
    this.batchForm = this.fb.group({
      id: [0],
      batchName: ['', Validators.required],
      courseId: [0, Validators.required],
      batchTutor: ['', Validators.required],
      enrollments: this.fb.array([])
    });
  }

  get enrollments(): FormArray {
    return this.batchForm.get('enrollments') as FormArray;
  }

  addEnrollment(): void {
    const enrollmentGroup = this.fb.group({
      id: [0],
      batchId: [0],
      employeeId: [0, Validators.required],
      status: [0, Validators.required]
    });
    this.enrollments.push(enrollmentGroup);
  }

  removeEnrollment(index: number): void {
    this.enrollments.removeAt(index);
  }

  onSubmit(): void {
    if (this.batchForm.valid) {
      const batch: Batch = this.batchForm.value;
      console.log(batch);
      // Add your logic to save the batch (create or update)
      if (batch.id === 0) {
        this.createBatch(batch);
      } else {
        this.updateBatch(batch); // Ensure this method exists
      }
    }
  }

  createBatch(batch: Batch): void {
    batch.id = this.batches.length + 1; // Simple ID generation logic
    this.batches.push(batch);
    this.resetForm();
    console.log('Batch created:', batch);
  }

  updateBatch(batch: Batch): void {
    const index = this.batches.findIndex(b => b.id === batch.id);
    if (index !== -1) {
      this.batches[index] = batch;
      console.log('Batch updated:', batch);
      this.resetForm();
    }
  }

  editBatch(batch: Batch): void {
    this.batchForm.patchValue(batch);
    this.enrollments.clear();
    batch.enrollments.forEach(enrollment =>
      this.enrollments.push(this.fb.group(enrollment))
    );
  }

  deleteBatch(batch: Batch): void {
    const index = this.batches.indexOf(batch);
    if (index !== -1) {
      this.batches.splice(index, 1);
      this.resetForm();
      console.log('Batch deleted:', batch);
    }
  }

  resetForm(): void {
    this.batchForm.reset({
      id: 0,
      batchName: '',
      courseId: 0,
      batchTutor: '',
      enrollments: this.fb.array([])
    });
  }

  loadBatchForEdit(batchId: number): void {
    const batch = this.batches.find(b => b.id === batchId);
    if (batch) {
      this.editBatch(batch);
    }
  }
}