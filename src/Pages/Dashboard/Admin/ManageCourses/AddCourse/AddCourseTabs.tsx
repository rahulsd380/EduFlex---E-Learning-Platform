import { Dispatch, SetStateAction } from "react";

type TAddCourseTabs={
  activeTab : number;
  setActiveTab : Dispatch<SetStateAction<number>>;
}


const AddCourseTabs : React.FC<TAddCourseTabs> = ({activeTab, setActiveTab}) => {
    return (
        <div className="bg-dark-5/40 p-4 rounded-lg w-[50%]">
          <h1 className="te text-primary-10 font-medium capitalize">
            Provide the course data to add a new course
          </h1>
          <ul className="flex flex-col relative mt-3">
            <div
              className={`${
                (activeTab === 1 && "translate-y-[0px]") ||
                (activeTab === 2 && "translate-y-[55px]") ||
                (activeTab === 3 && "translate-y-[110px]") ||
                (activeTab === 4 && "translate-y-[165px]") ||
                (activeTab === 5 && "translate-y-[222px]")
              } bg-primary-10 absolute text-white w-[85%] h-[60px] transition duration-700 rounded-lg border-transparent cursor-pointer`}
            ></div>

            <li
              className={`${
                activeTab === 1 && "text-white"
              } p-4 z-20 transition duration-300 rounded-full border-transparent`}
             
            >
              Basic Information
            </li>
            <li
              className={`${
                activeTab === 2 && "text-white"
              } p-4 z-20 transition duration-300 rounded-full border-transparent`}
             
            >
              Instructor Details
            </li>
            <li
              className={`${
                activeTab === 3 && "text-white"
              } p-4 z-20 transition duration-300 rounded-full border-transparent`}
             
            >
              Course Content
            </li>
            <li
              className={`${
                activeTab === 4 && "text-white"
              } p-4 z-20 transition duration-300 rounded-full border-transparent`}
             
            >
              Schedule & Certification
            </li>
            <li
              className={`${
                activeTab === 5 && "text-white"
              } p-4 z-20 transition duration-300 rounded-full border-transparent`}
             
            >
              Description
            </li>
          </ul>
        </div>
    );
};

export default AddCourseTabs;