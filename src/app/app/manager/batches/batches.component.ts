import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent implements OnInit {
   batches = [
    { name: 'Batch 1'},
    { name: 'Batch 2'},
    { name: 'Batch 3'}
   ];

   constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
