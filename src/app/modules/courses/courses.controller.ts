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

  export const CourseControllers = {
    createCourse
  };