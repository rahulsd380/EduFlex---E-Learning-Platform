import React from "react";
import { TSignupLoginModalTypes } from "./Signup";
import otpIcon from "../../assets/Icons/Auth Modal/otp-icon.svg";
import { inputLabelStyles, inputStyles } from "./AuthModal.constants";
import { useForm } from "react-hook-form";

type TOTP = {
  otp: number;
};


const OTP: React.FC<TSignupLoginModalTypes> = ({ setModalType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const handleSubmitOtp = (data: TOTP) => {
    const otpData = {
      otp: data.otp,
    };
  
    console.log(otpData);
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitOtp)}>
      <div className="flex justify-center">
        <img className="w-[200px]" src={otpIcon} alt="" />
      </div>

      <h1 className="text-center mt-4 capitalize text-3xl font-medium font-Roboto text text-gray-800">
        Enter the verification code
      </h1>

      <p className="text-sm max-w-[345px] text-gray-800 mx-auto mt-3">
        We've sent a verification code in your email.
      </p>

      {/* OTP */}
      <div className="relative mt-5">
        <input
          {...register("otp")}
          type="number"
          id="floating_outlined"
          className={inputStyles}
          placeholder=" "
        />
        <label htmlFor="floating_outlined" className={inputLabelStyles}>
          OTP
        </label>
      </div>

      <button
        onClick={() => setModalType("Login")}
        type="submit"
        className="bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6"
      >
        Finish Sign Up
      </button>
    </form>
  );
};

export default OTP;
