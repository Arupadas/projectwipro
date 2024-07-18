// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model' // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5062/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/User`, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/User/${user.userID}`, user, this.httpOptions);
  }

  deleteUser(userID: number|null| undefined ): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/User/${userID}`, this.httpOptions);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/User`, this.httpOptions);
  }

  getUser(userID: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/User/${userID}`, this.httpOptions);
  }
}
