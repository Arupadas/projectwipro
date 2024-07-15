import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'Admin Dashboard';

  constructor() { }

  ngOnInit(): void {
  }

  // Add admin functionality here, such as:
  // - Managing users
  // - Viewing analytics
  // - Configuring settings
}
