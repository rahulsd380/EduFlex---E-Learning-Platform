import img1 from "../../assets/Images/Blog/1.png"
import img2 from "../../assets/Images/Blog/2.png"
import img3 from "../../assets/Images/Blog/3.png"
import img4 from "../../assets/Images/Blog/4.png"
import logo from "../../assets/Images/Logo/fabicon.png"
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { GoComment } from "react-icons/go";
import { FaBookOpenReader } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

const BlogsCard = (): JSX.Element => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-10">

            
            <div className="flex flex-col">
               <div className="relative">
               <img className="w-full rounded-xl" src={img1} alt="" />
               <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm"><FaBookOpenReader/> 828 read</p>
               </div>

                    <div className="p-2 flex flex-col gap-[6px]">
                    <div>
                        <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">How to become a programmer.</h1>
                        <div className="flex gap-3 items-center">
                        <p className="text-sm text-gray-500 flex items-center gap-1"><BsCalendarDateFill/>Posted 7 days ago</p>
                        <div className="flex items-center gap-1">
                    <AiFillLike className="text-sm text-gray-500"/>
                    <p className="text-sm text-gray-500">100</p>
                </div>

                <div className="flex items-center gap-1">
                    <p className="text-sm text-gray-500">55</p>
                    <MdComment className="text-sm text-gray-500"/>
                </div>

                <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                    Programming
                </div>
                        </div>
                    </div>
                    <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias odit ullam labore. Necessitatibus totam eligendi officia? Dicta doe pariatur <span className="font-medium">... ... Read More</span></p>

                    <div className="flex items-center justify-between w-full">

                        {/* User profile */}
                    <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                        <img src={logo} alt="" />
                    </div>

                    <div>
                        <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">Rahul Sutradhar</h1>
                        <p className="xs:text-xs text-gray-500">Software Engineer</p>
                    </div>
                    </div>

                    <div className="flex gap-5">
                <button className="flex flex-col items-center gap-[2px]">
                    <SlLike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Like</p>
                </button>

                <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                    <SlDislike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Dislike</p>
                </button>

                <button className="flex flex-col items-center gap-[2px]">
                    <GoComment className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Comment</p>
                </button>
                </div>
                </div>
                    </div>

                
            </div>

            
            <div className="flex flex-col">
               <div className="relative">
               <img className="w-full rounded-xl" src={img2} alt="" />
               <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm"><FaBookOpenReader/> 828 read</p>
               </div>

                    <div className="p-2 flex flex-col gap-[6px]">
                    <div>
                        <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">How to become a programmer.</h1>
                        <div className="flex gap-3 items-center">
                        <p className="text-sm text-gray-500 flex items-center gap-1"><BsCalendarDateFill/>Posted 7 days ago</p>
                        <div className="flex items-center gap-1">
                    <AiFillLike className="text-sm text-gray-500"/>
                    <p className="text-sm text-gray-500">100</p>
                </div>

                <div className="flex items-center gap-1">
                    <p className="text-sm text-gray-500">55</p>
                    <MdComment className="text-sm text-gray-500"/>
                </div>

                <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                    Programming
                </div>
                        </div>
                    </div>
                    <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias odit ullam labore. Necessitatibus totam eligendi officia? Dicta doe pariatur <span className="font-medium">... ... Read More</span></p>

                    <div className="flex items-center justify-between w-full">

                        {/* User profile */}
                    <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                        <img src={logo} alt="" />
                    </div>

                    <div>
                        <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">Rahul Sutradhar</h1>
                        <p className="xs:text-xs text-gray-500">Software Engineer</p>
                    </div>
                    </div>

                    <div className="flex gap-5">
                <button className="flex flex-col items-center gap-[2px]">
                    <SlLike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Like</p>
                </button>

                <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                    <SlDislike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Dislike</p>
                </button>

                <button className="flex flex-col items-center gap-[2px]">
                    <GoComment className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Comment</p>
                </button>
                </div>
                </div>
                    </div>

                
            </div>

            
            <div className="flex flex-col">
               <div className="relative">
               <img className="w-full rounded-xl" src={img3} alt="" />
               <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm"><FaBookOpenReader/> 828 read</p>
               </div>

                    <div className="p-2 flex flex-col gap-[6px]">
                    <div>
                        <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">How to become a programmer.</h1>
                        <div className="flex gap-3 items-center">
                        <p className="text-sm text-gray-500 flex items-center gap-1"><BsCalendarDateFill/>Posted 7 days ago</p>
                        <div className="flex items-center gap-1">
                    <AiFillLike className="text-sm text-gray-500"/>
                    <p className="text-sm text-gray-500">100</p>
                </div>

                <div className="flex items-center gap-1">
                    <p className="text-sm text-gray-500">55</p>
                    <MdComment className="text-sm text-gray-500"/>
                </div>

                <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                    Programming
                </div>
                        </div>
                    </div>
                    <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias odit ullam labore. Necessitatibus totam eligendi officia? Dicta doe pariatur <span className="font-medium">... ... Read More</span></p>

                    <div className="flex items-center justify-between w-full">

                        {/* User profile */}
                    <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                        <img src={logo} alt="" />
                    </div>

                    <div>
                        <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">Rahul Sutradhar</h1>
                        <p className="xs:text-xs text-gray-500">Software Engineer</p>
                    </div>
                    </div>

                    <div className="flex gap-5">
                <button className="flex flex-col items-center gap-[2px]">
                    <SlLike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Like</p>
                </button>

                <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                    <SlDislike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Dislike</p>
                </button>

                <button className="flex flex-col items-center gap-[2px]">
                    <GoComment className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Comment</p>
                </button>
                </div>
                </div>
                    </div>

                
            </div>

            
            <div className="flex flex-col">
               <div className="relative">
               <img className="w-full rounded-xl" src={img4} alt="" />
               <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm"><FaBookOpenReader/> 828 read</p>
               </div>

                    <div className="p-2 flex flex-col gap-[6px]">
                    <div>
                        <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">How to become a programmer.</h1>
                        <div className="flex gap-3 items-center">
                        <p className="text-sm text-gray-500 flex items-center gap-1"><BsCalendarDateFill/>Posted 7 days ago</p>
                        <div className="flex items-center gap-1">
                    <AiFillLike className="text-sm text-gray-500"/>
                    <p className="text-sm text-gray-500">100</p>
                </div>

                <div className="flex items-center gap-1">
                    <p className="text-sm text-gray-500">55</p>
                    <MdComment className="text-sm text-gray-500"/>
                </div>

                <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                    Programming
                </div>
                        </div>
                    </div>
                    <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias odit ullam labore. Necessitatibus totam eligendi officia? Dicta doe pariatur <span className="font-medium">... ... Read More</span></p>

                    <div className="flex items-center justify-between w-full">

                        {/* User profile */}
                    <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                        <img src={logo} alt="" />
                    </div>

                    <div>
                        <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">Rahul Sutradhar</h1>
                        <p className="xs:text-xs text-gray-500">Software Engineer</p>
                    </div>
                    </div>

                    <div className="flex gap-5">
                <button className="flex flex-col items-center gap-[2px]">
                    <SlLike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Like</p>
                </button>

                <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                    <SlDislike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Dislike</p>
                </button>

                <button className="flex flex-col items-center gap-[2px]">
                    <GoComment className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Comment</p>
                </button>
                </div>
                </div>
                    </div>

                
            </div>

            
            <div className="flex flex-col">
               <div className="relative">
               <img className="w-full rounded-xl" src={img1} alt="" />
               <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm"><FaBookOpenReader/> 828 read</p>
               </div>

                    <div className="p-2 flex flex-col gap-[6px]">
                    <div>
                        <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">How to become a programmer.</h1>
                        <div className="flex gap-3 items-center">
                        <p className="text-sm text-gray-500 flex items-center gap-1"><BsCalendarDateFill/>Posted 7 days ago</p>
                        <div className="flex items-center gap-1">
                    <AiFillLike className="text-sm text-gray-500"/>
                    <p className="text-sm text-gray-500">100</p>
                </div>

                <div className="flex items-center gap-1">
                    <p className="text-sm text-gray-500">55</p>
                    <MdComment className="text-sm text-gray-500"/>
                </div>

                <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                    Programming
                </div>
                        </div>
                    </div>
                    <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias odit ullam labore. Necessitatibus totam eligendi officia? Dicta doe pariatur <span className="font-medium">... ... Read More</span></p>

                    <div className="flex items-center justify-between w-full">

                        {/* User profile */}
                    <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                        <img src={logo} alt="" />
                    </div>

                    <div>
                        <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">Rahul Sutradhar</h1>
                        <p className="xs:text-xs text-gray-500">Software Engineer</p>
                    </div>
                    </div>

                    <div className="flex gap-5">
                <button className="flex flex-col items-center gap-[2px]">
                    <SlLike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Like</p>
                </button>

                <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                    <SlDislike className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Dislike</p>
                </button>

                <button className="flex flex-col items-center gap-[2px]">
                    <GoComment className="text-md text-gray-700"/>
                    <p className="text-xs text-gray-700 font-medium font-Roboto">Comment</p>
                </button>
                </div>
                </div>
                    </div>

                
            </div>

            
        </div>
    );
};

export default BlogsCard;