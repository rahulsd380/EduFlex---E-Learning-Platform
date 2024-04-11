import { Link } from "react-router-dom";
import facebook from "../../assets/Images/Social edia Icons/facebook.png";
import google from "../../assets/Images/Social edia Icons/google.png";
import { FormEvent, useState } from "react";
import Wave from "react-wavify";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockLine } from "react-icons/ri";

import { FaRegUser } from "react-icons/fa6";

const SignUp = () : JSX.Element => {

  const [signupError, setSignupError] = useState<string>("")

    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email);

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if(!passwordRegex.test(password)){
          setSignupError("Password must contain at least one Digit, one Lowercase letter, one Uppercase letter, one Special character and be at least 8 characters long.");
          return;
        }
        setSignupError("")
    }
    

    const [showPassword, setShowPassword] = useState(false)

  const handlePasswordToggle = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }
  return (
    <div className="relative">
      <div className="font-Roboto flex justify-center z-10 mt-10 px-5 lg:px-0">
        <div className="w-full md:w-[70%] lg:w-[40%] p-2.5 z-10 bg-[#FFFFFF] rounded-3xl">
          <div className="text-center">
            <h1 className="text-2xl mt-2 font-semibold text-gray-700">
              Create An Account
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Sign Up Now And Unloock Exclusive Access
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 w-full mt-3">
            
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

          <form onSubmit={handleSignUp} className="flex flex-col gap-4 p-5">
            
            <div className="flex gap-1 items-center">
              <FaRegUser className="text-gray-500 text-[18px]"/>
              <input
              name="name"
                required
                type="text"
                placeholder="Full Name"
                className="rounded w-full focus:outline-none border-b border-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 focus:border-l-4 py-[4px] px-2"
              />
            </div>

            <div className="flex gap-1 items-center">
              <AiOutlineMail className="text-gray-500 text-xl mb-1"/>
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="rounded w-full focus:outline-none border-b border-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 focus:border-l-4 py-[4px] px-2"
              />
            </div>

            
            <div className="flex gap-1 items-center">
              <RiLockLine className="text-gray-500 text-xl mb-1"/>
              <input
              name="password"
                required
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="rounded w-full focus:outline-none border-b border-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 focus:border-l-4 py-[4px] px-2"
              />
              <div className="-ml-6 cursor-pointer" onClick={handlePasswordToggle}>
              {
                showPassword ? 
                <IoEyeOffOutline/>
                
                :
                <IoEyeOutline/>
              }
              </div>
            </div>
            <p className="text-red-500">{signupError}</p>

            <button
              className="bg-gray-800 py-2 px-4 rounded-md text-gray-200 font-Roboto font-normal w-full transition duration-300 ease-in-out transform hover:bg-gray-700 mt-2"
            >
              Create Account
            </button>

            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link
                className="font-semibold hover:underline text-gray-800"
                to={"/signin"}
              >
                Sign In
              </Link>
            </p>
          </form>

          <p className="text-xs text-gray-600 text-center border-t pt-2">By cliking on the button above, you are aggre to our <Link to={"/"} className="font-semibold underline">Terms of Service</Link> and <Link to={"/"} className="font-semibold underline">Privacy Policy</Link></p>
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

export default SignUp;
