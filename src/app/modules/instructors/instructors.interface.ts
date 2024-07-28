export type TInstructors = {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  bio?: string;
  profilePicture?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  specializations?: string[];
};
