// src/app/models/course.model.ts
export interface DailyTask {
    id: number;
    day: string;
    taskDescription: string;
    courseCalendarId: number;
  }
  
  export interface CourseCalendar {
    id: number;
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
  