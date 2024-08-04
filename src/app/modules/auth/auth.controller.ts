import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import config from "../../config";

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);

    const {accessToken, refreshToekn} = result;

    res.cookie('refreshToken', refreshToekn, {
        secure : config.node_env === 'production',
        httpOnly : true
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Logged in successfully.",
        data: {
            accessToken
        },
      });
});

const changePassword = catchAsync(async (req, res) => {
    const {...passwordData} = req.body;
    const result = await AuthServices.changePassword(req.user, passwordData);
    console.log(req.body, req.user);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Password changed successfully.",
        data: result,
      });
});


const refreshToekn = catchAsync(async (req, res) => {
    const {refreshToken} = req.cookies;
    const result = await AuthServices.refreshToken(refreshToken);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "New access token generated successfully.",
        data: result
});
});

export const AuthControllers = {
    loginUser,
    changePassword,
    refreshToekn
}