import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { FaArrowRightLong } from "react-icons/fa6";


const Categories = () => {
    return (
        <div className="font-Roboto flex flex-col gap-7 max-w-[2000px] mx-auto mt-20">
            <h1 className="text-gray-600 font-bold text-2xl md:text-4xl text-center">
                Our Top Categories
        </h1>

        <p className="text-center">
        Our Top Categories: Explore our flagship courses, renowned instructors, sought-after certifications, and vibrant community membership.
        </p>

        <CategoryCard/>

        <div className="flex justify-center">
        <Link
            to={"/"}
            className="bg-gradient-to-r from-sky-500 to-blue-700 py-3 px-9 rounded-md text-white font-normal transition duration-300 flex items-center gap-3 transform hover:-translate-y-0.5 "
          >
            Explore More Categories <FaArrowRightLong />
          </Link>
        </div>
        </div>
    );
};

export default Categories;