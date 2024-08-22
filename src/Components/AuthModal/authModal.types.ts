import { Dispatch, SetStateAction } from "react"

export type TModalTypes = {
    setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP" | "ForgotPassword" | "ResetPassword" | "Success">>
};