// models.ts
export interface Course {
    id: number;
    courseName: string;
    courseDescription: string;
    duration: number; // Duration in hours or another unit
    courseCalendar: CourseCalendar;
  }
  
  export interface CourseCalendar {
    id: number;
    courseId: number;
    startDate: Date;
    endDate: Date;
    dailyTasks?: DailyTask[];
  }
  
  export interface DailyTask {
    id: number;
    day: string; // Format as YYYY-MM-DD
    taskDescription?: string; // Nullable: true
    courseCalendarId: number;
  }
  
  export interface CalendarEvent {
    courseName: string;
    duration: number;
    courseDescription: string;
    startDate: Date;
    endDate: Date;
    dailyTasks?: DailyTask[];
  }
  