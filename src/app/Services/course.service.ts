import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, CourseWithId, CourseCalendar, CourseCalendarUpdate } from '../Models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:5074'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/api/Course`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/api/Course/${id}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/api/Course`, course);
  }

  updateCourse(course: CourseWithId): Observable<CourseWithId> {
    return this.http.put<CourseWithId>(`${this.apiUrl}/api/Course/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/Course/${id}`);
  }

  addCourseCalendar(courseCalendar: CourseCalendar): Observable<CourseCalendar> {
    return this.http.post<CourseCalendar>(`${this.apiUrl}/api/CourseCalendar`, courseCalendar);
  }

  updateCourseCalendar(courseCalendar: CourseCalendarUpdate): Observable<CourseCalendar> {
    return this.http.put<CourseCalendar>(`${this.apiUrl}/api/CourseCalendar/${courseCalendar.Id}`, courseCalendar);
  }

  deleteCourseCalendar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/CourseCalendar/${id}`);
  }
}