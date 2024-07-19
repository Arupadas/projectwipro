import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCalenderManagerComponent } from './course-calender.component';

describe('CourseCalenderComponent', () => {
  let component: CourseCalenderManagerComponent;
  let fixture: ComponentFixture<CourseCalenderManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCalenderManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCalenderManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
