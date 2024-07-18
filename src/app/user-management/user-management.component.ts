import { Component, OnInit } from '@angular/core';
import { User, UserRole } from '../Models/user.model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  showAddUserForm = false;
  showUserList = true;
  selectedUser: User | null = null;

  newUser: User = this.getDefaultUser();
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
    this.showUserList = !this.showAddUserForm;
    this.selectedUser = null;
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
    this.selectedUser = { ...user };
    this.showAddUserForm = false;
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
    this.newUser = this.getDefaultUser();
    this.selectedUser = null;
    this.showAddUserForm = false;
    this.showUserList = true;
  }

  updateUser() {
    if (this.selectedUser && this.selectedUser.userID) {
      this.userService.updateUser(this.selectedUser).subscribe({
        next: (updatedUser) => {
          console.log('User updated:', updatedUser);
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

  private getDefaultUser(): User {
    return {
      userID: 0,
      username: '',
      passwordHash: '',
      email: '',
      createdAt: new Date(),
      role: UserRole.Employee
    };
  }
}