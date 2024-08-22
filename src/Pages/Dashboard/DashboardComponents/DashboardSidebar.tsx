import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/Images/Logo/logo.png";
import ThemeToggleBtn from "../../../Components/Navbar/HamburgerMenu/ThemeToggleBtn";
import { useState } from "react";
import { navLinks } from "./dashboardSidebarNavlinks";

const DashboardSidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleExpand = (link) => {
    setActiveMenu((prevLink) => (prevLink === link ? null : link));
  };

  return (
    <div className="w-[270px] bg-neutral-60 h-screen sticky top-0 overflow-x-hidden overflow-y-auto hidden lg:flex flex-col justify-between font-Roboto">
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
              <img src={navLink.icon} alt="" className="size-5"/> {navLink.pathName}
              
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
