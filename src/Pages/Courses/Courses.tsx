import { useState } from "react";
import Heading from "../../Components/Heading";
import CourseCard from "./CourseCard";
import search from "../../assets/Icons/search.svg";

const Courses = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const filterButtons = [
    {
      btnName: "All",
      value: "All",
      // action :
    },
    {
      btnName: "Web Development",
      value: "Web Development",
    },
    {
      btnName: "UI/UX Design",
      value: "UI/UX Design",
    },
  ];
  return (
    <div className=" max-w-[1500px] w-[90%] mx-auto mt-3 flex flex-col gap-7">
      {/* Heading */}
      <Heading
        subTitle="Explore Programs"
        heaing="Our Most Popular Class"
        description="Let's join our famous class, the knowledge provided will definitely be useful for you."
      />

       {/* Search functionality */}
<div className="relative mx-auto w-full max-w-[500px]">
             
             <input
               placeholder="What are you looking for?"
               type="text"
               className="border-[1px] border-dark-5 rounded-[100px] bg-white py-2 pl-4 pr-16 focus:border-primary-10 transition duration-300 focus:outline-none w-full"
             />
             <div className="bg-dark-5 py-2 px-5 absolute right-0 top-0 bottom-0 rounded-r-[100px] cursor-pointer flex items-center justify-center">
                <img src={search} alt="" className="" />
             </div>
           </div>

      <hr className="border border-primary-15/10"/>

          

      {/* Category filter */}
      <div className="flex items-center justify-center gap-7 font-Roboto text-sm">
        {filterButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(button.value)}
            className={`${
              selectedTab === button.value
                ? "border-primary-10 text-white bg-primary-10 shadow-md"
                : "text-primary-10 border-primary-15/20"
            } border  px-5 py-2 rounded-[100px] hover:border-primary-10 hover:bg-primary-10 transition duration-500 hover:text-white`}
          >
            {button.btnName}
          </button>
        ))}
      </div>




      <CourseCard />
    </div>
  );
};

export default Courses;
