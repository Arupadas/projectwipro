// course-calendar.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from '../Models/course.model'; // Ensure CalendarEvent interface includes color and textColor properties
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-course-calendar',
  templateUrl: './course-calendar.component.html',
  styleUrls: ['./course-calendar.component.css']
})
export class CourseCalendarComponent implements OnInit {
  @Input() courseData: any;

  calendarOptions: any;

  ngOnInit(): void {
   
  }

  transformCourseDataToEvents(courseData: any): CalendarEvent[] {
    const events: CalendarEvent[] = [];
    courseData.courseCalendars.forEach((calendar: any) => {
      calendar.dailyTasks.forEach((task: any) => {
        // Example condition to set colors
        const isImportant = task.taskDescription.toLowerCase().includes('important');
        events.push({
          title: `${courseData.courseName} - ${task.taskDescription}`,
          start: task.day,
          end: task.day,
          color: isImportant ? 'red' : 'yellow',   // Background color
          textColor: 'black' // Text color
        });
      });
    });
    return events;
  }
}
