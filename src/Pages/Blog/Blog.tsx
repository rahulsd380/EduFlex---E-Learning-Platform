import Heading from "../../Components/Heading";
import Reusable from "../../Components/Reusable/Reusable";
import BlogsCard from "./BlogsCard";
import searchIcon from "../../assets/Icons/search.svg";
import { useState } from "react";
import { useGetAllBlogsQuery } from "../../Redux/Features/Blog/blogApi";
import BlogsCardLoader from "../../Components/Loaders/BlogCardLoader";
import { TBlog } from "./blog.types";

const Blog = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const {data, isLoading} = useGetAllBlogsQuery({});

  const filterButtons = [
    {
      btnName: "All",
      value: "All",
    },
    {
      btnName: "Web Development",
      value: "Web Development",
    },
    {
      btnName: "UI/UX Design",
      value: "UI/UX Design",
    },
  ];

  return (
    <div className="max-w-[1500px] w-[90%] mx-auto flex flex-col gap-5 mt-3">
      {/* Heading */}
      <Heading
        subTitle="Explore Blogs"
        heaing="Explore Knowledge Through Insightful Blogs"
        description="Stay Updated with the Latest Educational Trends and Tips"
      />

      {/* Search functionality */}
      <div className="relative mx-auto w-full max-w-[500px]">
        <input
          placeholder="What are you looking for?"
          type="text"
          className="border-[1px] border-dark-5 rounded-[100px] bg-white py-2 pl-4 pr-16 focus:border-primary-10 transition duration-300 focus:outline-none w-full"
        />
        <div
          className="bg-dark-5 py-2 px-5 absolute right-0 top-0 bottom-0 rounded-r-[100px] cursor-pointer flex items-center justify-center"
        >
          <img src={searchIcon} alt="Search" />
        </div>
      </div>

      <hr className="border border-primary-15/10" />

      {/* Category filter */}
      <div className="flex w-full overflow-x-auto items-center justify-center gap-7 font-Roboto text-xs sm:text-sm">
        {filterButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(button.value)}
            className={`${
              selectedTab === button.value
                ? "border-primary-10 text-white bg-primary-10 shadow-md"
                : "text-primary-10 border-primary-15/20"
            } border px-5 py-2 rounded-[100px] hover:border-primary-10 hover:bg-primary-10 transition duration-500 hover:text-white`}
          >
            {button.btnName}
          </button>
        ))}
      </div>

      <Reusable
        subHeading={"Our Blogs"}
        heading={"Unveiling Insights: Your Go-To Blog Hub"}
        description={
          "Embark on a journey of enlightenment with our diverse blog. Explore a wealth of insights, ideas, and inspiration to enrich your mind and soul."
        }
      />

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {
          isLoading ? 
          Array.from({ length: 6 }).map((_, index) => <BlogsCardLoader key={index} />)
          :
          data?.data?.map((blog : TBlog) => (
            <BlogsCard
              key={blog._id}
              _id={blog._id}
              blogImgUrl={blog.blogImgUrl}
              category={blog.category}
              publishedAt={blog.publishedAt}
              title={blog.title}
              blogContent={blog.blogContent}
              // readCount={blog.readCount}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Blog;
