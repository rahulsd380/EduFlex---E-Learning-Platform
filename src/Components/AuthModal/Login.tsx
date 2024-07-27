import eyeOpen from "../../assets/Icons/Auth Modal/eye-open.svg";
import eyeClosed from "../../assets/Icons/Auth Modal/eye-closed.svg";
import google from "../../assets/Icons/Auth Modal/google.svg";
import { useState } from "react";
import { TSignupLoginModalTypes } from "./Signup";
import { inputLabelStyles, inputStyles } from "./AuthModal.constants";
import { useForm } from "react-hook-form";

type TLoginData = {
  name: string;
  email: string;
  password: string;
};

const Login:React.FC<TSignupLoginModalTypes> = ({setModalType}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleLogin = (data: TLoginData) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    console.log(loginData);
  };
  const [showPassword, setShowPassword] = useState(false);


  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col font-Roboto">

      {/* Input field continer */}
      <div className="flex flex-col gap-6">
        {/* Email */}
      <div className="relative">
        <input
         {...register("email")}
          type=""
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
        {...register("password")}
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

      {/* Forgot password */}
      <button className="text-primary-10 font-medium text-end mt-2">Forgot Password?</button>

        {/* log in button */}
      <button type='submit' className="bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none mt-6">
        Log In
      </button>

      <div className="flex flex-col gap-6">
      <p className="text-center mt-4">Don't have an account? <button onClick={() => setModalType("Signup")} className="text-primary-10 font-medium">Sign Up</button></p>

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
