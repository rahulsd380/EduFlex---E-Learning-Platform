import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstCaracter } from "../../../../Utils/capitalizeFirstCaracter";
import blogImg from "../../../../assets/Images/Blog/1.png";
import avatarSrc from "../../../../assets/Images/Avatar (1).png";
import { formatDate } from "../../../../Utils/formatDate";
import { TBlog } from "../../../Blog/blog.types";

const ManageBlogCard: React.FC<TBlog> = ({
  _id,
  blogImgUrl,
  category,
  publishedAt,
  title,
  blogContent,
}) => {
  const formattedDate = formatDate(publishedAt);
  const blogCardContent = blogContent?.length > 60 ? blogContent.substring(0, 60) + '...' : blogContent
  return (
    <Link to={`/dashboard/blog-details`}>
      <div className="bg-neutral-40/10 shadow hover:shadow-lg transition duration-300 rounded-xl max-w-[270px] cursor-pointer">
        <img src={blogImg} alt="" className="rounded-t-xl h-44" />

        <div className="p-4 rounded-b-xl flex flex-col gap-2">
          <div className="flex">
            <div className="bg-primary-10 px-1.5 py-1 text-white flex items-center justify-center rounded-[100px] text-xs">
              {capitalizeFirstCaracter(category)}
            </div>
          </div>
          <h1 className="text-xl text-neutral-60 font-semibold capitalize">
            {title.length > 15 ? title.substring(0, 15) + "..." : title}
          </h1>

          <p className="text-body-text font-semibold text-[11px]" dangerouslySetInnerHTML={{ __html: blogCardContent
           }}/>

          <div className="flex items-center gap-3 mt-2">
            <img src={avatarSrc} alt="" />
            <div>
              <p className="font-semibold text-neutral-60 text-[15px]">
                {"Rahul SD"}
                {/* {author} */}
              </p>
              <p className="font-normal text-neutral-60 text-[11px]">
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ManageBlogCard;
