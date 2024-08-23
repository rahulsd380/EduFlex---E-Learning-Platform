import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png";
import search from "../../assets/Icons/search.svg";
import { CiUnlock } from "react-icons/ci";
// import UserDropdown from "./UserDropdown";
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
import logoutIcon from "../../assets/Icons/logout.svg";
import downArrow from "../../assets/Icons/down-arrow-dark.svg";
import userIcon from "../../assets/Icons/user.svg";
import Modal1 from "../Modals/Modal1";

import { VscCallOutgoing } from "react-icons/vsc";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuUserCheck } from "react-icons/lu";

import { RiCustomerService2Fill } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { FaUsersCog } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

import { RxCross1 } from "react-icons/rx";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {logout} from "../../Redux/Features/Auth/authSlice"
import { toast } from "sonner";



const Navbar = (): JSX.Element => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);


  //  For modal1
  const [openModal1, setOpenModal1] = useState(false);
    // For opening the modal
    const [openModal, setOpenModal] = useState<boolean>(false);
    // Modal types
    const [modalType, setModalType] = useState<"Login" | "Signup" | "OTP" | "ForgotPassword" | "Success">("Login");
    // User type
    // const [userType, setUserType] = useState<"Student" | "Employer">("Student");


  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = (): void => {
    dispatch(logout());
    toast.success("Logged out")
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
      link: "dashboard",
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


  const dropDownRef = useRef(null);
  const items = [
    {
        pathname : "My Profile",
        link : "/dashboard/profile",
        icon : myProfile
    },
    {
        pathname : "Edit Profile",
        link : "/dashboard/profile",
        icon : editProfile
    },
    {
        pathname : "Inbox",
        link : "/dashboard/chats",
        icon : inbox
    },
    {
        pathname : "Setting",
        link : "/dashboard/my-profile",
        icon : setting
    },
    {
        pathname : "Help",
        link : "/dashboard/my-profile",
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
    <div className="py-3 bg-white">
      <div className="flex justify-between items-center max-w-[1500px] w-[90%] mx-auto ">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <h1 className="font-Roboto font-bold text-[27px] text-neutral-60">
            EduFlex
          </h1>
        </Link>

        <div className="flex items-center gap-5">
          <div className="hidden xl:block relative">
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
            onClick={() => setOpenModal1(true)}
            className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 hidden lg:flex flex-col group"
          >
            Contact Us
            <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-primary-10 transition-all duration-500 group-hover:w-full"></span>
          </button>

          {/* <div className="">
            <ContactUs
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div> */}

          {
            user ?
<div ref={dropDownRef} className="hidden md:block relative mx-auto w-fit">
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
         <Link to={item.link}>
          <li key={idx} className={` px-4 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:text-primary-10 cursor-pointer text-body-text`}>
            <div className="flex items-center gap-2">
            <img src={item.icon} alt="" className="size-5"/>
            {item.pathname}
            </div>
          </li>
         </Link>
        ))}

    

<li onClick={handleLogout} className={` px-4 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:text-primary-10 cursor-pointer text-body-text border-t border-neutral-55/20`}>
            <div className="flex items-center gap-2">
            <img src={logoutIcon} alt="" className="size-5"/>
            Log Out
            </div>
          </li>
      </ul>
    </div>
    :
    <div className="hidden md:flex items-center gap-5">
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
          </div>
          }

          {/* Login and sign up btn */}


            {/* User dropdown */}
          

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

      <Modal1 openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[80%] h-[500px] overflow-y-auto p-0"}>
          {/* Form */}
          <div id="closeModal" className="">
            <div className="bg-primary-10 w-full p-3 relative">
              <h1 className="text-white font-Roboto font-bold text-xl text-center">
                Reach Out to Us Today for Any Inquiries or Assistance!
              </h1>

              <RxCross1
                onClick={() => setOpenModal1(false)}
                className="text-white text-2xl absolute top-7 md:top-3 right-5 cursor-pointer"
              />
            </div>
            <div className="w-full shadow-lg bg-white rounded-b-3xl flex flex-col lg:flex-row justify-center items-center gap-5 p-4">
              <div className="w-full max-w-[600px] lg:w-1/2 flex flex-col gap-8 border-b-2 lg:border-b-0 border-r-0 lg:border-r-2 pb-4 lg:pb-0 border-dotted items-center">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl font-Roboto font-semibold">
                    Let's Start a Conversation About Your Needs and Queries!
                  </h1>
                  <p className="text-gray-800 font-Roboto text-sm">
                    Caring Support Every Step of the Way: We're Here to Listen
                    and Assist You.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg font-Roboto font-medium">
                    Next Steps:
                  </h1>

                  <div className="flex gap-5 mt-3">
                    {/* <div className="relative">
                      <div className="bg-gray-500 w-[1px] h-[90px] absolute mt-2 ml-2 z-10"></div>
                      <div className="flex flex-col gap-6 z-20">
                        <VscCallOutgoing className="text-xl z-20 bg-white" />
                        <HiOutlineUserGroup className="text-xl z-20 bg-white" />
                        <LuUserCheck className="text-xl z-20 bg-white" />
                      </div>
                    </div> */}

                    <div className="flex flex-col gap-5 relative">
                    <div className="bg-gray-500 w-[1px] h-[130px] md:h-[90px] absolute mt-5 md:mt-2 ml-2 z-10"></div>
                      <p className="text-gray-800 font-Roboto flex items-center gap-4">
                      <VscCallOutgoing className="text-xl z-20 bg-white text-primary-10" /> Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                      <p className="text-gray-800 font-Roboto flex items-center gap-4">
                        {" "}
                        <HiOutlineUserGroup className="text-xl z-20 bg-white text-primary-10" /> Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                      <p className="text-gray-800 font-Roboto flex items-center gap-4">
                        {" "}
                        <LuUserCheck className="text-xl z-20 bg-white text-primary-10" /> Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                    </div>
{/* 
                    <div className="flex flex-col gap-5">
                      <p className="text-gray-800 font-Roboto">
                        Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                      <p className="text-gray-800 font-Roboto">
                        {" "}
                        Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                      <p className="text-gray-800 font-Roboto">
                        {" "}
                        Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                    </div> */}
                  </div>

                  <div className="p-5 w-full rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between mt-5">
                    <div className="flex flex-col gap-1 items-center">
                      <div className="rounded-full w-20 h-20 p-2 bg-white flex justify-center items-center">
                        <FiMessageSquare className="text-5xl text-primary-10" />
                      </div>
                      <h3 className="text-base font-semibold font-Roboto text-gray-600">
                        Instant Response
                      </h3>
                    </div>

                    <div className="flex flex-col gap-1 items-center">
                      <div className="rounded-full w-20 h-20 p-2 bg-white flex justify-center items-center">
                        <FaUsersCog className="text-5xl text-primary-10" />
                      </div>
                      <h3 className="text-base font-semibold font-Roboto text-gray-600">
                        Expert Assistance
                      </h3>
                    </div>

                    <div className="flex flex-col gap-1 items-center">
                      <div className="rounded-full w-20 h-20 p-2 bg-white flex justify-center items-center">
                        <RiCustomerService2Fill className="text-5xl text-primary-10" />
                      </div>
                      <h3 className="text-base font-semibold font-Roboto text-gray-600">
                        Personalized Service
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <form className="flex flex-col gap-3 bg-white rounded-3xl w-full max-w-[600px] lg:w-1/2">
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  placeholder="Your Name"
                  className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
                />

                <div className="flex items-center flex-col md:flex-row gap-5 w-full">
                  <input
                    type="number"
                    id="mobileNumber"
                    placeholder="Phone Number"
                    name="mobileNumber"
                    className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
                  />

                  <input
                    type="email"
                    id="Email"
                    placeholder="Your Email"
                    name="mobileNumber"
                    className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
                  />
                </div>

                <textarea
                  className="bg-white border border-gray-300 px-4 py-2 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full rounded-lg"
                  name="message"
                  placeholder="Enter Your Message"
                  id=""
                  cols={30}
                  rows={7}
                ></textarea>

                <button
                  className="bg-primary-10 px-4 w-full h-12 rounded-lg text-white"
                  type="submit"
                >
                  Send Message
                </button>

                <div className="flex items-center gap-3">
                  <p className="flex items-center gap-2 font-Roboto text-gray-700 text-left text-sm">
                    <MdAddIcCall className="text-xl text-primary-10" />
                    Call for any query :
                    <span className="flex items-center gap-1">
                      <a
                        href="tel:+880 1608249337"
                        className="font-medium hover:underline"
                      >
                        +880 1608249337
                      </a>
                      ,
                      <a
                        href="tel:+880 1608249337"
                        className="font-medium hover:underline"
                      >
                        +880 1860647218
                      </a>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
      </Modal1>
    </div>
  );
};

export default Navbar;