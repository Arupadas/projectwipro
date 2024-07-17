import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course  , CourseWithId , CourseCalendar , CourseCalendarUpdate} from '../Models/course.model'; // Ensure you have a Course model defined

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:5074'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  addCourse(course: Course): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/Course`, course);
  }

  updateCourse(course: CourseWithId): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/Course/${course.Id}`, course);
  }

  addCourseCalendar(courseCalendar: CourseCalendar): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/CourseCalendar`, courseCalendar);
  }

  updateCourseCalendar(courseCalendar: CourseCalendarUpdate): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/CourseCalendar/${courseCalendar.Id}`, courseCalendar);
  }


  

  // Add more methods as needed (editCourse, deleteCourse, etc.)
}