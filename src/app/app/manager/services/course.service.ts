import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/CalenderEvent.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      courseName: 'Introduction to Angular',
      courseDescription: 'A comprehensive course on Angular framework.',
      duration: 40,
      courseCalendar: {
        id: 1,
        courseId: 1,
        startDate: new Date('2024-07-01'),
        endDate: new Date('2024-07-31'),
        dailyTasks: [
          { id: 1, day: '2024-07-01', taskDescription: 'Introduction lecture', courseCalendarId: 1 },
          { id: 2, day: '2024-07-02', taskDescription: 'Setup environment', courseCalendarId: 1 },
          { id: 3, day: '2024-07-03', taskDescription: 'First assignment due', courseCalendarId: 1 }
        ]
      }
    },
    // Add more courses if needed
  ];


  getCourses1(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseDetails(courseId: number): Observable<any> {
    const course = this.courses.find(c => c.id === courseId);
    return of(course ? course.courseCalendar : {});
  }

  private apiUrl = 'http://localhost:5074/api/Course';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
 }
 


  // Method to get batch by ID
  getBatchById(id: number): Observable<Course> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Course>(url);
  }
}
