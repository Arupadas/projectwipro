import { Component, OnInit } from '@angular/core';
import { Batch, BatchEnrollment } from '../models/batch.model';
import { Router } from '@angular/router';
import { BatchService } from '../services/batch.service';

@Component({
  selector: 'app-participant-request',
  templateUrl: './participant-request.component.html',
  styleUrl: './participant-request.component.css'
})
export class ParticipantRequestComponent implements OnInit{

  batches:Batch[]=[];
  expandedBatchId:number | null=null;
  /*requests = [
    { name: 'Participant 1'},
    { name: 'Participant 2'},
    { name: 'Participant 3'}
  ];*/
  constructor(private batchServices:BatchService,private router:Router) { }
  ngOnInit(): void {
    
    this.fetchBatches();
}

fetchBatches():void{
  this.batchServices.getBatches().subscribe(
    (data:Batch[])=>{
      this.batches=data;
    },
   error=>{
    console.error('Error fetching batches',error);
          }
     );
   }

  handleRequest(batch:Batch,enrollment:BatchEnrollment,action:string): void{
    batch.enrollments=batch.enrollments.filter(e=>e.status===0);
    this.updateStatus(batch.id,enrollment.status,action);
  }
  updateStatus(Id:number,enrollmentStatus:any,newStatus:string): void {
    const batch=this.batches.find(b=>b.id===Id);
    if(batch){
      const enrollment=batch.enrollments.find(e=>e.status===enrollmentStatus);
      if(enrollment){
        if(newStatus='accept'){
          enrollment.status=2;
        }else{
          enrollment.status=1;
        }
    
      }
    }
  }
}
