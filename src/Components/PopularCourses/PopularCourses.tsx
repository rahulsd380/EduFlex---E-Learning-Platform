import { Link } from "react-router-dom";
import PopularCourseCard from "./PopularCourseCard";


const PopularCourses = () => {
    return (
        <div className="mt-20">
            <div className="max-w-[1500px] w-[90%] mx-auto font-Roboto flex flex-col gap-10">
            <div className="flex flex-col gap-3">
            <p className="font-semibold text-primary-15 text-base leading-6">
            Explore Programs
          </p>

          <h1 className="capitalize font-bold text-4xl text-neutral-5 leading-[44px]">
          Our Most Popular Class
          </h1>

          <p className="font-normal text-body-text text-xl leading-7">
          Let's join our famous class, the knowledge provided will definitely be useful for you.
          </p>
            </div>

            <PopularCourseCard/>

            <div className="flex justify-center">
            <Link
              to={"/courses"}
              className="bg-primary-10 py-4 px-7 rounded-lg border border-primary-10 text-white font-medium text-lg shadow mt-3"
            >
              Explore All Courses
            </Link>
            </div>
            </div>
        </div>
    );
};

export default PopularCourses;