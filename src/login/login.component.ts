import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe(response => {
      const token = response.token; // Adjust based on your backend response structure
      localStorage.setItem('token', token);

      const decodedToken = this.authService.decodeToken(token);
      console.log('Decoded Token:', decodedToken);

      this.errorMessage = null; // Clear any previous error messages

      // Navigate based on the role
      const userRole = decodedToken['role']; // Adjust based on your token structure
      if (userRole === 'Manager') {
        this.router.navigate(['/manager-dashboard']); // Adjust the route as needed
      } else if (userRole === 'Administrator') {
        this.router.navigate(['/admin-dashboard']); // Adjust the route as needed
      } else if (userRole === 'Employee') {
        this.router.navigate(['/employee-dashboard']); // Adjust the route as needed
      } else {
        console.error('Unknown role:', userRole);
        this.errorMessage = 'Unknown role. Please contact support.';
      }
    }, error => {
      console.error('Login failed', error);
      this.errorMessage = 'Login failed. Please check your credentials and try again.';
    });
  }
}
