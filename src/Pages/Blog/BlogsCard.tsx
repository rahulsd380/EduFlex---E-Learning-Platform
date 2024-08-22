import { FaBookOpenReader } from "react-icons/fa6";
import rightArrow from "../../assets/Icons/right-arrow.svg";
import blogImg from "../../assets/Images/Blog/1.png";
import date from "../../assets/Icons/date.svg";
import { Link } from "react-router-dom";
import { TBlog } from "./Blog";
import { capitalizeFirstCaracter } from "../../Utils/capitalizeFirstCaracter";
import { formatDate } from "../../Utils/formatDate";

const BlogsCard: React.FC<TBlog> = ({
  _id,
  // imageUrl,
  category,
  publishedAt,
  title,
  blogContent,
  // readCount,
}): JSX.Element => {


  const formattedDate = formatDate(publishedAt);

  const blogCardContent = blogContent?.length > 100 ? blogContent.substring(0, 100) + '...' : blogContent

  return (
    <div className="flex flex-col gap-2 border border-dark-5 rounded-xl transition duration-500 transform hover:-translate-y-2">
      {/* Img */}
      <div className="relative">
        <img className="w-full rounded-t-xl" src={blogImg} alt="" />
        <p className="bg-green-500 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 top-3 flex items-center gap-1 text-sm">
          <FaBookOpenReader /> 399 read
        </p>
      </div>

      <div className="p-3 flex flex-col gap-3">
        <div className="flex gap-5 items-center">
          <p className="font-semibold text-primary-10 text-[14px] leading-5">
          {capitalizeFirstCaracter(category)}
          </p>

          <p className="text-sm text-gray-500 flex items-center gap-1">
            <img src={date} alt="" className="size-4" />
            {formattedDate}
          </p>
        </div>

        <h1 className="capitalize font-bold text-xl text-neutral-60">
          {title}
        </h1>

        <p
          className="font-normal text-body-text text-base leading-6"
          dangerouslySetInnerHTML={{ __html: blogCardContent
           }}
        />

        <div className="flex items-center justify-between w-full"></div>

        <Link
          to={`/blogDetails/${_id}`}
          className="transition duration-300 hover:text-primary-10 text-gray-800 font-medium font-Roboto flex items-center gap-3 max-w-40 "
        >
          Read More
          <img className="size-5" src={rightArrow} alt="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
