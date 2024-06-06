import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png";
import { CiUnlock } from "react-icons/ci";
import UserDropdown from "./UserDropdown";
import { FiHome } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
// import { MdContactPhone } from "react-icons/md";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useEffect, useRef, useState } from "react";
import ContactUs from "../ContactUs/ContactUs";
import search from "../../assets/Icons/search.svg";

const Navbar = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState(false);

  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const links = [
    {
      pathName: "Home",
      link: "",
      icon: <FiHome />,
    },
    {
      pathName: "About Us",
      link: "aboutUs",
      icon: <IoInformationCircleOutline />,
    },
    {
      pathName: "Courses",
      link: "courses",
      icon: <FaBook />,
    },
    {
      pathName: "Blog",
      link: "blog",
      icon: <ImBlog />,
    },
  ];

  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [suggestions, setSuggestion] = useState<string[]>([]);

  const inputRef = useRef<HTMLDivElement>(null);
  const suggestionCourseList: string[] = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Graphics Design",
    "Software Development",
    "MERN Stack Development",
    "Complete Python",
  ];

  const handleShowSuggestion = (): void => {
    setShowSuggestion(true);
    if (showSuggestion) {
      setSuggestion(suggestionCourseList);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowSuggestion(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-3">
      <div className="flex justify-between items-center max-w-[1500px] w-[90%] mx-auto">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <h1 className="font-Roboto font-bold text-[27px] text-[#101828]">
            EduFlex
          </h1>
        </Link>

        <div className="flex items-center gap-5">
          <div className="relative">
            <div ref={inputRef} className="relative">
              <img src={search} alt="" className="absolute left-[6px] top-3" />
              <input
                onClick={handleShowSuggestion}
                placeholder="Want to learn?"
                type="text"
                className="border-[1px] border-[#D0D5DD] rounded-lg bg-white py-2 pl-7 pr-2 focus:border-[#20B486] transition duration-300 focus:outline-none"
              />
            </div>

            {showSuggestion && (
              <div className="absolute bg-white rounded-t-2xl rounded-b z-50 shadow-md flex flex-col w-full">
                {suggestions.slice(0,5).map((suggestion, id) => (
                  <Link to={""} className="hover:bg-slate-100 p-3 border-b border-gray-100" key={id}>
                    <h1>{suggestion}</h1>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mapping through all the links here */}
          <div className="hidden lg:flex items-center gap-5">
            {links.map((link, index) => (
              <Link
                key={index}
                to={`/${link?.link}`}
                className="font-Roboto text-gray-500 font-normal hover:text-[#20B486] transition duration-300"
              >
                {link?.pathName}
              </Link>
            ))}
          </div>

          <button
            onClick={handleModal}
            className="font-Roboto text-gray-500 font-normal hover:text-[#20B486] transition duration-300 hidden md:block"
          >
            Contact Us
          </button>

          <div className="">
            <ContactUs
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>

          {/* Login and sign up btn */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to={"/signin"}
              className="font-Roboto text-gray-500 font-normal hover:text-[#20B486] transition duration-300 flex items-center gap-1 transform hover:-translate-y-0.5"
            >
              <CiUnlock className="text-xl" /> Login
            </Link>

            <Link
              to={"/signup"}
              className="bg-[#20B486] py-2 px-2 md:px-4 rounded-md text-white font-Roboto font-normal"
            >
              Sign Up For Free
            </Link>
          </div>

          {user && <UserDropdown />}
          <HamburgerMenu links={links} />
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-3"></div>
    </div>
  );
};

export default Navbar;
