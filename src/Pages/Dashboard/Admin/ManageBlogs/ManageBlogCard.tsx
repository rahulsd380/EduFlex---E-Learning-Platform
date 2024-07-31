import React from "react";
import { Link } from "react-router-dom";

interface ManageBlogCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  author: string;
  daysAgo: number;
  avatarSrc: string;
}

const ManageBlogCard: React.FC<ManageBlogCardProps> = ({
  imageSrc,
  category,
  title,
  description,
  author,
  daysAgo,
  avatarSrc,
}) => {
  return (
    <Link to={`/admin/blog-details`}>
      <div className="bg-neutral-40/10 shadow hover:shadow-lg transition duration-300 rounded-xl max-w-[270px] cursor-pointer">
        <img src={imageSrc} alt="" className="rounded-t-xl h-44" />

        <div className="p-4 rounded-b-xl flex flex-col gap-3">
          <div className="flex">
            <div className="bg-primary-10 px-1.5 py-1 text-white flex items-center justify-center rounded-[100px] text-xs">
              {category}
            </div>
          </div>
          <h1 className="text-xl text-neutral-60 font-semibold capitalize">
            {title}
          </h1>

          <p className="text-body-text font-semibold text-[11px]">
            {description}
          </p>

          <div className="flex items-center gap-3">
            <img src={avatarSrc} alt="" />
            <div>
              <p className="font-semibold text-neutral-60 text-[15px]">
                {author}
              </p>
              <p className="font-normal text-neutral-60 text-[11px]">
                {daysAgo} days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ManageBlogCard;
