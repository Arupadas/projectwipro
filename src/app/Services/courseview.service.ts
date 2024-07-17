// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from   '../Models/courseview.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
    private apiUrl = 'http://localhost:5020/api';
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    const courses: Course[] = [
            {
              "id": 4,
              "courseName": "Java",
              "courseDescription": "A beginner guide",
              "duration": 28,
              "courseCalendars": [
                {
                  "id": 5,
                  "courseId": 4,
                  "startDate": "2024-07-16T19:03:59.875",
                  "endTime": "2024-07-16T19:03:59.875",
                  "dailyTasks": [
                    {
                      "id": 5,
                      "day": "2024-07-16",
                      "taskDescription": "Day 1",
                      "courseCalendarId": 5
                    },
                    {
                      "id": 6,
                      "day": "2024-07-17",
                      "taskDescription": "Day 2",
                      "courseCalendarId": 5
                    },
                    {
                      "id": 7,
                      "day": "2024-07-18",
                      "taskDescription": "Day 3",
                      "courseCalendarId": 5
                    }
                  ]
                },
                {
                  "id": 6,
                  "courseId": 4,
                  "startDate": "2024-08-16T19:03:59.875",
                  "endTime": "2024-09-16T19:03:59.875",
                  "dailyTasks": []
                }
              ]
            },
            {
              "id": 5,
              "courseName": "Python",
              "courseDescription": "Intermediate level course",
              "duration": 40,
              "courseCalendars": [
                {
                  "id": 7,
                  "courseId": 5,
                  "startDate": "2024-09-01T19:03:59.875",
                  "endTime": "2024-10-01T19:03:59.875",
                  "dailyTasks": [
                    {
                      "id": 8,
                      "day": "2024-09-01",
                      "taskDescription": "Introduction",
                      "courseCalendarId": 7
                    }
                  ]
                }
              ]
            },
            {
              "id": 6,
              "courseName": "JavaScript",
              "courseDescription": "Advanced JavaScript",
              "duration": 35,
              "courseCalendars": [
                {
                  "id": 8,
                  "courseId": 6,
                  "startDate": "2024-10-05T19:03:59.875",
                  "endTime": "2024-11-05T19:03:59.875",
                  "dailyTasks": [
                    {
                      "id": 9,
                      "day": "2024-10-05",
                      "taskDescription": "Setup and Environment",
                      "courseCalendarId": 8
                    }
                  ]
                }
              ]
            }
          
    ];
    return of(courses);
  }

  getBatches() {
    return of([
      {
        id: 2,
        batchName: "Batch 101",
        courseId: 2,
        batchTutor: "John Doe",
        enrollments: [
          { id: 1, batchId: 2, employeeId: 123, status: "Enrolled" },
          { id: 2, batchId: 2, employeeId: 124, status: "Pending" },
          { id: 3, batchId: 2, employeeId: 3, status: "Pending" }
        ]
      }
    ]);
  }
}
