import PopularCourseCard from "./PopularCourseCard";


const PopularCourses = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto font-Roboto flex flex-col gap-10">
            <div className="flex flex-col gap-3">
            <p className="font-semibold text-[#1A906B] text-base leading-6">
            Explore Programs
          </p>

          <h1 className="capitalize font-bold text-4xl text-[#101828] leading-[44px]">
          Our Most Popular Class
          </h1>

          <p className="font-normal text-[#667085] text-xl leading-7">
          Let's join our famous class, the knowledge provided will definitely be useful for you.
          </p>
            </div>

            <PopularCourseCard/>
            </div>
        </div>
    );
};

export default PopularCourses;