import img1 from "../../assets/Images/Blog/1.png";
import logo from "../../assets/Images/Logo/fabicon.png";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { LiaLuggageCartSolid } from "react-icons/lia";

const CourseCard = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="relative">
          <img className="w-full rounded-xl" src={img1} alt="" />
          <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm">
            <LiaLuggageCartSolid className="text-lg" /> 828 Enrolled
          </p>
        </div>

        <div className="p-2 flex flex-col gap-[6px]">
          <div>
            <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">
              Be A MERN Stack Master! || MERN Stack Development
            </h1>

            <div className="flex items-center justify-between">
              {/* User profile */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full">
                  <img src={logo} alt="" />
                </div>
                <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">
                  Rahul Sutradhar
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <BsCalendarDateFill />6 Months
                </p>

                <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-sm">
                  Starts in 15 days
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            alias odit ullam labore{" "}
            <span className="font-medium">... ... Read More</span>
          </p>

          <div className="flex items-center gap-2">
            <button className="border border-gray-200 py-2 px-2 md:px-4 rounded-md text-gray-500 font-Roboto font-normal w-1/2">
              View Details
            </button>

            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-2 md:px-4 rounded-md text-white font-Roboto font-normal w-1/2">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
