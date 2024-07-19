import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  navigateTo(option: string): void {
    switch (option) {
      case 'batches':
        this.router.navigate(['/batches']);
        break;
      case 'approval':
        this.router.navigate(['/approval']);
        break;
      case 'calendar':
        this.router.navigate(['/calendar']);
        break;
        case 'courselist':
          this.router.navigate(['courselist']);
          break;
      default:
        // Handle default case or add additional routes as needed
        break;
    }
  }
}
