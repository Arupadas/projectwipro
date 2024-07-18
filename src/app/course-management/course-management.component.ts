import { Component } from '@angular/core';
import { CourseService } from '../Services/course.service';
//import { Course } from '../Models/courseview.model';
import { Course  , CourseWithId , CourseCalendar , CourseCalendarUpdate} from '../Models/course.model';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent {
  courses: Course[] = []; 
  ngOnInit() {
    
    this.loadCourses();
  }

  //   {
  //     Id: 1,
  //     courseName: 'Java',
  //     courseDescription: 'Learn Java from basics to advanced.',
  //     duration: 40,
  //     CourseCalendar: []
  //   },
  //   {
  //     id: 2,
  //     courseName: 'Python',
  //     courseDescription: 'Comprehensive Python programming course.',
  //     duration: 30,
  //     courseCalendars: []
  //   },
  //   {
  //     id: 3,
  //     courseName: 'Angular',
  //     courseDescription: 'Master Angular framework and build modern web apps.',
  //     duration: 50,
  //     courseCalendars: []
  //   }
  // ];


  showAddCourseForm = true;
  showUpdateCourseForm = false;
  showAddCourseCalendarForm = false;
  showUpdateCourseCalendarForm = false;
  showEditCourseForm = false;
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
  coursecalendar={
    courseId: 0 ,
    startDate: new Date ,
    endDate: new Date
  }
  courseCalendarUpdate={
    Id:0,
    courseId: 0 ,
    startDate: new Date ,
    endDate: new Date
  }

  toggleAddCourseForm() {
    this.showAddCourseForm = !this.showAddCourseForm;
    this.showUpdateCourseForm = false ;
  }
  toggleUpdateCourseForm() {
    this.showUpdateCourseForm = !this.showUpdateCourseForm;
    this.showAddCourseForm  = false ;
  }
  toggleAddCourseCalendarForm() {
    this.showAddCourseCalendarForm  = !this.showAddCourseCalendarForm ;
  }
  toggleUpdateCourseCalendarForm() {
    this.showUpdateCourseCalendarForm = !this.showUpdateCourseCalendarForm;
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
  addCourseCalendar() {
    this.courseService.addCourseCalendar(this.coursecalendar).subscribe(
      response => {
        this.showAddCourseCalendarForm = !this.showAddCourseCalendarForm;
        console.log('Course added successfully:', response);
        // Optionally reset form or handle success
      },
      error => {
        console.error('Error adding course:', error);
        // Handle error appropriately
      }
    );
  }

  editCourse(course: CourseWithId) {
    this.courseUpdate = {
      Id: course.Id!,
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      duration: course.duration
    };
    this.showEditCourseForm = true;
    this.showUpdateCourseForm = false;
    this.showAddCourseForm = false;
  }

  cancelEdit() {
    this.showEditCourseForm = false;
    this.showUpdateCourseForm = true;
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

  updateCourseCalendar() {
    this.courseService.updateCourseCalendar(this.courseCalendarUpdate).subscribe(
      response => {
        console.log('Course updated successfully:', response);
        this.showUpdateCourseCalendarForm = !this.showUpdateCourseCalendarForm;
 // Optionally refresh data or close form after success
      },
      error => {
        console.error('Error updating course:', error);
        // Handle error appropriately
      }
    );
  }
  loadCourses() {
    this.courseService.getCourses().subscribe(
      (courses) => {
        this.courses = courses;
      },
      (error) => {
        console.error('Error loading courses:', error);
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
