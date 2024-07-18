// src/app/components/course/course.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/courseview.service'
import { Course  ,CourseCalendar , DailyTask } from '../Models/courseview.model';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-course',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  batches: any[] = [];
  selectedCalendar: { [courseId: number]: CourseCalendar } = {};
  openCourseId: number | null = null;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin , interactionPlugin],
    initialView: 'dayGridMonth',
    events: [] ,
  };

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      }
    });
    this.loadEnrollments();
  }

  onCalendarChange(courseId: number, calendarId: number): void {
    const selectedCalendar = this.courses.find(course => course.id === courseId)?.courseCalendars.find(calendar => calendar.id === calendarId);
    if (selectedCalendar) {
      this.selectedCalendar[courseId] = selectedCalendar;
      this.updateCalendarOptions(selectedCalendar.dailyTasks);
      this.openCourseId = courseId;
    }
  }

  closeCalendar(): void {
    this.openCourseId = null; // Close the calendar
  }


  updateCalendarOptions(dailyTasks: DailyTask[]): void {
    this.calendarOptions = {
      ...this.calendarOptions,
      events: dailyTasks.map(task => ({
        title: '',  // Empty title, description handled in extendedProps
        start: task.day,
        extendedProps: {
          description: task.taskDescription  // Store description in extendedProps
        }
      })),
      eventContent: (arg) => {
        return { html: `<div class="task-dot" title="${arg.event.extendedProps['description']}"></div>` };
      },
      eventMouseEnter: (mouseEnterInfo) => {
        // Optional: Add additional hover effects if needed
      },
      eventMouseLeave: (mouseLeaveInfo) => {
        // Optional: Add additional hover effects if needed
      }
    };
  }
  
  
  loadEnrollments(): void {
    this.courseService.getBatches().subscribe((data: any[]) => {
      this.batches = data;
    });
  }

  renderEventContent(eventInfo: any) {
    return {
      html: `<div class="custom-event-content" title="${eventInfo.event.title}"></div>`
    };
  }
}
