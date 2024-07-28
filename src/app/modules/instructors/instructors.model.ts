import { Schema } from "mongoose";

export const InstructorSchema = new Schema({
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true },
    },
    email: { type: String, required: true },
    bio: { type: String },
    profilePicture: { type: String },
    socialLinks: {
        linkedin: { type: String },
        twitter: { type: String },
        facebook: { type: String },
    },
    specializations: { type: [String] },
});