import { Link, NavLink, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import logo from "../../../assets/Images/Logo/logo.png";
import ThemeToggleBtn from "../../../Components/Navbar/HamburgerMenu/ThemeToggleBtn";

const DashboardSidebar = () => {
  const location = useLocation();
    // Navlinks

    // Team
    // Teachers
    // Students
    const navLinks = [
        {
          pathName: "Home",
          link: "",
          icon: <FiHome />,
        },
        {
          pathName: "Dashboard",
          link: "admin",
          icon: <FiHome />,
        },
        {
          pathName: "Reports & Analytics",
          link: "admin/reports-analytics",
          icon: <FiHome />,
        },
        {
          pathName: "Manage Team",
          link: "admin/manage-team",
          icon: <FiHome />,
        },
        {
          pathName: "Manage User",
          link: "admin/manage-users",
          icon: <IoInformationCircleOutline />,
        },
        {
          pathName: "Manage Courses",
          link: "admin/manage-course",
          icon: <FaBook />,
        },
        {
          pathName: "Blogs",
          link: "admin/manage-blogs",
          icon: <ImBlog />,
        },
        {
          pathName: "Announcements",
          link: "admin/announcements",
          icon: <FiHome />,
        },
        {
          pathName: "Manage Enrollments",
          link: "admin/manage-enrollments",
          icon: <FaBook />,
        },
        {
          pathName: "Setting",
          link: "admin/setting",
          icon: <FaBook />,
        },
      ];
    return (
        <div className="w-[270px] bg-neutral-60 h-screen overflow-x-hidden overflow-y-auto flex flex-col justify-between font-Roboto">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2 p-5">
          <img className="w-10" src={logo} alt="" />
          <h1 className="font-Roboto font-bold text-[27px] text-white">
            EduFlex
          </h1>
        </Link>

        {/* Navlinks */}
        <div className="flex flex-col gap-2 text-white ">
          {navLinks.map((navLink, index) => (
            <NavLink
              key={index}
              to={`/${navLink?.link}`}
              className={`${location.pathname.replace("/", "") === navLink.link ? "text-primary-10 h-[45px] rounded-r-xl bg-primary-15/10 border-l-2 p-3 flex items-center gap-3 text-[15px] font-roboto font-normal px-5" : "dark:text-[#ABAEB2] text-[#F1EDFF] h-[45px] rounded-r-xl p-3 flex items-center gap-3 text-[15px] font-roboto font-normal px-5"}`}
              
            >
              {navLink?.icon} {navLink?.pathName}
            </NavLink>
          ))}
        </div>

        <ThemeToggleBtn />
      </div>
    );
};

export default DashboardSidebar;