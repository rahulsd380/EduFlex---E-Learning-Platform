import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../../config";
import bcrypt from 'bcrypt';

const loginUser = async (payload : TLoginUser) => {
    console.log(payload);

    // Checking if the user is exists or not
    // const isUserExists = await User.findOne({email : payload.email}); // Can do like it as well

    const user = await User.isUserExistsByEmail(payload.email)
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, "User not found!");
    }

     // Checking if the password is correct or not
    //  const isPasswordCorrect = await bcrypt.compare(payload?.password, isUserExists?.password); // Can do like it as well
    if(!(await User.isPasswordMatched(payload?.password, user?.password))){
        throw new AppError(httpStatus.FORBIDDEN, "Password not matched!");
    }

    // Have to check if the user is deleted or not
    // Have to check if the user is suspended or not

    // create token and send to the client

    const jwtpayload = {
        email : user.email,
        role : user.role
    }
    const accessToekn = jwt.sign(jwtpayload, config.jwt_access_secret as string, { expiresIn: '300d' });


    // Access granted: Send access token & refresh token

    // const result = 
    return {
        accessToekn
    }; 
};

const changePassword = async (userData : JwtPayload, payload: {oldPassword: string, newPassword:string}) => {

    const user = await User.isUserExistsByEmail(userData.email)
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, "User not found!");
    }

     // Checking if the password is correct or not
    if(!(await User.isPasswordMatched(payload?.oldPassword, user?.password))){
        throw new AppError(httpStatus.FORBIDDEN, "Password not matched!");
    };

    // Hash the new password
    const newhashedPassword = await bcrypt.hash(payload.newPassword, Number(config.bcrypt_salt_round));



    await User.findOneAndUpdate({
        email : userData.email,
        role : userData.role
    }, {
        password : newhashedPassword,
        passwordChangedAt : new Date()
    });

    return null;
};


export const AuthServices = {
    loginUser,
    changePassword,
}