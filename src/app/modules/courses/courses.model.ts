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
    required: true,
  },
  reviewerImg: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  reviewDate: {
    type: String,
    required: true,
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
  reviewerImg: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  totalEnrolled: {
    type: String,
    required: true,
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
    type: Number,
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

const Course = model<TCourse>("Course", CourseSchema);
export default Course;
