import { Link, NavLink, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import logo from "../../../assets/Images/Logo/logo.png";
import downArrow from "../../../assets/Icons/down-arrow.svg";
import ThemeToggleBtn from "../../../Components/Navbar/HamburgerMenu/ThemeToggleBtn";
import { useState } from "react";

const DashboardSidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);

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
      downArrow : downArrow,
      subMenu: [
        {
          pathName: "Add Blog",
          link: "admin/manage-blogs/add-blog",
        },
        {
          pathName: "Manage Blogs",
          link: "admin/manage-blogs/manage-blogs",
        },
      ],
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
      pathName: "Settings",
      link: "admin/setting",
      icon: <FaBook />,
      downArrow : downArrow,
      subMenu: [
        { pathName: "General Settings", link: "admin/setting/general-settings" },
        { pathName: "Notification Settings", link: "admin/setting/notification-settings" },
        { pathName: "Language Preferences", link: "admin/setting/language-preferences" },
        { pathName: "Accessibility Options", link: "admin/setting/accessibility-options" },
        { pathName: "Security Settings", link: "admin/setting/security-settings" },
      ],
    },
  ];

  const handleExpand = (link) => {
    setActiveMenu((prevLink) => (prevLink === link ? null : link));
  };

  return (
    <div className="w-[270px] bg-neutral-60 h-screen overflow-x-hidden overflow-y-auto flex flex-col justify-between font-Roboto">
      {/* Logo */}
      <Link to={"/"} className="flex items-center gap-2 p-5">
        <img className="w-10" src={logo} alt="EduFlex Logo" />
        <h1 className="font-Roboto font-bold text-[27px] text-white">EduFlex</h1>
      </Link>

      {/* Navlinks */}
      <div className="flex flex-col gap-2 text-white">
        {navLinks.map((navLink, index) => (
          <div key={index}>
            <NavLink
            to={`/${navLink.link}`}
              onClick={() => handleExpand(navLink.link)}
              className={`${
                location.pathname.replace("/", "") === navLink.link
                  ? "text-primary-10 h-[45px] rounded-r-xl bg-primary-15/10 border-l-2 p-3 flex items-center justify-between text-[15px] font-roboto font-normal px-5 cursor-pointer"
                  : "dark:text-[#ABAEB2] text-[#F1EDFF] h-[45px] rounded-r-xl p-3 flex items-center gap-3 text-[15px] font-roboto font-normal px-5 cursor-pointer w-full"
              }`}
            >
              <div className="flex items-center gap-3 w-full">
              {navLink.icon} {navLink.pathName}
              
              </div>
              {
                navLink.downArrow && (
                  <img className="size-6" src={navLink.downArrow} alt="down arrow" />
                )
              }
            </NavLink>
            {navLink.subMenu && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeMenu === navLink.link ? "max-h-screen opacity-100 transition-all duration-300" : "max-h-0 opacity-0 transition-all duration-300"
                }`}
              >
                {navLink.subMenu.map((subLink, subIndex) => (
                  <NavLink
                    key={subIndex}
                    to={`/${subLink.link}`}
                    className="dark:text-[#ABAEB2] text-[#F1EDFF] h-[45px] p-3 flex items-center gap-3 text-xs font-roboto font-normal px-10 "
                  >
                    {subLink.pathName}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <ThemeToggleBtn />
    </div>
  );
};

export default DashboardSidebar;
