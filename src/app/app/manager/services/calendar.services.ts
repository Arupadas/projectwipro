import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  getBatchData(): Observable<any[]> {
    // Replace with actual API/service call to fetch batch data
    return of([
      { date: '2024-07-19', batchName: 'Batch A', tasks: ['Task 1', 'Task 2'] },
      { date: '2024-07-20', batchName: 'Batch B', tasks: ['Task 3', 'Task 4'] }
      // Add more data as needed
    ]);
  }
}
