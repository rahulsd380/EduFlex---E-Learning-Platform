import { AiFillLike } from "react-icons/ai";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdComment } from "react-icons/md";
import img1 from "../../assets/Images/Blog/1.png";
import img2 from "../../assets/Images/Blog/2.png";
import img3 from "../../assets/Images/Blog/3.png";
import img4 from "../../assets/Images/Blog/4.png";
import logo from "../../assets/Images/Logo/fabicon.png";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { GoComment } from "react-icons/go";
import { FaBookOpenReader } from "react-icons/fa6";
import facebook from "../../assets/Images/Social edia Icons/facebook.png";
import twitter from "../../assets/Images/Social edia Icons/twitter.png";
import instagram from "../../assets/Images/Social edia Icons/instagram.png";
import linkedin from "../../assets/Images/Social edia Icons/linkedin.png";
import { FaShare } from "react-icons/fa";
import { BiSolidDislike } from "react-icons/bi";

const BlogDetails = (): JSX.Element => {
  return (
    <div className="grid grid-cols-3 gap-8 w-11/12 mx-auto mt-5">
      <div className="col-span-2 border shadow p-5 rounded-md flex flex-col gap-2">
        <div className="flex justify-between items-center">
        <div
          className="bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-2 md:px-4 rounded
         text-white font-Roboto font-normal w-fit">
          Programming
        </div>

        <div className="flex items-center gap-5">
            <FaShare className="text-gray-500 text-3xl font-Roboto font-normal"/>
          <img className="w-10 transform transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer" src={facebook} alt="" />
          <img className="w-10 transform transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer" src={twitter} alt="" />
          <img className="w-10 transform transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer" src={instagram} alt="" />
          <img className="w-10 transform transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer" src={linkedin} alt="" />
        </div>
        </div>

        <h1 className="text-3xl text-gray-700 font-semibold font-Roboto">
          How to become a programmer. How to become a programmer.
        </h1>

        <div className="flex gap-6 items-center">
          {/* User profile */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full">
              <img src={logo} alt="" />
            </div>
            <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">
              Rahul Sutradhar
            </h1>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-1">
            <BsCalendarDateFill />7 days ago
          </p>
          <div className="flex items-center gap-1">
            <AiFillLike className="text-sm text-gray-500" />
            <p className="text-sm text-gray-500">100</p>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-500">55</p>
            <MdComment className="text-sm text-gray-500" />
          </div>
        </div>

        <img className="w-full rounded-lg" src={img2} alt="" />

        <div className="border-b pb-2">
        <h1 className="text-xl text-gray-500 font-semibold font-Roboto">
          Continue...
        </h1>

          <p className=" text-gray-700 font-Roboto text-justify mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorem error commodi accusamus delectus optio velit, voluptate
            maiores nemo vero, reiciendis hic voluptatum cum? Voluptatem earum
            expedita, impedit similique sunt vero. Culpa harum nobis assumenda
            a, ducimus explicabo ratione dignissimos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet dicta incidunt odio, at quod
            tempore error fugit laboriosam tenetur aliquid.
          </p>

          <p className=" text-gray-700 font-Roboto text-justify mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorem error commodi accusamus delectus optio velit, voluptate
            maiores nemo vero, reiciendis hic voluptatum cum? Voluptatem earum
            expedita, impedit similique sunt vero. Culpa harum nobis assumenda
            a, ducimus explicabo ratione dignissimos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet dicta incidunt odio, at quod
            tempore error fugit laboriosam tenetur aliquid.
          </p>
        </div>

        {/* Comment Section */}
        <div className="border-b pb-2 rounded-lg mt-5">
        <h1 className="text-xl text-gray-500 font-semibold font-Roboto border-b pb-2">
          Share your thoughts!
        </h1>
        <div className="flex flex-col gap-2 mt-2">
            {/* Logged In User profile */}
          <div className="flex items-center gap-1">
            <div className="w-7 h-7 rounded-full">
              <img src={logo} alt="" />
            </div>
            <h1 className="text-sm sm:text-lg text-gray-600 font-semibold font-Roboto">
              Rahul Sutradhar
            </h1>
          </div>
          
          <textarea className=" border border-gray-300 w-full h-56 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300" name=""></textarea>

          <button
          className="bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-2 md:px-4 rounded-lg
         text-white font-Roboto font-normal w-fit">
          Comment
        </button>
        </div>
        </div>

        {/* All comments */}
        <h1 className="text-xl text-gray-500 font-semibold font-Roboto border-b pb-2">
          All thoughts from the readers
        </h1>

        <div className="border-b pb-2 mt-5">
        <div className="flex justify-between items-center">
            {/* User */}
        <div className="flex items-center gap-1 mt-2">
            <div className="w-10 h-10 rounded-full">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col">
            <h1 className="text-sm sm:text-lg text-gray-600 font-semibold font-Roboto">
              Rahul Sutradhar
            </h1>
            <p className="text-sm text-gray-500">
            7 days ago
          </p>
            </div>
          </div>
            {/* Like and dislike button on user comment */}
          <div className="border border-gray-200 rounded-lg px-3 py-2">
          <div>
                        <div className="flex gap-3 items-center">
                        <div className="flex items-center gap-1">
                    <AiFillLike className="text-sm text-gray-500"/>
                    <p className="text-sm text-gray-500">100</p>
                </div>

                <div className="h-[20px] w-0.5 bg-gray-300">

                </div>

                <div className="flex items-center gap-1">
                    <p className="text-sm text-gray-500">55</p>
                    <BiSolidDislike className="text-sm text-gray-500"/>
                </div>
                        </div>
                    </div>
          </div>
          </div>

          <p className=" text-gray-700 font-Roboto text-justify mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorem error commodi accusamus delectus optio velit, voluptate
            maiores nemo vero, reiciendis hic voluptatum cum? Voluptatem earum
            expedita, impedit similique sunt vero. Culpa harum nobis assumenda
            a, ducimus explicabo ratione dignissimos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet dicta incidunt odio, at quod
            tempore error fugit laboriosam tenetur aliquid.
          </p>
        </div>

        <div className="border-b pb-2 mt-5">
        <div className="flex justify-between items-center">
            {/* User */}
        <div className="flex items-center gap-1 mt-2">
            <div className="w-10 h-10 rounded-full">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col">
            <h1 className="text-sm sm:text-lg text-gray-600 font-semibold font-Roboto">
              Rahul Sutradhar
            </h1>
            <p className="text-sm text-gray-500">
            7 days ago
          </p>
            </div>
          </div>
            {/* Like and dislike button on user comment */}
          <div className="border border-gray-200 rounded-lg px-3 py-2">
          <div>
                        <div className="flex gap-3 items-center">
                        <div className="flex items-center gap-1">
                    <AiFillLike className="text-sm text-gray-500"/>
                    <p className="text-sm text-gray-500">100</p>
                </div>

                <div className="h-[20px] w-0.5 bg-gray-300">

                </div>

                <div className="flex items-center gap-1">
                    <p className="text-sm text-gray-500">55</p>
                    <BiSolidDislike className="text-sm text-gray-500"/>
                </div>
                        </div>
                    </div>
          </div>
          </div>

          <p className=" text-gray-700 font-Roboto text-justify mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorem error commodi accusamus delectus optio velit, voluptate
            maiores nemo vero, reiciendis hic voluptatum cum? Voluptatem earum
            expedita, impedit similique sunt vero. Culpa harum nobis assumenda
            a, ducimus explicabo ratione dignissimos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet dicta incidunt odio, at quod
            tempore error fugit laboriosam tenetur aliquid.
          </p>
        </div>

      </div>

      <div>
        <div className="border shadow p-5 rounded-md">
          <h1 className="text-sm sm:text-3xl text-gray-700 font-medium font-Roboto">
            Related Blogs
          </h1>

          <div className="flex flex-col gap-6 mt-2 ">
            <div className="flex flex-col">
              <div className="relative">
                <img className="w-full rounded-xl" src={img1} alt="" />
                <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm">
                  <FaBookOpenReader /> 828 read
                </p>
              </div>

              <div className="p-2 flex flex-col gap-[6px]">
                <div>
                  <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">
                    How to become a programmer.
                  </h1>
                  <div className="flex gap-3 items-center">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <BsCalendarDateFill />7 days ago
                    </p>
                    <div className="flex items-center gap-1">
                      <AiFillLike className="text-sm text-gray-500" />
                      <p className="text-sm text-gray-500">100</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <p className="text-sm text-gray-500">55</p>
                      <MdComment className="text-sm text-gray-500" />
                    </div>

                    <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                      Programming
                    </div>
                  </div>
                </div>
                <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia alias odit ullam labore. Necessitatibus totam
                  eligendi officia? Dicta doe pariatur{" "}
                  <span className="font-medium">... ... Read More</span>
                </p>

                <div className="flex items-center justify-between w-full">
                  {/* User profile */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                      <img src={logo} alt="" />
                    </div>

                    <div>
                      <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">
                        Rahul Sutradhar
                      </h1>
                      <p className="xs:text-xs text-gray-500">
                        Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <button className="flex flex-col items-center gap-[2px]">
                      <SlLike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Like
                      </p>
                    </button>

                    <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                      <SlDislike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Dislike
                      </p>
                    </button>

                    <button className="flex flex-col items-center gap-[2px]">
                      <GoComment className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Comment
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <img className="w-full rounded-xl" src={img2} alt="" />
                <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm">
                  <FaBookOpenReader /> 828 read
                </p>
              </div>

              <div className="p-2 flex flex-col gap-[6px]">
                <div>
                  <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">
                    How to become a programmer.
                  </h1>
                  <div className="flex gap-3 items-center">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <BsCalendarDateFill />7 days ago
                    </p>
                    <div className="flex items-center gap-1">
                      <AiFillLike className="text-sm text-gray-500" />
                      <p className="text-sm text-gray-500">100</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <p className="text-sm text-gray-500">55</p>
                      <MdComment className="text-sm text-gray-500" />
                    </div>

                    <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                      Programming
                    </div>
                  </div>
                </div>
                <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia alias odit ullam labore. Necessitatibus totam
                  eligendi officia? Dicta doe pariatur{" "}
                  <span className="font-medium">... ... Read More</span>
                </p>

                <div className="flex items-center justify-between w-full">
                  {/* User profile */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                      <img src={logo} alt="" />
                    </div>

                    <div>
                      <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">
                        Rahul Sutradhar
                      </h1>
                      <p className="xs:text-xs text-gray-500">
                        Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <button className="flex flex-col items-center gap-[2px]">
                      <SlLike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Like
                      </p>
                    </button>

                    <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                      <SlDislike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Dislike
                      </p>
                    </button>

                    <button className="flex flex-col items-center gap-[2px]">
                      <GoComment className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Comment
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <img className="w-full rounded-xl" src={img3} alt="" />
                <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm">
                  <FaBookOpenReader /> 828 read
                </p>
              </div>

              <div className="p-2 flex flex-col gap-[6px]">
                <div>
                  <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">
                    How to become a programmer.
                  </h1>
                  <div className="flex gap-3 items-center">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <BsCalendarDateFill />7 days ago
                    </p>
                    <div className="flex items-center gap-1">
                      <AiFillLike className="text-sm text-gray-500" />
                      <p className="text-sm text-gray-500">100</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <p className="text-sm text-gray-500">55</p>
                      <MdComment className="text-sm text-gray-500" />
                    </div>

                    <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                      Programming
                    </div>
                  </div>
                </div>
                <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia alias odit ullam labore. Necessitatibus totam
                  eligendi officia? Dicta doe pariatur{" "}
                  <span className="font-medium">... ... Read More</span>
                </p>

                <div className="flex items-center justify-between w-full">
                  {/* User profile */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                      <img src={logo} alt="" />
                    </div>

                    <div>
                      <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">
                        Rahul Sutradhar
                      </h1>
                      <p className="xs:text-xs text-gray-500">
                        Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <button className="flex flex-col items-center gap-[2px]">
                      <SlLike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Like
                      </p>
                    </button>

                    <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                      <SlDislike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Dislike
                      </p>
                    </button>

                    <button className="flex flex-col items-center gap-[2px]">
                      <GoComment className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Comment
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <img className="w-full rounded-xl" src={img4} alt="" />
                <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm">
                  <FaBookOpenReader /> 828 read
                </p>
              </div>

              <div className="p-2 flex flex-col gap-[6px]">
                <div>
                  <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">
                    How to become a programmer.
                  </h1>
                  <div className="flex gap-3 items-center">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <BsCalendarDateFill />7 days ago
                    </p>
                    <div className="flex items-center gap-1">
                      <AiFillLike className="text-sm text-gray-500" />
                      <p className="text-sm text-gray-500">100</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <p className="text-sm text-gray-500">55</p>
                      <MdComment className="text-sm text-gray-500" />
                    </div>

                    <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                      Programming
                    </div>
                  </div>
                </div>
                <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia alias odit ullam labore. Necessitatibus totam
                  eligendi officia? Dicta doe pariatur{" "}
                  <span className="font-medium">... ... Read More</span>
                </p>

                <div className="flex items-center justify-between w-full">
                  {/* User profile */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                      <img src={logo} alt="" />
                    </div>

                    <div>
                      <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">
                        Rahul Sutradhar
                      </h1>
                      <p className="xs:text-xs text-gray-500">
                        Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <button className="flex flex-col items-center gap-[2px]">
                      <SlLike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Like
                      </p>
                    </button>

                    <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                      <SlDislike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Dislike
                      </p>
                    </button>

                    <button className="flex flex-col items-center gap-[2px]">
                      <GoComment className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Comment
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <img className="w-full rounded-xl" src={img1} alt="" />
                <p className="bg-gray-800 px-3 py-1 rounded-l-md rounded-br-md text-white absolute right-0 bottom-0 flex items-center gap-1 text-sm">
                  <FaBookOpenReader /> 828 read
                </p>
              </div>

              <div className="p-2 flex flex-col gap-[6px]">
                <div>
                  <h1 className="text-xl text-gray-700 font-medium font-Roboto mb-[2px]">
                    How to become a programmer.
                  </h1>
                  <div className="flex gap-3 items-center">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <BsCalendarDateFill />7 days ago
                    </p>
                    <div className="flex items-center gap-1">
                      <AiFillLike className="text-sm text-gray-500" />
                      <p className="text-sm text-gray-500">100</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <p className="text-sm text-gray-500">55</p>
                      <MdComment className="text-sm text-gray-500" />
                    </div>

                    <div className="bg-green-200 rounded px-3 py-[2px] text-gray-600 text-xs">
                      Programming
                    </div>
                  </div>
                </div>
                <p className="text-sm text-justify text-gray-600 font-normal font-Roboto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia alias odit ullam labore. Necessitatibus totam
                  eligendi officia? Dicta doe pariatur{" "}
                  <span className="font-medium">... ... Read More</span>
                </p>

                <div className="flex items-center justify-between w-full">
                  {/* User profile */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 xs:w-9 xs:h-9 xs: rounded-full">
                      <img src={logo} alt="" />
                    </div>

                    <div>
                      <h1 className="xs:text-sm text-gray-700 font-medium font-Roboto">
                        Rahul Sutradhar
                      </h1>
                      <p className="xs:text-xs text-gray-500">
                        Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <button className="flex flex-col items-center gap-[2px]">
                      <SlLike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Like
                      </p>
                    </button>

                    <button className="hidden 2xs:flex flex-col items-center gap-[2px]">
                      <SlDislike className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Dislike
                      </p>
                    </button>

                    <button className="flex flex-col items-center gap-[2px]">
                      <GoComment className="text-md text-gray-700" />
                      <p className="text-xs text-gray-700 font-medium font-Roboto">
                        Comment
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
