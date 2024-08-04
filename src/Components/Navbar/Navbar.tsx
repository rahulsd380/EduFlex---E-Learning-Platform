import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png";
import search from "../../assets/Icons/search.svg";
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
import AuthModal from "../AuthModal/AuthModal";

import myProfile from "../../assets/Icons/my-profile.svg";
import editProfile from "../../assets/Icons/edit-profile.svg";
import inbox from "../../assets/Icons/inbox.svg";
import setting from "../../assets/Icons/setting2.svg";
import help from "../../assets/Icons/help.svg";
import logout from "../../assets/Icons/logout.svg";
import downArrow from "../../assets/Icons/down-arrow-dark.svg";
import userIcon from "../../assets/Icons/user.svg";



const Navbar = (): JSX.Element => {
    // For opening the modal
    const [openModal, setOpenModal] = useState<boolean>(false);
    // Modal types
    const [modalType, setModalType] = useState<"Login" | "Signup" | "OTP" | "ForgotPassword" | "Success">("Login");
    // User type
    // const [userType, setUserType] = useState<"Student" | "Employer">("Student");


  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState(true);

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
    {
      pathName: "Dashboard",
      link: "admin",
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

  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = [
    {
        pathname : "My Profile",
        link : "/admin/my-profile",
        icon : myProfile
    },
    {
        pathname : "Edit Profile",
        link : "/admin/my-profile",
        icon : editProfile
    },
    {
        pathname : "Inbox",
        link : "/admin/my-profile",
        icon : inbox
    },
    {
        pathname : "Setting",
        link : "/admin/my-profile",
        icon : setting
    },
    {
        pathname : "Help",
        link : "/admin/my-profile",
        icon : help
    },
  ];
  
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className="py-3">
      <div className="flex justify-between items-center max-w-[1500px] w-[90%] mx-auto">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <h1 className="font-Roboto font-bold text-[27px] text-neutral-60">
            EduFlex
          </h1>
        </Link>

        <div className="flex items-center gap-5">
          <div className="hidden md:block relative">
            <div ref={inputRef} className="relative">
              <img src={search} alt="" className="absolute left-[6px] top-3" />
              <input
                onClick={handleShowSuggestion}
                placeholder="Want to learn?"
                type="text"
                className="border-[1px] border-dark-5 rounded-lg bg-white py-2 pl-7 pr-2 focus:border-primary-10 transition duration-300 focus:outline-none"
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
                className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 flex flex-col group"
              >
                {link?.pathName}
                <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-primary-10 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <button
            onClick={handleModal}
            className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 hidden md:flex flex-col group"
          >
            Contact Us
            <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-primary-10 transition-all duration-500 group-hover:w-full"></span>
          </button>

          <div className="">
            <ContactUs
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>

          {/* Login and sign up btn */}
          {/* <div className="hidden md:flex items-center gap-5">
            <button
              onClick={
                () => {
                  setOpenModal(true)
                  setModalType("Login")
                }
              }
              className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 flex items-center gap-1 transform hover:-translate-y-0.5"
            >
              <CiUnlock className="text-xl" /> Login
            </button>

            <button
             onClick={
              () => {
                setOpenModal(true)
                setModalType("Signup")
              }
            }
              className="bg-primary-10 py-2 px-2 md:px-4 rounded-md text-white font-Roboto font-normal"
            >
              Sign Up For Free
            </button>
          </div> */}

          <div ref={dropDownRef} className="relative mx-auto w-fit">
      <div onClick={() => setOpen((prev) => !prev)} className="flex items-center gap-4 cursor-pointer">
            <div className="size-10 rounded-full bg-dark-5/40 border border-dark-10/30 flex justify-center items-center">
                <img src={userIcon} alt="" className="size-8" />
            </div>
                <div className="flex items-center gap-2">
                <p className="text-neutral-60 font-semibold text-lg">Rahul Sutradhar</p>

                <img src={downArrow} alt="" className="size-6" />
                </div>
            </div>
      <ul className={`${open ? 'visible translate-y-0 duration-300' : 'invisible translate-y-4'} absolute top-16 z-50 w-full  bg-white shadow rounded-b-lg py-2`}>
        {items.map((item, idx) => (
          <li key={idx} className={` px-4 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:text-primary-10 cursor-pointer text-body-text`}>
            <div className="flex items-center gap-2">
            <img src={item.icon} alt="" className="size-5"/>
            {item.pathname}
            </div>
          </li>
        ))}

<li className={` px-4 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:text-primary-10 cursor-pointer text-body-text border-t border-neutral-55/20`}>
            <div className="flex items-center gap-2">
            <img src={logout} alt="" className="size-5"/>
            Log Out
            </div>
          </li>
      </ul>
    </div>

          {/* {user && <UserDropdown setOpenModal={setOpenModal} setModalType={setModalType}/>} */}
          <HamburgerMenu links={links} />
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-3"></div>
      {openModal && (
        <AuthModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalType={modalType}
          setModalType={setModalType}
          // userType={userType}
          // setUserType={setUserType}
        />
      )}
    </div>
  );
};

export default Navbar;
