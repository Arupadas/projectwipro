// user.model.ts

export interface User {
  userID: number; // Ensure userID is required and of type number
  username: string;
  passwordHash: string;
  email: string;
  createdAt: Date;
  role: UserRole;
}

export enum UserRole {
  Manager = 'Manager',
  Administrator = 'Administrator',
  Employee = 'Employee'
}
