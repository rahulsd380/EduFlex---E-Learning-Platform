import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";

import { BsStars } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="">
      <div className="font-Roboto flex flex-col gap-8 bg-gradient-to-r from-gray-50 to-green-50 p-20">
        <h1 className="text-gray-600 font-semibold text-2xl md:text-5xl text-center leading-10 md:leading-[60px] flex justify-center gap-2">
          <BsStars className="text-blue-500 animate-pulse text-5xl" /> Unlock
          Your Potential: Explore Limitless Learning <br /> with Genius Grove
        </h1>

        <p className="text-center max-w-6xl mx-auto">
          Dive into limitless learning opportunities with our e-learning
          platform. Explore diverse courses, connect with expert instructors,
          and unlock your full potential. Start your journey today and empower
          yourself with the knowledge and skills to succeed in any endeavor.
        </p>

        <div className="flex flex-wrap items-center gap-5 justify-center">
          <Link
            to={"/"}
            className="bg-gradient-to-r from-sky-500 to-blue-700 py-3 px-9 rounded-md text-white font-normal"
          >
            Get Started
          </Link>

          <button className="flex items-center gap-2">
            <FaRegPlayCircle className="text-4xl text-blue-500" />
            How it works?
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default HeroSection;
