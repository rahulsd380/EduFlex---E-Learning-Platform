import { model, Schema } from "mongoose";
import { TUser, UserModel, UserRole } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

export const UserSchema = new Schema<TUser, UserModel>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    job_title: { type: String },
    address: { type: String },
    phone_number: { type: String, default: null },
    skills: { type: [String] },
    objective: { type: String },
    social_links: { type: [String] },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
      default: UserRole.Student,
    },
    passwordChangedAt : {type : Date},
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

UserSchema.statics.isUserExistsByEmail = async function(email){
  return await User.findOne({email}).select('+password');
}

UserSchema.statics.isPasswordMatched = async function(plainTextPassword : string, hashedPassword : string){
  return await bcrypt.compare(plainTextPassword, hashedPassword);
}

export const User = model<TUser, UserModel>("User", UserSchema);
