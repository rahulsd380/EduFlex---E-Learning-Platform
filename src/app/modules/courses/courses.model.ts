import { Schema, model } from "mongoose";
import { TCourse } from "./course.interface";

const InstructorSchema = new Schema({
  instructorName: {
    type: String,
    required: true,
  },
  instructorImg: {
    type: String,
    required: true,
  },
  instructorExperience: {
    type: String,
    required: true,
  },
});

const ReviewSchema = new Schema({
  reviewerName: {
    type: String,
  },
  reviewerImg: {
    type: String,
  },
  review: {
    type: String,
  },
  reviewDate: {
    type: String,
  },
});

const CourseSchema = new Schema<TCourse>({
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
  },
  totalEnrolled: {
    type: String,
    default : "0"
  },
  courseDuration: {
    type: String,
    required: true,
  },
  instructor: [InstructorSchema],
  courseCurriculum: [String],
  tags: [String],
  language: {
    type: String,
    required: true,
  },
  prerequisites: [String],
  learningObjectives: [String],
  enrollmentDeadline: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  numberOfLessons: {
    type: String,
    required: true,
  },
  assignmentsAndAssessments: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
  reviews: [ReviewSchema],
});

const TemporaryCourseSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
});


export const TemporyCourse = model("TemporaryCourse", TemporaryCourseSchema);

const Course = model<TCourse>("Course", CourseSchema);
export default Course;
