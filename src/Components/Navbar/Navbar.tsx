import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png"
import { CiUnlock } from "react-icons/ci";
import UserDropdown from "./UserDropdown";
import { FiHome } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
// import { MdContactPhone } from "react-icons/md";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useState } from "react";
import ContactUs from "../ContactUs/ContactUs";


const Navbar = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [user, setUser] = useState(false)

    const handleModal = (): void => {
      setIsModalOpen(!isModalOpen)
    }
    

    const links = [
        {
            pathName: "Home",
            link : "",
            icon : <FiHome/>
        },
        {
            pathName: "About Us",
            link : "aboutUs",
            icon : <IoInformationCircleOutline/>
        },
        {
            pathName: "Courses",
            link : "courses",
            icon : <FaBook/>
        },
        {
            pathName: "Blog",
            link : "blog",
            icon : <ImBlog/>
        },
    ];

    return (
        <div className="py-3">
            
            <div className="flex justify-between items-center w-11/12 mx-auto">
                {/* Logo */}
                <Link to={"/"}><img className="w-40 md:w-60" src={logo} alt="" /></Link>

                <div className="flex items-center gap-5">
                    {/* Mapping throught all the links here */}
                <div className="hidden lg:flex items-center gap-5">
                    {
                        links.map((link, index) => 
                        <Link key={index} to={`/${link?.link}`} className="font-Roboto text-gray-500 font-normal hover:text-[#20B486] transition duration-300">{link?.pathName}</Link>
                        )
                    }
                </div>

                <button onClick={handleModal}  className="font-Roboto text-gray-500 font-normal hover:text-[#20B486] transition duration-300 hidden md:block">Contact Us</button>

                <div className="">
                <ContactUs isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                </div>
                 
                 {/* Login and sign up btn */}
                <div className="hidden md:flex items-center gap-5">
                    <Link to={"/signin"} className="font-Roboto text-gray-500 font-normal hover:text-[#20B486] transition duration-300 flex items-center gap-1 transform hover:-translate-y-0.5"><CiUnlock className="text-xl"/> Login</Link>

                    <Link to={"/signup"} className="bg-[#20B486] py-2 px-2 md:px-4 rounded-md text-white font-Roboto font-normal">Sign Up For Free</Link>
                </div>

                {
                    user && <UserDropdown/>
                }
                    <HamburgerMenu links={links}/>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-300 mt-3"></div>
        </div>
    );
};

export default Navbar;