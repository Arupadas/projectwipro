import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private role: string = '';

  login(username: string, password: string): boolean {
    // Logic to authenticate user based on username and password
    // Example logic, replace with actual implementation
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.role = 'Administrator';
    } else if (username === 'manager' && password === 'manager') {
      this.isAuthenticated = true;
      this.role = 'Manager';
    } else if (username === 'employee' && password === 'employee') {
      this.isAuthenticated = true;
      this.role = 'Employee';
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }

  getRole(): string {
    return this.role;
  }
}