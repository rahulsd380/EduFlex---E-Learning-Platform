import { model, Schema } from "mongoose";
import {
  TEnrolledCourse,
  TProjects,
  TUser,
  UserModel,
  UserRole,
} from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

// Schemas

const ProjectsSchema = new Schema<TProjects>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  githubLink: { type: String },
  liveLink: { type: String },
  technologyUsed: { type: [String], required: true },
  startDate: { type: String, required: true },
  endDate: { type: String },
  images: { type: [String] },
});

const EnrolledCourseSchema = new Schema<TEnrolledCourse>({
  courseId: { type: String, required: true },
  enrollmentDate: { type: Date, required: true },
});

// Main user schema
export const UserSchema = new Schema<TUser, UserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  job_title: { type: String, default: null },
  address: { type: String, default: null },  
  phone_number: { type: String, default: null },
  skills: { type: [String], default: [] },   
  objective: { type: String, default: null },
  social_links: { type: [String], default: [] },
  role: {
    type: String,
    enum: Object.values(UserRole),
    required: true,
    default: UserRole.Student,
  },
  passwordChangedAt: { type: Date },
  projects: { type: [ProjectsSchema], default: [] },
  enrolledCourses: { type: [EnrolledCourseSchema], default: [] },
  isAccountDeleted : { type: Boolean },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password as string,
    Number(config.bcrypt_salt_round)
  );
  next();
});

UserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

UserSchema.statics.isUserExistsByEmail = async function (email) {
  return await User.findOne({ email }).select("+password");
};

UserSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

UserSchema.statics.isJWtIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;

  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, UserModel>("User", UserSchema);
