import { model, Schema } from "mongoose";
import { TUser, UserRole } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

export const UserSchema = new Schema<TUser>({
    name: {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    job_title: { type: String },
    address: { type: String },
    phone_number: { type: String, required: true, unique: true },
    skills: { type: [String], required: true },
    objective: { type: String, required: true },
    social_links: { type: [String], required: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
      default: UserRole.Student,
    },
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

export const User = model<TUser>("User", UserSchema);
