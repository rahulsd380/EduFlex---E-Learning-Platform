import CourseCard from "./CourseCard";


const Courses = (): JSX.Element => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-10 w-[90%] mx-auto mt-3">
            <CourseCard/>
        </div>
    );
};

export default Courses;