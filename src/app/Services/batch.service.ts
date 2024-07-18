import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch, BatchEnrollment } from '../Models/batchmanagement.model';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private apiUrl = 'http://localhost:5020/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  createBatch(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(`${this.apiUrl}/api/Batch`, batch, this.httpOptions());
  }

  updateBatch(id: number, batch: Batch): Observable<Batch> {
    return this.http.put<Batch>(`${this.apiUrl}/Batch/${id}`, batch, this.httpOptions());
  }

  deleteBatch(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Batch/${id}`, this.httpOptions());
  }

  getBatches(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Batch`);
  }

  

  enrollEmployee(enrollment: BatchEnrollment): Observable<BatchEnrollment> {
    return this.http.post<BatchEnrollment>(`${this.apiUrl}/BatchEnrollment`, enrollment, this.httpOptions());
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
