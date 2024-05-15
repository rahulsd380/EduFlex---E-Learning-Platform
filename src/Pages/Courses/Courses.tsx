import CourseCard from "./CourseCard";


const Courses = (): JSX.Element => {
    return (
        <div className=" w-[90%] mx-auto mt-3">
            <div className="flex flex-col gap-3">
            <p className="font-semibold text-[#1A906B] text-base leading-6">
            Explore Programs
          </p>

          <h1 className="capitalize font-bold text-4xl text-[#101828] leading-[44px]">
          Our All Courses
          </h1>

          <p className="font-normal text-[#667085] text-xl leading-7">
          Let's join our famous class, the knowledge provided will definitely be useful for you.
          </p>
            </div>
            <CourseCard/>
        </div>
    );
};

export default Courses;