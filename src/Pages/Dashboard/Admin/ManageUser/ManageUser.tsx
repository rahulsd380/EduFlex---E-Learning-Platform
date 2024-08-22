
import { TUser } from "./manageUser.types";
import ManageUserCard from './ManageUserCard';
import profile from "../../../../assets/Images/profileImg.jpeg";

import line from "../../../../assets/Icons/line.svg";
import grid from "../../../../assets/Icons/grid.svg";
import lineWhite from "../../../../assets/Icons/line-white.svg";
import gridWhite from "../../../../assets/Icons/grid-white.svg";
import { useState } from "react";



// Sample data for the users
const users: TUser[] = [
  {
    id: 1,
    name: "Rahul Sutradhar",
    email: "rahulsd380@gmail.com",
    role: "Instructor",
    profileImg: profile
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Developer",
    profileImg: profile
  },
  {
    id: 1,
    name: "Rahul Sutradhar",
    email: "rahulsd380@gmail.com",
    role: "Instructor",
    profileImg: profile
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Developer",
    profileImg: profile
  },
  {
    id: 1,
    name: "Rahul Sutradhar",
    email: "rahulsd380@gmail.com",
    role: "Instructor",
    profileImg: profile
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Developer",
    profileImg: profile
  },
];

const ManageUser = () => {

  const [view, setView] = useState<"grid" | "table">("grid");

  const categories = [
    { value: 'instructor', label: 'Instructor' },
    { value: 'admin', label: 'Admin'},
  ];

  return (
    <div>

      {/* Header / Filter */}
      <div className='flex flex-col md:flex-row items-center justify-between mt-5 border-b pb-3 border-neutral-60/20 w-full'>

      <div className='flex flex-col md:flex-row items-center gap-4 w-full'>
        {/* Search  by Author */}
        <div className="w-full md:w-[40%]">
          <input 
          placeholder='Search By User Name'
          type="text" 
          className='bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full' />
        </div>

        <div className="flex items-center gap-4 w-full">
           {/* Category */}
        <div className="w-full md:w-fit">
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

      <div className='bg-dark-5/20 border border-dark-10/30 focus:border-primary-10 transition duration-300 focus:outline-none rounded md:hidden flex items-center'>

<div onClick={() => setView("table")} className={`${view === "table" ? "bg-primary-10" : "bg-white"} p-2 cursor-pointer`}>
  <img src={view === "table" ? lineWhite : line} alt="" className='size-6'/>
</div>

<div onClick={() => setView("grid")} className={`${view === "grid" ? "bg-primary-10" : "bg-white"} p-2 cursor-pointer`}>
<img src={view === "grid" ? gridWhite : grid} alt="" className='size-6'/>
</div>
</div>

        </div>

       

     


      </div>


        <div className='bg-dark-5/20 border border-dark-10/30 focus:border-primary-10 transition duration-300 focus:outline-none rounded hidden md:flex items-center'>

            <div onClick={() => setView("table")} className={`${view === "table" ? "bg-primary-10" : "bg-white"} p-2 cursor-pointer`}>
              <img src={view === "table" ? lineWhite : line} alt="" className='size-6'/>
            </div>

            <div onClick={() => setView("grid")} className={`${view === "grid" ? "bg-primary-10" : "bg-white"} p-2 cursor-pointer`}>
            <img src={view === "grid" ? gridWhite : grid} alt="" className='size-6'/>
            </div>
        </div>


      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-9">
        {users.map(user => (
          <ManageUserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ManageUser;
