import { useEffect, useState } from "react";
import CourseCard, { TCourse } from "./CourseCard";
import searchIcon from "../../assets/Icons/search.svg";
import { useGetAllCoursesQuery } from "../../Redux/Features/Course/courseApi";
import CourseCardLoading from "./CourseCardLoading";
import { useNavigate, useSearchParams } from "react-router-dom";
import Lottie from "lottie-react";
import noCourseFound from "../../assets/no-course-found-animation.json";
// import Filter from "./Filter/Filter";

const Courses = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("search") || ""
  );
  const [finalSearchQuery, setFinalSearchQuery] = useState<string>(
    searchParams.get("search") || ""
  );

  const { data, isLoading } = useGetAllCoursesQuery({
    search: finalSearchQuery,
  });
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const filterButtons = [
    {
      btnName: "All",
      value: "All",
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

  const handleSearch = () => {
    setFinalSearchQuery(searchQuery);
    setSearchParams({ search: searchQuery });
    navigate({
      pathname: "/courses",
      search: `?search=${searchQuery}`,
    });
  };

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
    setFinalSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <div className="max-w-[1500px] w-[90%] mx-auto mt-3 flex flex-col gap-5">
      <div className="bg-gradient-to-tl from-[#15803D] via-[#0F766E] to-[#164E63] flex flex-col gap-5 py-6 rounded-lg">
      {/* Heading */}
      <div className="flex flex-col gap-2 text-center font-Roboto">
        <p className="text-dark-5/70 font-semibold text-base">Explore Programs</p>
        <h1 className="text-3xl text-white font-bold capitalize">
        Our Most Popular Classes
        </h1>
        <p className="text-dark-5/70 font-normal max-w-[700px] mx-auto text-sm">
        Let's join our famous class, the knowledge provided will definitely be useful for you.
        </p>
      </div>

      {/* Search functionality */}
      <div className="relative mx-auto w-full max-w-[500px]">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you looking for?"
          type="text"
          className="border-[1px] border-dark-5 rounded-[100px] bg-white py-2 pl-4 pr-16 focus:border-primary-10 transition duration-300 focus:outline-none w-full"
        />
        <div
          onClick={handleSearch}
          className="bg-dark-5 hover:bg-neutral-55/20 py-2 px-5 absolute right-0 top-0 bottom-0 rounded-r-[100px] cursor-pointer flex items-center justify-center"
        >
          <img src={searchIcon} alt="Search" />
        </div>
      </div>

      <hr className="border border-primary-15/10" />

      {/* Category filter */}
      <div className="flex w-full overflow-x-auto items-center justify-center gap-7 font-Roboto text-xs sm:text-sm">
        {filterButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(button.value)}
            className={`${
              selectedTab === button.value
                ? "border-primary-10 text-white bg-primary-10 shadow-md"
                : "text-dark-5/70 border-primary-15/20 bg-primary-10/30"
            } border px-5 py-2 rounded-[100px] hover:border-primary-10 hover:bg-primary-10 transition duration-500 hover:text-white`}
          >
            {button.btnName}
          </button>
        ))}
      </div>

      </div>

      {/* <div className="flex gap-10 mt-10 w-full">
      <Filter/> */}

{/* grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 xl:gap-10 w-[70%] */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {isLoading ? (
          Array(6)
            .fill(null)
            .map((_, index) => <CourseCardLoading key={index} />)
        ) : data?.data?.length > 0 ? (
          data?.data?.map((course: TCourse) => (
            <CourseCard key={course._id} details={course} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full text-center text-gray-500">
            <div className="max-w-[200px]">
              <Lottie animationData={noCourseFound} loop={true} />
            </div>
            <p>No Course found! Try with different keywords.</p>
          </div>
        )}
      </div>
      {/* </div> */}

      
    </div>
  );
};

export default Courses;