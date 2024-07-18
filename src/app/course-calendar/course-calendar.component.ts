import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from '../Models/courseview.model'; // Ensure CalendarEvent interface includes color and textColor properties
import { MbscEventcalendarView } from '@mobiscroll/angular';

@Component({
  selector: 'app-course-calendar',
  templateUrl: './course-calendar.component.html',
  styleUrls: ['./course-calendar.component.css']
})
export class CourseCalendarComponent implements OnInit {
  courseCalendars = [
    {
      id: 7,
      courseId: 7,
      batchName: 'Batch-1',
      startDate: '2024-07-01T00:00:00',
      endTime: '2024-07-30T23:59:59',
      dailyTasks: [
        { id: 8, day: '2024-07-17', taskDescription: 'Complete the course introduction module.', courseCalendarId: 7 },
        { id: 9, day: '2024-07-17', taskDescription: 'Review the syllabus and course outline.', courseCalendarId: 7 },
        { id: 10, day: '2024-07-17', taskDescription: 'Participate in the first group discussion.', courseCalendarId: 7 },
        { id: 11, day: '2024-07-17', taskDescription: 'Complete the readings for week 1', courseCalendarId: 7 }
      ]
    }
  ];

  calendarEvents: CalendarEvent[] = [];
  view: MbscEventcalendarView = {
    calendar: { type: 'month' },
    agenda: { type: 'day' }
  };

  ngOnInit() {
    this.populateCalendarEvents();
  }

  populateCalendarEvents() {
    this.courseCalendars.forEach(calendar => {
      calendar.dailyTasks.forEach(task => {
        this.calendarEvents.push({
          id: task.id,
          start: new Date(task.day),
          end: new Date(task.day),
          title: task.taskDescription,
          color: '#ffcc00', // Example color
          textColor: '#000000' // Example text color
        });
      });
    });
  }

  getDayKey(day: any): number {
    return day.timestamp;
  }

  getEventKey(event: any): number {
    return event.id;
  }
}
