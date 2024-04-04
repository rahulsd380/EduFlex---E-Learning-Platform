import { Link } from "react-router-dom";
import facebook from "../../assets/Images/Social edia Icons/facebook.png";
import google from "../../assets/Images/Social edia Icons/google.png";
import { FormEvent, useState } from "react";
import Wave from "react-wavify";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockLine } from "react-icons/ri";

const SignIn = () : JSX.Element => {
    const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const [showPassword, setShowPassword] = useState(false)

  const handlePasswordToggle = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }
  return (
    <div className="relative">
      <div className="font-Roboto flex justify-center z-10 mt-10">
        <div className="w-[40%] p-2.5 z-10 bg-[#FFFFFF] rounded-3xl">
          <div className="text-center">
            <h1 className="text-2xl mt-2 font-semibold text-gray-700">
              Sign In Account
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Sign In Now And Unloock Exclusive Access
            </p>
          </div>

          <div className="flex items-center gap-3 w-full mt-3">
            
          <div
              className="bg-gray-50 py-2 px-4 rounded-md text-gray-700 font-Roboto font-normal w-full transition duration-300 ease-in-out transform hover:bg-gray-200 mt-2 flex items-center gap-2 cursor-pointer text-sm">
             <img className="w-6" src={google} alt="" /> Continue with google
            </div>

          <div
              className="bg-gray-50 py-2 px-4 rounded-md text-gray-700 font-Roboto font-normal w-full transition duration-300 ease-in-out transform hover:bg-gray-200 mt-2 flex items-center gap-2 cursor-pointer text-sm">
             <img className="w-6" src={facebook} alt="" /> Continue with facebook
            </div>
          </div>

          <p className="text-gray-500 text-center mt-5">OR</p>

          <form onSubmit={handleSignIn} className="flex flex-col gap-4 p-5">
           

            <div className="flex gap-1 items-center">
              <AiOutlineMail className="text-gray-500 text-xl mb-1"/>
              <input
                required
                type="email"
                placeholder="Email Address"
                className="rounded w-full focus:outline-none border-b border-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 focus:border-l-4 py-[4px] px-2"
              />
            </div>

            <div className="flex gap-1 items-center">
              <RiLockLine className="text-gray-500 text-xl mb-1"/>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="rounded w-full focus:outline-none border-b border-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 focus:border-l-4 py-[4px] px-2"
              />
              <div className="-ml-6 cursor-pointer" onClick={handlePasswordToggle}>
              {
                showPassword ? 
                <IoEyeOffOutline className="text-gray-500"/>
                
                :
                <IoEyeOutline className="text-gray-500"/>
              }
              </div>
            </div>

            <button
              className="bg-gray-800 py-2 px-4 rounded-md text-gray-200 font-Roboto font-normal w-full transition duration-300 ease-in-out transform hover:bg-gray-700 mt-2"
            >
              Sign In
            </button>

            <p className="text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <Link
                className="font-semibold hover:underline text-gray-800"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="absolute w-full bottom-0">
      <Wave options={{
          amplitude: 50,
          speed: 0.15,
          points: 4
        }}
        style={{ display: 'flex', height: "300px" }} 
        fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#4299e1" />
      <stop offset="90%" stopColor="#2c5282" />
    </linearGradient>
  </defs>
</Wave>
       
      </div>
    </div>
  );
};

export default SignIn;
