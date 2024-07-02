import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CourseServices } from "./courses.service";

const createCourse = catchAsync(async (req, res) => {
  
    const result = await CourseServices.createCourse(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New course launched!',
      data: result,
    });
  });


  const getAllCourses = catchAsync(async (req, res) => {
    const result = await CourseServices.getAllCourses();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Courses fetched successfully.',
      data: result,
    });
  })


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

  export const CourseControllers = {
    createCourse,
    getAllCourses,
    getSingleCourseById
  };