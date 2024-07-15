import { Component } from '@angular/core';

interface DailyTask {
  id: number;
  day: string;
  taskDescription: string;
  courseCalendarId: number;
}

interface CourseCalendar {
  id: number;
  courseId: number;
  startDate: string;
  endTime: string;
  dailyTasks: DailyTask[];
}

interface Course {
  courseName: string;
  courseDescription: string;
  duration: number;
  courseCalendar: CourseCalendar;
}

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css'],
})
export class CourseManagementComponent {
  showForm: boolean = false;

  course: Course = {
    courseName: '',
    courseDescription: '',
    duration: 0,
    courseCalendar: {
      id: 0,
      courseId: 0,
      startDate: '',
      endTime: '',
      dailyTasks: [
        {
          id: 0,
          day: '',
          taskDescription: '',
          courseCalendarId: 0,
        },
      ],
    },
  };

  addTask() {
    this.course.courseCalendar.dailyTasks.push({
      id: 0,
      day: '',
      taskDescription: '',
      courseCalendarId: 0,
    });
  }

  removeTask(index: number) {
    this.course.courseCalendar.dailyTasks.splice(index, 1);
  }

  onSubmit() {
    console.log('Course created:', this.course);
    // Add your form submission logic here
  }
}