import { TUser, UserRole } from "./user.interface";
import { User } from "./user.model";

// create user route
const createUser = async (payload: TUser) => {
  const {name, email, password, job_title, address, phone_number, skills, objective, social_links, role,projects, enrolledCourses} = payload;
  
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
    projects : projects || [],
    enrolledCourses : enrolledCourses || [],
    isAccountDeleted : false,
  };

  const result = await User.create(userPayload);
  return result;
};

// get all users route
const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

const getMe = async (id:string) => {
  const result = User.findOne({id});
  return result;
};

const updateProfile = async (id : string, payload : Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const UserServices = {
  createUser,
  getAllUsers,
  getMe,
  updateProfile,
};
