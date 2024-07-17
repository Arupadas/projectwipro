import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectwi';
  courseData = {
    id: 1,
    courseName: 'faiez',
    courseDescription: 'koko',
    duration: 5,
    courseCalendars: [
      {
        id: 1,
        courseId: 1,
        startDate: '2024-07-14T00:00:00',
        endTime: '2024-08-14T00:00:00',
        dailyTasks: [
          {
            id: 1,
            day: '2024-07-15',
            taskDescription: 'Task1 1',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-16',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-17',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-18',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-19',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-19',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-20',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-21',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-22',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-23',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-24',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-25',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-26',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-27',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          {
            id: 2,
            day: '2024-08-28',
            taskDescription: 'Task 2',
            courseCalendarId: 1
          },
          
        ]
      }
    ]
  };
}
