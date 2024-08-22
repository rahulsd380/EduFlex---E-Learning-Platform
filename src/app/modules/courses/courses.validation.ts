import { z } from 'zod';

const InstructorValidationSchema = z.object({
  instructorName: z.string({ required_error: "Instructor name is required" }),
  instructorImg: z.string().url("Instructor image URL must be a valid URL"),
  instructorExperience: z.string({ required_error: "Instructor experience is required" }),
});

const ReviewValidationSchema = z.object({
  reviewerName: z.string({ required_error: "Reviewer name is required" }),
  reviewerImg: z.string().url("Reviewer image URL must be a valid URL"),
  review: z.string({ required_error: "Review text is required" }),
  reviewDate: z.string({ required_error: "Review date is required" }).regex(/^\d{4}-\d{2}-\d{2}$/, "Review date must be in YYYY-MM-DD format"),
});

const CourseValidationSchema = z.object({
  body : z.object({
    img: z.string(),
  category: z.string({ required_error: "Category is required" }),
  title: z.string({ required_error: "Title is required" }),
  description: z.string({ required_error: "Description is required" }),
  price: z.string({ required_error: "Price is required" }),
  totalEnrolled: z.string({ required_error: "Total enrolled is required" }),
  courseDuration: z.string({ required_error: "Course duration is required" }),
  instructor: z.array(InstructorValidationSchema).nonempty("At least one instructor is required"),
  courseCurriculum: z.array(z.string({ required_error: "Course curriculum is required" })),
  tags: z.array(z.string({ required_error: "At least one tag is required" })),
  language: z.string({ required_error: "Language is required" }),
  prerequisites: z.array(z.string({ required_error: "At least one prerequisite is required" })),
  learningObjectives: z.array(z.string({ required_error: "At least one learning objective is required" })),
  enrollmentDeadline: z.string({ required_error: "Enrollment deadline is required" }).regex(/^\d{4}-\d{2}-\d{2}$/, "Enrollment deadline must be in YYYY-MM-DD format"),
  startDate: z.string({ required_error: "Start date is required" }).regex(/^\d{4}-\d{2}-\d{2}$/, "Start date must be in YYYY-MM-DD format"),
  endDate: z.string({ required_error: "End date is required" }).regex(/^\d{4}-\d{2}-\d{2}$/, "End date must be in YYYY-MM-DD format"),
  numberOfLessons: z.string({ required_error: "Number Of Lessons is required" }),
  assignmentsAndAssessments: z.string({ required_error: "Assignments and assessments information is required" }),
  certification: z.string({ required_error: "Certification information is required" }),
  reviews: z.array(ReviewValidationSchema).optional(),
  })
});

export const CourseValidations = {
    CourseValidationSchema,
};
