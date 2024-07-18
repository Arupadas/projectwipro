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
    private apiUrlCourse = 'http://localhost:5074/api'
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrlCourse}/Course`);
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
