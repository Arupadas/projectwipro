// user.model.ts

export interface User {
    userID?: number | null | undefined ;
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
  