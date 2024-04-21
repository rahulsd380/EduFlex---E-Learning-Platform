import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png"
import ThemeToggleBtn from "../../Components/Navbar/HamburgerMenu/ThemeToggleBtn";
import { FiHome } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { ImBlog } from "react-icons/im";

const DashboardLayout = () => {
    const navLinks = [
        {
            pathName: "Home",
            link : "",
            icon : <FiHome/>
        },
        {
            pathName: "Dashboard",
            link : "dashboard",
            icon : <FiHome/>
        },
        {
            pathName: "Manage User",
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
        {
            pathName: "All Courses",
            link : "all-courses",
            icon : <FiHome/>
        },
        {
            pathName: "Manage User",
            link : "aboutUs",
            icon : <IoInformationCircleOutline/>
        },
        {
            pathName: "Courses",
            link : "courses",
            icon : <FaBook/>
        },
    ];
    return (
        <div className="flex">
            <div className="w-[250px] bg-gray-800 h-screen p-5 flex flex-col justify-between font-Roboto">
                <img src={logo} alt="" />

                <div className="flex flex-col gap-2 text-white">
                    {
                        navLinks.map((navLink, index) => 
                            <NavLink
                            key={index}
                        to={`/${navLink?.link}`}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? 'pending'
                            : isActive
                              ? 'text-[#246BFD] h-[45px] rounded-xl bg-[#246BFD1A] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                              : ' dark:text-[#ABAEB2] text-[#F1EDFF] h-[45px] rounded-xl p-3 flex items-center gap-3 text-[16px] font-roboto font-normal'
                        }
                      >
                        {navLink?.icon} {navLink?.pathName}
                      </NavLink>
                        )
                    }


        
                </div>

                <ThemeToggleBtn/>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-green-50 w-full px-10 py-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;