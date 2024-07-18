// user-management.component.ts

import { Component, OnInit } from '@angular/core';
import { User, UserRole } from  '../Models/user.model';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  newUser: User = {
    username: '',
    passwordHash: '',
    email: '',
    createdAt: new Date(),
    role: UserRole.Employee
  };
  userList: User[] = [];
  UserRole = UserRole; // Expose UserRole to the template

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.userList = users;
      },
      error: (error) => console.error('Error loading users:', error)
    });
  }

  createUser() {
    this.userService.createUser(this.newUser).subscribe({
      next: (createdUser) => {
        console.log('User created:', createdUser);
        this.userList.push(createdUser);
        this.clearForm();
      },
      error: (error) => console.error('Error creating user:', error)
    });
  }

  editUser(user: User) {
    this.newUser = { ...user };
  }

  updateUser() {
    this.userService.updateUser(this.newUser).subscribe({
      next: (updatedUser) => {
        console.log('User updated:', updatedUser);
        this.loadUsers();
        this.clearForm();
      },
      error: (error) => console.error('Error updating user:', error)
    });
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.userID).subscribe({
      next: () => {
        console.log('User deleted');
        this.loadUsers();
      },
      error: (error) => console.error('Error deleting user:', error)
    });
  }

  clearForm() {
    this.newUser = {
      userID: 0,
      username: '',
      passwordHash: '',
      email: '',
      createdAt: new Date(),
      role: UserRole.Employee
    };
  }
}
