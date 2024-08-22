import { TCourse } from "./course.interface";
import Course, { TemporyCourse } from "./courses.model";

// Create course route
const createTemporaryCourse = async (payload: TCourse) => {
  const result = await TemporyCourse.create(payload);
  return result;
};

// Create course route
const getAllTemporaryCourse = async () => {
  const result = await TemporyCourse.find();
  return result;
};

// Create course route
const createCourse = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};

// Get all courses route
const getAllCourses = async (search: string | null) => {
  const filter = search
    ? { $or: [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } }
        ]
      }
    : {};
  const result = await Course.find(filter);
  return result;
};

// Get single course route
const getSingleCourseById = async (courseId: string) => {
  const result = await Course.findById(courseId);
  return result;
};

// Get courses by category
const getCoursesByCategory = async (category : string) => {
  const result = await Course.find({ category });
  return result;
};

export const CourseServices = {
    createCourse,
    getAllCourses,
    getSingleCourseById,
    getCoursesByCategory,
    createTemporaryCourse,
    getAllTemporaryCourse,
};