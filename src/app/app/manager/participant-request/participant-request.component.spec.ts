import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantRequestComponent } from './participant-request.component';

describe('ParticipantRequestComponent', () => {
  let component: ParticipantRequestComponent;
  let fixture: ComponentFixture<ParticipantRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipantRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
