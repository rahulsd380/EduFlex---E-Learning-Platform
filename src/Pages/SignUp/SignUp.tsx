import { Link } from "react-router-dom";
import img1 from "../../assets/Images/Blog/1.png";

const SignUp = () => {
  return (
    <div className="w-11/12 mx-auto mt-3">
      <div className="flex flex-col lg:flex-row items-center gap-16 font-Roboto ">
        <div className="w-[40%]">
          <div className="text-center">
            <h1 className="text-3xl  font-semibold text-gray-700">
              Create An Account
            </h1>
            <p className="text-md text-gray-600 mt-1">
              Sign Up Now And Unloock Exclusive Access
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-gray-50 rounded-lg shadow mt-5 p-5">
            <div className="flex flex-col gap-1">
              <p className="text-gray-600">Name</p>
              <input
                required
                type="text"
                placeholder="Enter your full name"
                className="focus:outline-none border borde-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 py-[6px] px-2 rounded-md "
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-gray-600">Email</p>
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="focus:outline-none border borde-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 py-[6px] px-2 rounded-md "
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-gray-600">Password</p>
              <input
                required
                type="password"
                placeholder="Enter your password"
                className="focus:outline-none border borde-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 py-[6px] px-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-gray-600">Confirm Password</p>
              <input
                required
                type="password"
                placeholder="Re-enter your password"
                className="focus:outline-none border borde-gray-300 hover:border-blue-600 transition duration-300 focus:border-blue-400 py-[6px] px-2 rounded-md"
              />
            </div>

            <button
              id="signupButton"
              className="bg-blue-500 py-2 px-4 rounded-md text-white font-Roboto font-normal w-full transition duration-300 ease-in-out transform hover:bg-blue-600 mt-2"
            >
              Sign Up
            </button>

            <p className="text-md text-gray-600 text-center">
              Already have an account?{" "}
              <Link
                className="font-medium hover:underline text-blue-500"
                to={"/signin"}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className="w-[60%]">
          <img className="rounded-lg" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
