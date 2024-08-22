import YourCourseCard from "./YourCourseCard";
import image from "../../../../assets/Images/Blog/1.png";
import { Link } from "react-router-dom";


const YourCourses = () => {

    const courses = [
        {
        _id : 1,
        img : image,
        title : "Learn Web Development",
        completed : "80",
        lessons : "100",
        duration : "190",
        },
        {
        _id : 1,
        img : image,
        title : "Learn Web Development",
        completed : "80",
        lessons : "100",
        duration : "190",
        },
        {
        _id : 1,
        img : image,
        title : "Learn Web Development",
        completed : "80",
        lessons : "100",
        duration : "190",
        },
    ]
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full font-Roboto">
           <div className="flex items-center justify-between border-b border-dark-5 pb-2">
           <h1 className="text-xl text-body-text font-semibold"> Your courses</h1>
           <Link to={"/"} className="text-body-text text-sm hover:underline">See All</Link>
           </div>
            <div className="flex flex-col w-full gap-5 mt-6">
                {
                    courses.map((course) => 
                        <YourCourseCard details={course}/>
                )
                }
            </div>
        </div>
    );
};

export default YourCourses;