import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-request',
  templateUrl: './participant-request.component.html',
  styleUrl: './participant-request.component.css'
})
export class ParticipantRequestComponent implements OnInit{
  requests = [
    { name: 'Participant 1'},
    { name: 'Participant 2'},
    { name: 'Participant 3'}
  ];
  constructor() { }
  ngOnInit(): void {

  }
  acceptRequest(request:any): void{
    console.log('Accepted ${request.name}');
  }
  rejectRequest (request:any): void {
    console.log('Rejected $(request.name}');
  }
}
