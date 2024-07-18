// src/app/models/course.model.ts
export interface DailyTask {
    id: number;
    day: string;
    taskDescription: string;
    courseCalendarId: number;
  }
  
  export interface CourseCalendar {
    id: number;
    batchName:string ,
    courseId: number;
    startDate: string;
    endTime: string;
    dailyTasks: DailyTask[];
  }
  
  export interface Course {
    id: number;
    courseName: string;
    courseDescription: string;
    duration: number;
    courseCalendars: CourseCalendar[];
  }

  export interface CalendarEvent {
    id: number;
    start: Date;
    end: Date;
    title: string;
    color?: string;
    textColor?: string;
  }
  
  