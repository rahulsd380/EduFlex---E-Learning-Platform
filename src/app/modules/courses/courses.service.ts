import { TCourse } from "./course.interface";
import Course from "./courses.model";

// Create course route
const createCourse = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};

// Get all courses route
const getAllCourses = async () => {
  const result = await Course.find();
  return result;
}

// Get single course route
const getSingleCourseById = async (courseId: string) => {
  const result = await Course.findById(courseId);
  return result;
}

export const CourseServices = {
    createCourse,
    getAllCourses,
    getSingleCourseById
};