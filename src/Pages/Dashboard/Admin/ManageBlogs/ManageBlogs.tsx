import ManageBlogCard from "./ManageBlogCard";
import { useState } from "react";
import AddBlogModal from "./AddBlogModal";
import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../../../Redux/Features/Blog/blogApi";
import { TBlog } from "../../../Blog/blog.types";
import plus from "../../../../assets/Icons/plus-icon.svg";
import line from "../../../../assets/Icons/line.svg";
import grid from "../../../../assets/Icons/grid.svg";
import lineWhite from "../../../../assets/Icons/line-white.svg";
import gridWhite from "../../../../assets/Icons/grid-white.svg";

const ManageBlogs = () => {
  const { data, isLoading } = useGetAllBlogsQuery({});
  const [openAddBlogModal, setOpenAddBlogModal] = useState<boolean>(false);

  const [view, setView] = useState<"grid" | "table">("grid");

  const categories = [
    { value: 'development', label: 'Development' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'design', label: 'Design' },
    { value: 'management', label: 'Management' },
  ];



  return (
    <div>

        {/* Header / Filter */}
      <div className='p-2 md:p-4 rounded-lg bg-white border border-neutral-60/20 flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-0 mt-5'>
      <div className='flex flex-col md:flex-row items-center gap-4 w-full'>
        {/* Search  by couse title */}
        <div className='w-full md:w-fit'>
          <input 
          placeholder='Search By Blog Title'
          type="text" 
          className='bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full'/>
        </div>

        {/* Search  by Author */}
        <div className='w-full md:w-fit'>
          <input 
          placeholder='Search By Author'
          type="text" 
          className='bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full' />
        </div>

        {/* Category */}
        <div className='w-full md:w-fit'>
        <select
          id="category"
          className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
        >
          <option value="" disabled selected>Find By Category</option>
          {categories.map(category => (
            <option key={category.value} value={category.value}>{category.label}</option>
          ))}
        </select>
        
      </div>

        {/* Search btn */}
      {/* <div>
      <button className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full hover:bg-primary-10 hover:text-white flex items-center gap-2">
      <img src={search} alt="" className="" />
        Search
      </button>
      </div> */}
      </div>

      <div className='flex items-center justify-start md:justify-center xl:justify-end gap-4 w-full'>

        <div className='bg-dark-5/20 border border-dark-10/30 focus:border-primary-10 transition duration-300 focus:outline-none rounded flex items-center'>

            <div onClick={() => setView("table")} className={`${view === "table" ? "bg-primary-10" : "bg-white"} p-2 cursor-pointer`}>
              <img src={view === "table" ? lineWhite : line} alt="" className='size-6'/>
            </div>

            <div onClick={() => setView("grid")} className={`${view === "grid" ? "bg-primary-10" : "bg-white"} p-2 cursor-pointer`}>
            <img src={view === "grid" ? gridWhite : grid} alt="" className='size-6'/>
            </div>
        </div>

      <Link to={"/dashboard/add-blog"} className="border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full md:w-fit bg-primary-10 text-white flex justify-center items-center gap-2 text-xs md:text-base">
      <img src={plus} alt="" className="size-6" />
        Create New Blog
      </Link>

      </div>


      </div>

      <div className="grid grid-cols-4 items-center gap-6 mt-5">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.data?.map((blog: TBlog) => (
            <ManageBlogCard key={blog._id} {...blog} />
          ))
        )}
      </div>
      {/* <ManageBlogCard {...blogData} /> */}
      <AddBlogModal
        openAddBlogModal={openAddBlogModal}
        setOpenAddBlogModal={setOpenAddBlogModal}
      />
    </div>
  );
};

export default ManageBlogs;
