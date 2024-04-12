import { Link } from "react-router-dom";
import facebook from "../../assets/Images/Social edia Icons/facebook.png";
import google from "../../assets/Images/Social edia Icons/google.png";
import { FormEvent, useState } from "react";
import Wave from "react-wavify";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockLine } from "react-icons/ri";

const SignIn = (): JSX.Element => {
  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="relative">
      <div className="font-Roboto flex justify-center z-10 mt-10 pb-10 px-5 lg:px-0">
        <div className="w-full md:w-[70%] lg:w-[40%] p-2.5 z-10 bg-[#FFFFFF] rounded-3xl">
          <div className="text-center">
            <h1 className="text-2xl mt-2 font-semibold text-gray-700">
              Sign In Account
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Sign In Now And Unloock Exclusive Access
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 w-full mt-3">
            <div className="bg-gray-50 py-2 px-4 rounded-md text-gray-700 font-Roboto font-normal w-full transition duration-300 ease-in-out transform hover:bg-gray-200 mt-2 flex items-center gap-2 cursor-pointer text-sm">
              <img className="w-6" src={google} alt="" /> Continue with google
            </div>

            <div className="bg-gray-50 py-2 px-4 rounded-md text-gray-700 font-Roboto font-normal w-full transition duration-300 ease-in-out transform hover:bg-gray-200 mt-2 flex items-center gap-2 cursor-pointer text-sm">
              <img className="w-6" src={facebook} alt="" /> Continue with
              facebook
            </div>
          </div>

          <p className="text-gray-500 text-center mt-5">OR</p>

          <form onSubmit={handleSignIn} className="flex flex-col gap-4 p-5">
            <div className="flex gap-1 items-center">
              <AiOutlineMail className="text-gray-500 text-xl mb-1" />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="rounded w-full focus:outline-none border-b border-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 focus:border-l-4 py-[4px] px-2"
              />
            </div>

            <div className="flex gap-1 items-center">
              <RiLockLine className="text-gray-500 text-xl mb-1" />
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="rounded w-full focus:outline-none border-b border-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 focus:border-l-4 py-[4px] px-2"
              />
              <div
                className="-ml-6 cursor-pointer"
                onClick={handlePasswordToggle}
              >
                {showPassword ? (
                  <IoEyeOffOutline className="text-gray-500" />
                ) : (
                  <IoEyeOutline className="text-gray-500" />
                )}
              </div>
            </div>

            <button className="bg-gray-800 py-2 px-4 rounded-md text-gray-200 font-Roboto font-normal w-full transition duration-300 ease-in-out transform hover:bg-gray-700 mt-2">
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
        {/* <Wave options={{
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
</Wave> */}

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#2b6cb0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blueGradient)"
            fill-opacity="1"
            d="M0,160L60,133.3C120,107,240,53,360,26.7C480,0,600,0,720,0C840,0,960,0,1080,26.7C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SignIn;
