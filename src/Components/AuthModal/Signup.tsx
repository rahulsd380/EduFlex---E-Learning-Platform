import eyeOpen from "../../assets/Icons/Auth Modal/eye-open.svg";
import eyeClosed from "../../assets/Icons/Auth Modal/eye-closed.svg";
import google from "../../assets/Icons/Auth Modal/google.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "../../Redux/API/baseApi";

export type TSignupLoginModalTypes = {
  setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP" | "ForgotPassword" | "Success">>;
};

type TSignupData = {
  name: string;
  email: string;
  password: string;
};

const Signup: React.FC<TSignupLoginModalTypes> = ({ setModalType }) => {
  const [signup, {isLoading}] = useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupData>();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (data: TSignupData) => {
    const signupData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const response = await signup(signupData).unwrap();
    if(response.success) {
      setModalType("Success");
    }
    console.log(response);

    // setModalType("OTP")

    console.log(signupData);
  };

  return (
    <form onSubmit={handleSubmit(handleSignup)} className="flex flex-col font-Roboto">
      {/* Input field container */}
      <div className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Name</p>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <span className="text-warning-10 text-start">
              {errors.name.message as string}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Email</p>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your e-mail"
          />
          {errors.email && (
            <span className="text-warning-10 text-start">
              {errors.email.message as string}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1 w-full relative">
          <p className="text-body-text font-medium text-sm">Password</p>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Password must be at least 8 characters"
          />
          {errors.password && (
            <span className="text-warning-10 text-start">
              {errors.password.message as string}
            </span>
          )}
          {showPassword ? (
            <img
              onClick={() => setShowPassword(false)}
              src={eyeClosed}
              alt="Hide password"
              className="w-[18px] absolute top-9 bottom-0 right-4 cursor-pointer"
            />
          ) : (
            <img
              onClick={() => setShowPassword(true)}
              src={eyeOpen}
              alt="Show password"
              className="w-[18px] absolute top-9 bottom-0 right-4 cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Sign up button */}
      <button
        type="submit"
        className={`${isLoading ? "animate-pulse bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6" : "animate-none bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6"}`}>
        {/* Get OTP */}
        {
          isLoading ?
          "Signing Up..."
          :
          "Sign Up"
        }
      </button>

      <div className="flex flex-col gap-6">
        <p className="text-center mt-4">
          Already have an account?{" "}
          <button
            onClick={() => setModalType("Login")}
            className="text-primary-10 font-medium"
          >
            Log In
          </button>
        </p>

        <div className="flex items-center justify-center gap-5">
          <div className="w-[200px] h-[1px] bg-dark-5"></div>
          Or
          <div className="w-[200px] h-[1px] bg-dark-5"></div>
        </div>

        <button className="bg-white border border-dark-5 font-medium w-full px-4 py-3 rounded-lg focus:outline-none flex justify-center items-center gap-3">
          <img src={google} alt="google-icon" className="w-6" />
          Continue with Google
        </button>

        <p className="text-sm max-w-[380px] text-gray-800 mx-auto text-center">
          By signing up to create an account, I accept Company's{" "}
          <p className="inline">
            <Link
              to={"/"}
              className="text-primary-10 hover:underline font-medium inline"
            >
              Terms & Conditions
            </Link>{" "}
            <p className="text-gray-800 inline">and</p>{" "}
            <Link
              to={"/"}
              className="text-primary-10 hover:underline font-medium inline"
            >
              Privacy policy
            </Link>
          </p>
        </p>
      </div>
    </form>
  );
};

export default Signup;
