import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getRole();
      if (role === 'Administrator') {
        this.router.navigate(['/admin']);
      } else if (role === 'Manager') {
        this.router.navigate(['/manager']);
      } else if (role === 'Employee') {
        this.router.navigate(['/employee']);
      } else {
        this.errorMessage = 'Invalid role';
      }
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
