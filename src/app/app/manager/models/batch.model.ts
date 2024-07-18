export interface Enrollments{
    id:number;
    batchId:number;
    employeeId:number;
    status:any;
}
export interface Batch{
    id:number;
    batchName:string;
    courseId:number;
    batchTutor: string;
    enrollments:Enrollments[];
  }