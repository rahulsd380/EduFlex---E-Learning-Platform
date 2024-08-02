import { TUser, UserRole } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
  const {name, email, password, job_title, address, phone_number, skills, objective, social_links, role} = payload;
  
  const userPayload: TUser = {
    name: name,
    email: email,
    password: password,
    job_title: job_title || "",
    address: address || "",
    phone_number: phone_number || null,
    skills: skills || [],
    objective: objective || "",
    social_links: social_links || [],
    role: role || UserRole.Student,
  };

  const result = await User.create(userPayload);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  createUser,
  getAllUsers
};
