import { z } from "zod";

const loginValidationSchema = z.object({
    body : z.object({
        email : z.string({required_error : "Please enter your email."}),
        password : z.string({required_error : "Please enter your password."}),
    })
});

const changePasswordValidationSchema = z.object({
    body : z.object({
        oldPassword : z.string({required_error : "Old password is required."}),
        newPassword : z.string({required_error : "Password is required."}),
    })
});

export const AuthValidations = {
    loginValidationSchema,
    changePasswordValidationSchema
}