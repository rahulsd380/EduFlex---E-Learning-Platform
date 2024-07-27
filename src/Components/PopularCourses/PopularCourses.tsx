import { Link } from "react-router-dom";
import PopularCourseCard from "./PopularCourseCard";
import Heading from "../Heading";


const PopularCourses = () => {
    return (
        <div className="mt-20">
            <div className="max-w-[1500px] w-[90%] mx-auto font-Roboto flex flex-col gap-10">

            <Heading
      subTitle="Explore Programs"
      heaing="Our Most Popular Class"
      description="Let's join our famous class, the knowledge provided will definitely be useful for you."
      />

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