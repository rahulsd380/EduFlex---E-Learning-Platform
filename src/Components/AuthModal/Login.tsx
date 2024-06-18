import eyeOpen from "../../assets/Icons/Auth Modal/eye-open.svg";
import eyeClosed from "../../assets/Icons/Auth Modal/eye-closed.svg";
import google from "../../assets/Icons/Auth Modal/google.svg";
import { useState } from "react";
import { TSignupLoginModalTypes } from "./Signup";

const Login:React.FC<TSignupLoginModalTypes> = ({setModalType}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col font-Roboto">

      {/* Input field continer */}
      <div className="flex flex-col gap-6">
        {/* Email */}
      <div className="relative">
        <input
          type="  "
          id="floating_outlined"
          className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#20B486] focus:outline-none focus:ring-0 focus:border-[#20B486] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#20B486] peer-focus:dark:text-[#20B486] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Email
        </label>
      </div>

        {/* Password */}
      <div className="relative">
        <input
          type={`${showPassword ? "text" : "password"}`}
          id="floating_outlined"
          className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#20B486] focus:outline-none focus:ring-0 focus:border-[#20B486] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#20B486] peer-focus:dark:text-[#20B486] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
          {
            showPassword ? 
            <img onClick={() => setShowPassword(false)} src={eyeClosed} alt="" className="w-[18px] absolute top-[15px] bottom-0 right-4 cursor-pointer" />

            :
            <img onClick={() => setShowPassword(true)} src={eyeOpen} alt="" className="w-[18px] absolute top-[15px] bottom-0 right-4 cursor-pointer" />
          }
      </div>
      </div>

      {/* Forgot password */}
      <button className="text-[#20B486] font-medium text-end mt-2">Forgot Password?</button>

        {/* log in button */}
      <button className="bg-[#20B486] text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6">
        Log In
      </button>

      <div className="flex flex-col gap-6">
      <p className="text-center mt-4">Don't have an account? <button onClick={() => setModalType("Signup")} className="text-[#20B486] font-medium">Sign Up</button></p>

      <div className="flex items-center justify-center gap-5"> 
        <div className="w-[200px] h-[1px] bg-gray-300"></div>
        Or
        <div className="w-[200px] h-[1px] bg-gray-300"></div>
      </div>

      <button className="bg-white border border-gray-300 font-medium w-full px-4 py-3 rounded-lg focus:outline-none flex justify-center items-center gap-3">
        <img src={google} alt="google-icon" className="w-6" />
        Continue with Google
      </button>
      </div>

      
    </div>
  );
};

export default Login;
