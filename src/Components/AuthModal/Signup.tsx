import eyeOpen from "../../assets/Icons/Auth Modal/eye-open.svg";
import eyeClosed from "../../assets/Icons/Auth Modal/eye-closed.svg";
import google from "../../assets/Icons/Auth Modal/google.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

export type TSignupLoginModalTypes = {
    setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP">>;
  };

const Signup :React.FC<TSignupLoginModalTypes> = ({setModalType}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col font-Roboto">

      {/* Input field continer */}
      <div className="flex flex-col gap-6">
        {/* Name */}
      <div className="relative">
        <input
          type="text"
          id="floating_outlined"
          className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#20B486] focus:outline-none focus:ring-0 focus:border-[#20B486] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#20B486] peer-focus:dark:text-[#20B486] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Name
        </label>
      </div>

        {/* Email */}
      <div className="relative">
        <input
          type="email"
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

        {/* Sign up button */}
      <button onClick={() => setModalType("OTP")} className="bg-[#20B486] text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6">
        Get OTP
      </button>

      <div className="flex flex-col gap-6">
      <p className="text-center mt-4">Already have an account? <button onClick={() => setModalType("Login")} className="text-[#20B486] font-medium">Log In</button></p>

      <div className="flex items-center justify-center gap-5"> 
        <div className="w-[200px] h-[1px] bg-gray-300"></div>
        Or
        <div className="w-[200px] h-[1px] bg-gray-300"></div>
      </div>

      <button className="bg-white border border-gray-300 font-medium w-full px-4 py-3 rounded-lg focus:outline-none flex justify-center items-center gap-3">
        <img src={google} alt="google-icon" className="w-6" />
        Continue with Google
      </button>

      <p className="text-sm max-w-[345px] text-gray-800 mx-auto">By signing up to create an account, I accept Company's <p className="inline"><Link to={"/"} className="text-[#20B486] hover:underline font-medium inline">Terms & Conditions</Link> <p className="text-gray-800 inline">and</p> <Link to={"/"} className="text-[#20B486] hover:underline font-medium inline">Privacy policy</Link></p></p>
      </div>

      
    </div>
  );
};

export default Signup;
