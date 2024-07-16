import { Component } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course  , CourseWithId} from '../Models/course.model';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent {
  showAddCourseForm = false;
  showUpdateCourseForm = false;
  constructor(private courseService: CourseService) { }
  course = {
    courseName: '',
    courseDescription: '',
    duration: 0
  };
  courseUpdate = {
    Id :0,
    courseName: '',
    courseDescription: '',
    duration: 0
  };

  toggleAddCourseForm() {
    this.showAddCourseForm = !this.showAddCourseForm;
  }
  toggleUpdateCourseForm() {
    this.showUpdateCourseForm = !this.showUpdateCourseForm;
  }

  addCourse() {
    this.courseService.addCourse(this.course).subscribe(
      response => {
        this.showAddCourseForm = !this.showAddCourseForm;
        console.log('Course added successfully:', response);
        // Optionally reset form or handle success
      },
      error => {
        console.error('Error adding course:', error);
        // Handle error appropriately
      }
    );
  }

  updateCourse() {
    this.courseService.updateCourse(this.courseUpdate).subscribe(
      response => {
        console.log('Course updated successfully:', response);
        this.showUpdateCourseForm = !this.showUpdateCourseForm;
 // Optionally refresh data or close form after success
      },
      error => {
        console.error('Error updating course:', error);
        // Handle error appropriately
      }
    );
  }


  resetForm() {
    this.course = {
      courseName: '',
      courseDescription: '',
      duration: 0
    };
  }
}
