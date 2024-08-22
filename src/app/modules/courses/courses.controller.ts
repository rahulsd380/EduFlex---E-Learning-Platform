import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CourseServices } from "./courses.service";

// Create course route
const createTemporaryCourse = catchAsync(async (req, res) => {
    const result = await CourseServices.createTemporaryCourse(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New course launched!',
      data: result,
    });
  });

// Create course route
const getAllTemporaryCourse = catchAsync(async (req, res) => {
    const result = await CourseServices.getAllTemporaryCourse();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'data found',
      data: result,
    });
  });

// Create course route
const createCourse = catchAsync(async (req, res) => {
    const result = await CourseServices.createCourse(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New course launched!',
      data: result,
    });
  });

// Get all courses route
const getAllCourses = catchAsync(async (req, res) => {
  const { search } = req.query;
  const result = await CourseServices.getAllCourses(search);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses fetched successfully.',
    data: result,
  });
});

// Get single course route
  const getSingleCourseById = catchAsync(async (req, res) => {
    const {courseId} = req.params;
    const result = await CourseServices.getSingleCourseById(courseId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Courses fetched successfully.',
      data: result,
    });
  })

  // Get courses by category route
const getCoursesByCategory = catchAsync(async (req, res) => {
  const { category } = req.params;
  const result = await CourseServices.getCoursesByCategory(category);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses fetched successfully.',
    data: result,
  });
});

  export const CourseControllers = {
    createCourse,
    getAllCourses,
    getSingleCourseById,
    getCoursesByCategory,
    createTemporaryCourse,
    getAllTemporaryCourse,
  };