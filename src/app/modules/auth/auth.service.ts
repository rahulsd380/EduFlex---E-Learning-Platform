import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import bcrypt from "bcrypt";
import { createToekn } from "./auth.utils";

const loginUser = async (payload: TLoginUser) => {
  console.log(payload);

  // Checking if the user is exists or not
  // const isUserExists = await User.findOne({email : payload.email}); // Can do like it as well

  const user = await User.isUserExistsByEmail(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  // Checking if the password is correct or not
  //  const isPasswordCorrect = await bcrypt.compare(payload?.password, isUserExists?.password); // Can do like it as well
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, "Password not matched!");
  }

    // Checking if the user is deleted or not
    if(user.isAccountDeleted){
      throw new AppError(httpStatus.FORBIDDEN, 'Your account is deleted.')
      }

      
  // Have to check if the user is suspended or not

  // create token and send to the client

  const jwtpayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToekn(
    jwtpayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToekn = createToekn(
    jwtpayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  // Access granted: Send access token & refresh token

  // const result =
  return {
    accessToken,
    refreshToekn,
  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  // Finding the user by email
  const user = await User.isUserExistsByEmail(userData.email);

  // Checking if the user exists or not
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  // Checking if the password is correct or not
  if (!(await User.isPasswordMatched(payload?.oldPassword, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, "Password not matched!");
  }

  // Hash the new password
  const newhashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_round)
  );

  await User.findOneAndUpdate(
    {
      email: userData.email,
      role: userData.role,
    },
    {
      password: newhashedPassword,
      passwordChangedAt: new Date(),
    }
  );

  return null;
};

const refreshToken = async (token: string) => {
  // Check if there is any token sent from the client or not.
  if (!token) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "You are not authorized to proceed!"
    );
  }

  // Check if the token is valid or not.
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string
  ) as JwtPayload;

  const { email, iat } = decoded;

  const user = await User.isUserExistsByEmail(email);
  console.log(user);

  // Checking if the user exists or not
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  if(user.passwordChangedAt && User.isJWtIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)){
    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
    }

    // Checking if the user is deleted or not
  if(user.isAccountDeleted){
    throw new AppError(httpStatus.FORBIDDEN, 'Your account is deleted.')
    }

  // Have to check if the user is suspended or not

  const jwtpayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = createToekn(
    jwtpayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    accessToken
  }
};

export const AuthServices = {
  loginUser,
  changePassword,
  refreshToken,
};
