// batch.model.ts (or relevant file)

// Define the EnrollmentStatus enum
export enum EnrollmentStatus {
    Pending = 0,
    Rejected = 1,
    Accepted = 2,
    Enrolled = 3,
}

// Define the BatchEnrollment interface
export interface BatchEnrollment {
    id: number;
    batchId: number;
    employeeId: number;
    status: any; // Using EnrollmentStatus enum here
}

// Define the Batch interface
export interface Batch {
    id: number;
    batchName: string;
    courseId: number;
    batchTutor: string;
    enrollments: BatchEnrollment[]; // Array of BatchEnrollment
}
