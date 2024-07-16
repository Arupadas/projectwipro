import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
constructor(private router: Router) {}

navigateTo(option: string): void {
  if (option === 'batches') {
    this.router.navigate(['/manager/batches']);
  } else if (option === 'participant-requests'){
    this.router.navigate(['/manager/participant-requests']);
  }
}
}
