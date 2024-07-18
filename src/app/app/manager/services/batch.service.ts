import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from '../models/batch.model';

/*interface Batch{
  id:number;
  batchName:string;
  courseId:number;
  batchTutore: string;
  enrollment:any[];
}*/

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private apiUrl='http://localhost:5020/api/Batch';
  constructor(private http: HttpClient) { }

  getBatches():Observable<Batch[]>{
    return this.http.get<Batch[]>(this.apiUrl);
  }
  putStatus(batch:Batch):Observable<any>{
    return this.http.put<any>(this.apiUrl,batch);
  }
}
