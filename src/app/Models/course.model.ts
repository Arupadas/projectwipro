// models/course.model.ts

export interface Course {
    Id?: number;
    courseName: string;
    courseDescription: string;
    duration: number;
    CourseCalendar?:[]
  }

  
export interface CourseWithId {
    id?: number;
    courseName: string;
    courseDescription: string;
    duration: number;
    CourseCalendar?:[]
  }

  export interface CourseCalendar {
    courseId: number;
    startDate: Date;
    endDate: Date;
  }

  export interface CourseCalendarUpdate {
    Id:number ;
    courseId: number;
    startDate: Date;
    endDate: Date;
  }

  export interface CalendarEvent {
    title: string;
    start: string;
    end: string;
    color : string;
    textColor : string ;
  }
  