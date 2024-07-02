import eyeOpen from "../../assets/Icons/Auth Modal/eye-open.svg";
import eyeClosed from "../../assets/Icons/Auth Modal/eye-closed.svg";
import google from "../../assets/Icons/Auth Modal/google.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { inputLabelStyles, inputStyles } from "./AuthModal.constants";

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
          className={inputStyles}
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className={inputLabelStyles}
        >
          Name
        </label>
      </div>

        {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="floating_outlined"
          className={inputStyles}
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className={inputLabelStyles}
        >
          Email
        </label>
      </div>

        {/* Password */}
      <div className="relative">
        <input
          type={`${showPassword ? "text" : "password"}`}
          id="floating_outlined"
          className={inputStyles}
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className={inputLabelStyles}
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
      <button onClick={() => setModalType("OTP")} className="bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6">
        Get OTP
      </button>

      <div className="flex flex-col gap-6">
      <p className="text-center mt-4">Already have an account? <button onClick={() => setModalType("Login")} className="text-primary-10 font-medium">Log In</button></p>

      <div className="flex items-center justify-center gap-5"> 
        <div className="w-[200px] h-[1px] bg-dark-5"></div>
        Or
        <div className="w-[200px] h-[1px] bg-dark-5"></div>
      </div>

      <button className="bg-white border border-dark-5 font-medium w-full px-4 py-3 rounded-lg focus:outline-none flex justify-center items-center gap-3">
        <img src={google} alt="google-icon" className="w-6" />
        Continue with Google
      </button>

      <p className="text-sm max-w-[345px] text-gray-800 mx-auto">By signing up to create an account, I accept Company's <p className="inline"><Link to={"/"} className="text-primary-10 hover:underline font-medium inline">Terms & Conditions</Link> <p className="text-gray-800 inline">and</p> <Link to={"/"} className="text-primary-10 hover:underline font-medium inline">Privacy policy</Link></p></p>
      </div>

      
    </div>
  );
};

export default Signup;
