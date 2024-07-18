// user-management.component.ts

import { Component, OnInit } from '@angular/core';
import { User, UserRole } from '../Models/user.model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  showAddUserForm = true;
  showEditUserForm = false;
  newUser: User = {
    userID: 0, // Initialize with a default number
    username: '',
    passwordHash: '',
    email: '',
    createdAt: new Date(),
    role: UserRole.Employee
  };

  userUpdate: User = {
    userID: 0, // Initialize with a default number
    username: '',
    passwordHash: '',
    email: '',
    createdAt: new Date(),
    role: UserRole.Employee
  };
  userList: User[] = [];
  UserRole = UserRole;

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

  toggleAddUserForm() {
    this.showAddUserForm = !this.showAddUserForm;
    this.showEditUserForm = false;
  }

  toggleEditUserForm() {
    this.showEditUserForm = !this.showEditUserForm;
    this.showAddUserForm = false;
  }

  createUser() {
    this.userService.createUser(this.newUser).subscribe({
      next: (createdUser) => {
        console.log('User created:', createdUser);
        this.userList.push(createdUser);
        this.resetUserForm();
      },
      error: (error) => console.error('Error creating user:', error)
    });
  }

  editUser(user: User) {
    this.userUpdate = { ...user };
    this.toggleEditUserForm();
  }

  deleteUser(userID: number) {
    if (userID != null && userID !== undefined) {
      this.userService.deleteUser(userID).subscribe({
        next: () => {
          console.log('User deleted');
          this.loadUsers();
        },
        error: (error) => console.error('Error deleting user:', error)
      });
    } else {
      console.error('Invalid userID');
    }
  }

  resetUserForm() {
    this.newUser = {
      userID: 0, // Initialize with a default number
      username: '',
      passwordHash: '',
      email: '',
      createdAt: new Date(),
      role: UserRole.Employee
    };
    this.userUpdate = {
      userID: 0, // Initialize with a default number
      username: '',
      passwordHash: '',
      email: '',
      createdAt: new Date(),
      role: UserRole.Employee
    };
    this.showAddUserForm = true;
    this.showEditUserForm = false;
  }
  updateUser() {
    if (this.userUpdate.userID) {
      this.userService.updateUser(this.userUpdate).subscribe({
        next: (updatedUser) => {
          console.log('User updated:', updatedUser);
          // Update the user in the userList
          const index = this.userList.findIndex(user => user.userID === updatedUser.userID);
          if (index !== -1) {
            this.userList[index] = updatedUser;
          }
          this.resetUserForm();
        },
        error: (error) => console.error('Error updating user:', error)
      });
    } else {
      console.error('UserID is required for update');
    }
  }
  cancelEdit() {
    this.resetUserForm();
  }
}
