import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch, BatchEnrollment } from '../models/batch.model';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private apiUrl = 'http://localhost:5020/api/Batch';

  constructor(private http: HttpClient) { }

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.apiUrl);
  }

  updateEnrollmentStatus(batch: Batch): Observable<any> {
    const url = `${this.apiUrl}/${batch.id}`; // Assuming your API expects batch ID in the URL for updating
    return this.http.put<any>(url, batch);
  }
}
