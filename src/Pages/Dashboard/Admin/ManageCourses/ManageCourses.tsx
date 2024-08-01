import React, { useState } from 'react';
import ManageCourseCard from './ManageCourseCard';
import img1 from "../../../../assets/Images/Blog/1.png";
import avatar3 from "../../../../assets/Images/Avatar2.png";
import { TCourse } from './manageCourse.types';
import search from "../../../../assets/Icons/search.svg";
import plus from "../../../../assets/Icons/plus-icon.svg";
import line from "../../../../assets/Icons/line.svg";
import grid from "../../../../assets/Icons/grid.svg";
import lineWhite from "../../../../assets/Icons/line-white.svg";
import gridWhite from "../../../../assets/Icons/grid-white.svg";

// Course dummy data
const coursesData : TCourse[] = [
  {
    image: img1,
    category: "Development",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
  {
    image: img1,
    category: "Marketing",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
  {
    image: img1,
    category: "Design",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
  {
    image: img1,
    category: "Management",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
  {
    image: img1,
    category: "Programming",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
];

const ManageCourses: React.FC = () => {
  const [view, setView] = useState<"grid" | "table">("grid");

  const categories = [
    { value: 'development', label: 'Development' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'design', label: 'Design' },
    { value: 'management', label: 'Management' },
  ];
  
  return (
    <div className='flex flex-col gap-10'>
      <div className='p-4 rounded-lg bg-white border border-neutral-60/20 flex items-center justify-between'>

      <div className='flex items-center gap-4'>
        {/* Search  by couse title */}
        <div>
          <input 
          placeholder='Search by title'
          type="text" 
          className='bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full'/>
        </div>

        {/* Search  by Author */}
        <div>
          <input 
          placeholder='Search by author'
          type="text" 
          className='bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the blog title' />
        </div>

        {/* Category */}
        <div className="">
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
      <div>
      <button className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full hover:bg-primary-10 hover:text-white flex items-center gap-2">
      <img src={search} alt="" className="" />
        Search
      </button>
      </div>
      </div>

      <div className='flex items-center gap-4'>

        <div className='bg-dark-5/20 border border-dark-10/30 focus:border-primary-10 transition duration-300 focus:outline-none rounded flex items-center'>

            <div onClick={() => setView("table")} className={`${view === "table" ? "bg-primary-10" : "bg-white"} p-2 cursor-pointer`}>
              <img src={view === "table" ? lineWhite : line} alt="" className='size-6'/>
            </div>

            <div onClick={() => setView("grid")} className={`${view === "grid" ? "bg-primary-10" : "bg-white"} p-2 cursor-pointer`}>
            <img src={view === "grid" ? gridWhite : grid} alt="" className='size-6'/>
            </div>
        </div>
      <div>
      <button className="border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full bg-primary-10 text-white flex items-center gap-2">
      <img src={plus} alt="" className="size-6" />
        Create New Course
      </button>
      </div>
      </div>


      </div>

      {/* Mapping all the courses */}
      <div className="flex flex-wrap gap-10">
      {coursesData.map((course, index) => (
        <ManageCourseCard
          key={index}
          course={course}
        />
      ))}
    </div>
    </div>
  );
};

export default ManageCourses;
