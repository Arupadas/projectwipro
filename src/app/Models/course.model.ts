// models/course.model.ts

export interface Course {
    courseName: string;
    courseDescription: string;
    duration: number;
  }

  
export interface CourseWithId {
    Id: number;
    courseName: string;
    courseDescription: string;
    duration: number;
  }
  