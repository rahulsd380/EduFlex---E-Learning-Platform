
export enum UserRole {
    Admin = "admin",
    Student = "student",
    Manager = "manager"
  }

export type TUser = {
  name: {
    first_name: string;
    last_name: string;
  };
  email: string;
  password : string;
  job_title: string;
  address: string;
  phone_number: string;
  skills: string[];
  objective: string;
  social_links: string[];
  role: UserRole;
};
