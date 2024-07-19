import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

import { MbscEventcalendarView } from '@mobiscroll/angular';
import { CalendarEvent,Course } from '../../../Models/courseview.model';

@Component({
  selector: 'app-course-calender',
  templateUrl: './course-calender.component.html',
  styleUrls: ['./course-calender.component.css']
})
export class CourseCalenderManagerComponent implements OnInit {

  course:Course|undefined;
  batchName: string = '';
  courseName: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  calendarEvents: CalendarEvent[] = [];
  view: MbscEventcalendarView = {
    calendar: { type: 'month' },
    agenda: { type: 'day' }
  };

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.courseService.getCourseDetails(courseId).subscribe(courseCalendar => {
      if (courseCalendar) {
        this.batchName = courseCalendar.batchName;
        this.startDate = new Date(courseCalendar.startDate);
        this.endDate = new Date(courseCalendar.endDate);
        this.populateCalendarEvents(courseCalendar.dailyTasks);
      }
    });

    this.courseService.getBatchById(courseId).subscribe(cousec => {
      if (cousec) {
        // Assuming you want to use batch details in your component
        // Implement any logic needed with batch details here
        this.courseName=cousec.courseName;

      }
    });
  }

  
  populateCalendarEvents(dailyTasks: any[]) {
    this.calendarEvents = dailyTasks.map(task => ({
      id: task.id,
      start: new Date(task.day),
      end: new Date(task.day),
      title: task.taskDescription,
      color: '#ffcc00', // Example color
      textColor: '#000000' // Example text color
    }));
  }

  goBack() {
    this.router.navigate(['courselist']); // Adjust the route as needed
  }

  getDayKey(day: any): number {
    return day.timestamp; // Assuming each day has a unique timestamp
  }

  getEventKey(event: any): number {
    return event.id; // Assuming each event has a unique ID
  }

  // Add these methods to your existing component
isStartDate(date: string): boolean {
  return new Date(date).toDateString() === this.startDate.toDateString();
}

isEndDate(date: string): boolean {
  return new Date(date).toDateString() === this.endDate.toDateString();
}

}
