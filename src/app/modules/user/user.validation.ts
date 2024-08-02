import { z } from "zod";

const UserValidationSchema = z.object({
  body: z.object({
    name: z.string({message : "Name is required"}),
    email: z.string().email({message : "Email is required"}),
    password: z.string().min(8, {message : "Password must be at least 8 characters"}).max(100, {message : "Password can't be over 100 characters"}),
    job_title: z.string().min(2).max(100).optional(),
    address: z.string().min(5).max(200).optional(),
    phone_number: z.string().min(10).max(20).optional().nullable(),
    skills: z.array(z.string()).optional(),
    objective: z.string().optional(),
    social_links: z.array(z.string()).optional(),
    role: z.enum(["student", "instructor", "admin", "manager", "ceo"]).optional(),
  }),
});

export const UserValidations = {
  UserValidationSchema,
};
