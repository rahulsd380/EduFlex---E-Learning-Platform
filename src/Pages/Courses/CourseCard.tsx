import img1 from "../../assets/Images/Blog/1.png";
import logo from "../../assets/Images/Logo/fabicon.png";
import { BsCalendarDateFill } from "react-icons/bs";
// import { MdStar } from "react-icons/md";
import { LiaLuggageCartSolid } from "react-icons/lia";

const CourseCard = (): JSX.Element => {
  const courseDetails = [
    {
      id: 1,
      category: "Development",
      categoryIcon: BsCalendarDateFill,
      image: img1,
      title: "Be A MERN Stack Master! || MERN Stack Development",
      author: "Rahul Sutradhar",
      authorImg: logo,
      duration: "6 Months",
      enrollmentStartsIn: "10 days",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias odit ullam labore",
    },
    {
      id: 2,
      category: "Programming",
      categoryIcon: BsCalendarDateFill,
      image: img1,
      title: "Be A Problem Solver!",
      author: "Rahul Sutradhar",
      authorImg: logo,
      duration: "6 Months",
      enrollmentStartsIn: "10 days",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias odit ullam labore",
    },
  ];
  return (
      <>
      {courseDetails.map((detail) => (
        <div key={detail?.id} className="flex flex-col justify-between">
          <div className="relative">
            <img className="w-full rounded-xl" src={detail?.image} alt="" />
            <p className="bg-orange-500 px-3 py-1 rounded-br-lg text-white absolute left-0 top-3 flex items-center gap-1 text-sm">
              <LiaLuggageCartSolid className="text-lg" /> {detail?.category}
            </p>
          </div>

          <div className="p-2 flex flex-col gap-[6px]">
            <div>
              <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">
              {detail?.title}
              </h1>

              <div className="flex items-center justify-between">
                {/* User profile */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full">
                    <img src={detail?.authorImg} alt="" />
                  </div>
                  <h1 className="text-xs sm:text-sm text-gray-700 font-medium font-Roboto">
                  {detail?.author}
                  </h1>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <BsCalendarDateFill />{detail?.duration}
                  </p>

                  <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-sm">
                    Starts in {detail?.enrollmentStartsIn}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">
            {detail?.description}{" "}
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
      ))}
      </>
  );
};

export default CourseCard;
