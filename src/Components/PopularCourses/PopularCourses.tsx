import { Link } from "react-router-dom";
import PopularCourseCard from "./PopularCourseCard";
import Heading from "../Heading";
import { useGetAllCoursesQuery } from "../../Redux/Features/Course/courseApi";
import CourseCardLoading from "../../Pages/Courses/CourseCardLoading";
import CourseCard from "../../Pages/Courses/CourseCard";

const PopularCourses = () => {
  const {data, isLoading} = useGetAllCoursesQuery({});
  return (
    <div className="mt-20">
      <div className="max-w-[1500px] w-[90%] mx-auto font-Roboto flex flex-col gap-10">
        <Heading
          subTitle="Explore Programs"
          heaing="Our Most Popular Class"
          description="Let's join our famous class, the knowledge provided will definitely be useful for you."
        />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-10 mt-10">
        {isLoading
          ? Array(3).fill(null).map((_, index) => <CourseCardLoading key={index} />)
          : data?.data?.slice(0,3).map(course => <CourseCard key={course._id} details={course} />)}
      </div>

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
