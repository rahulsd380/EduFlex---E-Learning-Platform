import eyeOpen from "../../assets/Icons/Auth Modal/eye-open.svg";
import eyeClosed from "../../assets/Icons/Auth Modal/eye-closed.svg";
import google from "../../assets/Icons/Auth Modal/google.svg";
import { useState } from "react";
import { TSignupLoginModalTypes } from "./Signup";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { useAppDispatch } from './../../Redux/hooks';
import { setUser } from "../../Redux/Features/Auth/authSlice";
import { verifyToken } from "../../Utils/verifytoken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type TLoginData = {
  email: string;
  password: string;
};

const Login: React.FC<TSignupLoginModalTypes> = ({ setModalType }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, {isLoading}] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (data: TLoginData) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    const response = await login(loginData).unwrap();
    const user = verifyToken(response.data?.accessToken);
    dispatch(setUser({ user, token: response.data.accessToken }));
    toast.success("Logged in successfully.");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col font-Roboto">
      {/* Input field container */}
      <div className="flex flex-col gap-6">
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
            className="bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
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
            className="bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your password"
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

      <div className="flex items-center justify-between mt-1">
        {/* Remember Me */}
      <div className="flex items-center gap-2">
          <input
            // {...register("rememberMe")}
            type="checkbox"
            id="rememberMe"
            className="accent-primary-10 size-4"
          />
          <label htmlFor="rememberMe" className="text-body-text font-medium">
            Remember Me
          </label>
        </div>

      {/* Forgot password */}
      <button className="text-primary-10 font-medium text-end mt-2">Forgot Password?</button>
      </div>

      {/* Log in button */}
      <button
        type="submit"
        className="bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6"
      >
        {isLoading ? "Login in..." : "Log In"}
      </button>

      <div className="flex flex-col gap-6">
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <button onClick={() => setModalType("Signup")} className="text-primary-10 font-medium">
            Sign Up
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

      </div>
    </form>
  );
};

export default Login;
