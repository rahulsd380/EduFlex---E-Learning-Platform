import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';

const auth = (...requiredRoles : TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        
       const token = req.headers.authorization;

       // Check if there is any token sent from the client or not.
       if(!token){
           throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized to proceed!')
        }

        // Check if the token is valid or not.
        const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload

        const {email, role, iat} = decoded

        const user = await User.isUserExistsByEmail(email);

        // Checking if the user exists or not
        if(!user){
        throw new AppError(httpStatus.NOT_FOUND, "User not found!");
        }

        // Have to check if the user is deleted or not
        // Have to check if the user is suspended or not

        if(user.passwordChangedAt && User.isJWtIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)){
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
        }

            if(requiredRoles && !requiredRoles.includes(role)){
                throw new AppError(httpStatus.UNAUTHORIZED, 'You have no access to this route')
            }
            // decoded undefined
            req.user = decoded as JwtPayload;
            next();

       
})
};

export default auth;