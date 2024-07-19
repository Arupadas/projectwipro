import { Component, OnInit } from '@angular/core';
import { BatchService } from '../services/batch.service';
import { Batch, BatchEnrollment, EnrollmentStatus } from '../models/batch.model'; // Ensure EnrollmentStatus is imported
import { Router } from '@angular/router';

@Component({
    selector: 'app-batches',
    templateUrl: './batches.component.html',
    styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
    batches: Batch[] = [];
    expandedBatchIds: number[] = [];
    searchQuery: string = '';

    constructor(private batchService: BatchService, private router: Router) {}

    ngOnInit(): void {
        this.fetchBatches();
    }

    fetchBatches(): void {
        this.batchService.getBatches().subscribe(
            (data: Batch[]) => {
                this.batches = data;
            },
            error => {
                console.error('Error fetching batches', error);
            }
        );
    }

    toggleExpand(batchId: number): void {
        const index = this.expandedBatchIds.indexOf(batchId);
        if (index === -1) {
            this.expandedBatchIds.push(batchId);
        } else {
            this.expandedBatchIds.splice(index, 1);
        }
    }

    getStatusIcon(status:any): string {
      if(status==0 || status=="Pending"){
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

    getStatusIconClass(status: EnrollmentStatus): string {
        switch (status) {
            case EnrollmentStatus.Pending:
                return 'text-warning';
            case EnrollmentStatus.Rejected:
                return 'text-danger';
            case EnrollmentStatus.Accepted:
                return 'text-success';
            case EnrollmentStatus.Enrolled:
                return 'text-primary';
            default:
                return 'text-muted';
        }
    }

    filteredBatches(): Batch[] {
        if (!this.searchQuery) {
            return this.batches;
        }
        const lowerCaseQuery = this.searchQuery.toLowerCase();
        return this.batches.filter(batch =>
            batch.batchName.toLowerCase().includes(lowerCaseQuery) ||
            batch.batchTutor.toLowerCase().includes(lowerCaseQuery)
        );
    }

    goBack(): void {
        this.router.navigate(['manager-dashboard']);
    }
}
