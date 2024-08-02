import { Model } from "mongoose";
import { USER_ROLE } from "./user.constants";

export enum UserRole {
    Admin = "admin",
    Student = "student",
    Manager = "manager",
    Instructor = 'instructor',
    Ceo = "ceo"
  }

export interface TUser {
  name: string;
  email: string;
  password : string;
  job_title: string;
  address: string;
  phone_number?: string | null;
  skills: string[];
  objective: string;
  social_links: string[];
  role: UserRole;
  passwordChangedAt?: Date;
};

export interface UserModel extends Model<TUser>{
  isUserExistsByEmail(email : string) : Promise<TUser>;
  isPasswordMatched(plainTextPassword : string, hashedPassword : string) : Promise<boolean>;
  isJWtIssuedBeforePasswordChanged(passwordChangedTimestamp : Date, jwtIssuedTimestamp: number) : boolean;
};

export type TUserRole = keyof typeof USER_ROLE;
