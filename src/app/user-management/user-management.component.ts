// user-management.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  newUser: any = {};
  userList: any[] = [
    { username: 'John Doe', email: 'john.doe@example.com', role: 'admin' },
    { username: 'Jane Doe', email: 'jane.doe@example.com', role: 'user' }
  ];

  createUser() {
    // Implement your logic to create a new user
    console.log('Creating user:', this.newUser);
    this.userList.push({ ...this.newUser });
    this.clearForm();
  }

  editUser(user: any) {
    // Implement your logic to edit a user
    console.log('Editing user:', user);
    // Example: populate form fields for editing
    this.newUser = { ...user };
  }

  deleteUser(user: any) {
    // Implement your logic to delete a user
    console.log('Deleting user:', user);
    const index = this.userList.indexOf(user);
    if (index !== -1) {
      this.userList.splice(index, 1);
    }
  }

  clearForm() {
    // Clear form fields after submission
    this.newUser = {};
  }
}
