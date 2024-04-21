import CategoryCard from "./CategoryCard";


const Categories = () => {
    return (
        <div className="font-Roboto flex flex-col gap-7 max-w-[2000px] mx-auto">
            <h1 className="text-gray-600 font-bold text-2xl md:text-4xl text-center">
                Our Top Categories
        </h1>

        <p className="text-center">
        Our Top Categories: Explore our flagship courses, renowned instructors, sought-after certifications, and vibrant community membership.
        </p>

        <CategoryCard/>
        </div>
    );
};

export default Categories;