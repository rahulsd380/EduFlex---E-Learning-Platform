import { z } from "zod";

const ProjectSchema = z.object({
  title: z.string({ message: "Project title is required" }).min(2, { message: "Title must be at least 2 characters" }),
  description: z.string({ message: "Description is required" }).min(5, { message: "Description must be at least 5 characters" }),
  githubLink: z.string().url({ message: "GitHub link must be a valid URL" }).optional(),
  liveLink: z.string().url({ message: "Live link must be a valid URL" }).optional(),
  technologyUsed: z.array(z.string()).min(1, { message: "At least one technology must be used" }),
  startDate: z.string({ message: "Start date is required" }),
  endDate: z.string().optional(),
  images: z.array(z.string().url({ message: "Each image must be a valid URL" })).optional(),
});

const EnrolledCourseSchema = z.object({
  courseId: z.string({ message: "Course ID is required" }),
  enrollmentDate: z.date({ message: "Enrollment date is required" }),
});

const UserValidationSchema = z.object({
  body: z.object({
    name: z.string({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(100, { message: "Password can't be over 100 characters" }),
    job_title: z.string().optional(),
    address: z.string().optional(),
    phone_number: z.string().min(10, { message: "Phone number must be at least 10 characters" }).max(20, { message: "Phone number can't be over 20 characters" }).optional().nullable(),
    skills: z.array(z.string()).optional(),
    objective: z.string().optional(),
    social_links: z.array(z.string()).optional(),
    projects: z.array(ProjectSchema).optional(),
    enrolledCourses: z.array(EnrolledCourseSchema).optional(),
    role: z.enum(["student", "instructor", "admin", "manager", "ceo"]).optional(),
  }),
});

export const UserValidations = {
  UserValidationSchema,
};
