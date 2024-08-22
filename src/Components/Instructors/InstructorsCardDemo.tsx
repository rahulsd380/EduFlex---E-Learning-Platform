import React from "react";
import linkedin from "../../assets/Icons/Social Icons/linkedin.svg";
import facebook from "../../assets/Icons/Social Icons/facebook.svg";

type TInstructor = {
  id: number;
  img: string;
  instructorName: string;
  title: string;
  companyInfo: string;
  fbProfile: string;
  linkedinProfile: string;
};

type InstructorsCardProps = {
  instructors: TInstructor[];
};

const InstructorsCardDemo: React.FC<InstructorsCardProps> = ({ instructors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {instructors.map((instructor) => (
        <div
          key={instructor.id}
          className="p-6 rounded-xl bg-gray-100 border-[1px] border-dark-5 border-gray-200 transition duration-500 text-center"
        >
          <div className="w-32 h-32 mx-auto flex justify-center items-center bg-secondary-5 rounded-lg">
            <img className="w-full rounded-lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
          </div>

          <h1 className="text-3xl text-neutral-60 font-bold mt-4">
            {instructor.instructorName}
          </h1>

          <p className="text-primary-10 font-normal text-base mt-1">
            {instructor.title}
          </p>

          <p className="text-body-text font-normal text-base mt-4">
            {instructor.companyInfo}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <a href={instructor.linkedinProfile} target="_blank">
              <img
                className="w-[41px] cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={linkedin}
                alt=""
              />
            </a>
            <a href={instructor.fbProfile} target="_blank">
              <img
                className="w-10 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={facebook}
                alt=""
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorsCardDemo;
