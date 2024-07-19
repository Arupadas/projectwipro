import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/CalenderEvent.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Output() courseSelected = new EventEmitter<Course>();
  courses: Course[] = [];
  loading = true;

  constructor(private courseService: CourseService,private router:Router) { }

  

  ngOnInit() {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch courses', err);
        this.loading = false;
      }
    });
  }

  selectCourse(course: Course) {
    this.router.navigate(['courseManager', course.id]);
  }
}
