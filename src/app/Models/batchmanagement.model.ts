export interface Batch {
    id?: number;
    batchName: string;
    coursecalendarId : number | null;
    batchTutor: string;
    enrollments?: BatchEnrollment[];
  }
  
  export interface BatchEnrollment {
    id?: number;
    batchId: number;
    employeeId: number;
    status: EnrollmentStatus;
  }
  
  export enum EnrollmentStatus {
    Pending = 'Pending',
    Rejected = 'Rejected',
    Enrolled = 'Enrolled',
    Accepted = 'Accepted'
  }
  