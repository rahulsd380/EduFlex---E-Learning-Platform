import { FaBookOpenReader } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import rightArrow from "../../assets/Icons/right-arrow.svg"
import blogImg from "../../assets/Images/Blog/1.png"
import { Link } from "react-router-dom";
import { TBlog } from "./Blog";

const BlogsCard : React.FC<TBlog> = ({
    _id,
    imageUrl,
    category,
    date,
    title,
    description,
    readCount,
  }): JSX.Element => {
    return (

            
            <div className="flex flex-col gap-2 border border-dark-5 rounded-xl transition duration-500 transform hover:-translate-y-2">

                {/* Img */}
               <div className="relative">
               <img className="w-full rounded-t-xl" src={blogImg} alt="" />
               <p className="bg-green-500 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 top-3 flex items-center gap-1 text-sm"><FaBookOpenReader/> {readCount} read</p>
               </div>

                    <div className="p-2 flex flex-col gap-3">

                    <div className="flex gap-3 items-center">
                        

                        <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                            {category}
                        </div>
        
                        <p className="text-sm text-gray-500 flex items-center gap-1"><BsCalendarDateFill/>{date}</p>
                                </div> 

                        <h1 className="text-xl text-gray-700 font-medium font-Roboto">{title}</h1>

                    



                    <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">{description} <span className="font-medium">... ... Read More</span></p>

                    <div className="flex items-center justify-between w-full">

                       

                </div>

                <Link to={`/${_id}`} className="px-4 py-3 rounded-md border border-dark-10 hover:border-primary-10 transition duration-300 hover:text-primary-10 text-gray-800 font-medium font-Roboto flex items-center gap-3 max-w-40">
          Read More
          <img className="size-5" src={rightArrow} alt="Read More" />
        </Link>
                    </div>

                
            </div>

            
    );
};

export default BlogsCard;