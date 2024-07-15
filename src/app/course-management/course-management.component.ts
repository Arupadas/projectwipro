import { Component } from '@angular/core';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent {
  courses: any[] = [];
  courseForm: any = {};
  calendarForm: any = {};

  addCourse(): void {
    this.courses.push(this.courseForm);
    this.courseForm = {};
  }

  updateCourse(course: any): void {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses[index] = course;
    }
  }

  deleteCourse(course: any): void {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

  createCalendar(course: any): void {
    course.calendar = {};
  }

  editCalendar(course: any): void {
    // Update calendar logic here
  }

  deleteCalendar(course: any): void {
    delete course.calendar;
  }
}