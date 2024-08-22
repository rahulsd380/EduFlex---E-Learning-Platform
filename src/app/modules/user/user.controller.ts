import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
    const userData = req.body;
    const result = await UserServices.createUser(userData);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User creted successfully.",
      data: result,
    });
  });

const getAllUsers = catchAsync(async (req, res) => {

  console.log(req.cookies);
    const result = await UserServices.getAllUsers();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Account created successfully.",
      data: result,
    });
  });

  const getMe = catchAsync(async (req, res) => {
    const {id, role} = req.user;
  
    const result = await UserServices.getMe(id, role);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'My profile retrived succesfully',
      data: result,
    });
  });

  export const UserControllers = {
    createUser,
    getAllUsers,
    getMe,
  }