import blogImg from "../../../../assets/Images/Blog/1.png";
import avatar1 from "../../../../assets/Images/Avatar.png";
import ManageBlogCard from "./ManageBlogCard";
import { useState } from "react";
import AddBlogModal from "./AddBlogModal";

const ManageBlogs = () => {
  const [openAddBlogModal, setOpenAddBlogModal] = useState<boolean>(false);
  const blogData = {
    imageSrc: blogImg,
    category: "Development",
    title: "How to make website?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et ducimus commodi tempore? Odi.",
    author: "Rahul Sutradhar",
    daysAgo: 7,
    avatarSrc: avatar1,
  };

  return (
    <div>
      <div className="flex justify-end">
                <button onClick={() => setOpenAddBlogModal(true)} className="px-3 py-2 max-w-[150px] bg-primary-10 text-white w-full rounded mt-5">
            Add New Blog
          </button>
                </div>
      <ManageBlogCard {...blogData} />
      <AddBlogModal openAddBlogModal={openAddBlogModal} setOpenAddBlogModal={setOpenAddBlogModal}/>
    </div>
  );
};

export default ManageBlogs;
