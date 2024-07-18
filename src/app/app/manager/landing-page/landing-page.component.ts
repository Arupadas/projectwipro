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
    this.router.navigate(['batches']);
  } else if (option === 'approval'){
    this.router.navigate(['approval']);
  }
  //this.router.navigate(['/manager/{route}']);
}
}
