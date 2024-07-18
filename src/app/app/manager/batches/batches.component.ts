import { Component, OnInit } from '@angular/core';
import { BatchService } from '../services/batch.service';
import { Batch } from '../models/batch.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent implements OnInit {
   batches:Batch[]=[];
   expandedBatchId:number | null=null;
   //batchId!:number ;

   constructor(private batchServices:BatchService,private router:Router) {}
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

   toggleExpand(batchId:number):void{
    this.expandedBatchId=this.expandedBatchId===batchId?null:batchId;
   }

   getStatusIcon(status:any):string{
    /* switch(status){
      case 0:
        return 'hourglass_empty';
      case 1:
        return 'cancel';
      case 2:
        return 'thumb_up'
      case 3:
        return 'check_circle'   
        default:
          return 'help'    
     }*/
       if(status==0 || status=='Pending'){
        return 'hourglass_empty';
       }else if(status==1 || status=='Rejected'){
        return 'cancel'
       }else if(status==2 || status=='Accepted'){
        return 'thumb_up'
       }else if(status==3 || status=='Enrolled'){
        return 'check_circle' 
       }else{
        return 'help' 
       }
   }

   goBack():void{
    this.router.navigate(['manager-dashboard']);
   }
}
