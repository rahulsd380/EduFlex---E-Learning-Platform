import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/Images/Logo/logo.png";
import search from "../../../assets/Icons/search.svg";
import { navLinks } from "./dashboardSidebarNavlinks";

const DashboardHamburgerMenu = () => {
  const [isDashboardHamburgerOpen, setIsDashboardHamburgerOpen] =
    useState<boolean>(false);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleExpand = (link: any) => {
    setActiveMenu((prevLink) => (prevLink === link ? null : link));
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(
        ".hamburgerMenu"
      );
      if (isDashboardHamburgerOpen && closestDropdown === null) {
        setIsDashboardHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDashboardHamburgerOpen]);

  return (
    <div className="relative hamburgerMenu">
      <AiOutlineMenu
        onClick={() => setIsDashboardHamburgerOpen(!isDashboardHamburgerOpen)}
        className="cursor-pointer text-[26px] text-gray-500 hover:text-primary-10 transition duration-300"
      />
      <div
  className={`fixed inset-y-0 left-0 z-50 bg-neutral-60 text-white w-72 h-screen transition-all duration-300 transform ${
    isDashboardHamburgerOpen ? "translate-x-0 overflow-y-auto" : "-translate-x-full"
  }`}
>
        {isDashboardHamburgerOpen && (
          <div>
            <div className="flex justify-between items-center p-[9px]">
              {/* Logo */}
              <Link to={"/"} className="flex items-center gap-2">
                <img className="w-10" src={logo} alt="" />
                <h1 className="font-Roboto font-bold text-[27px] white">
                  EduFlex
                </h1>
              </Link>

              {/* Hamburger menu close button */}
              <MdKeyboardArrowLeft
                onClick={() =>
                  setIsDashboardHamburgerOpen(!isDashboardHamburgerOpen)
                }
                className="text-white text-4xl cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-5">
              {/* Search bar */}
              <div className="p-4">
                <div className="relative w-full">
                  <img
                    src={search}
                    alt=""
                    className="absolute right-[10px] top-3"
                  />
                  <input
                    placeholder="What are you looking for?"
                    type="text"
                    className="border-[1px] border-neutral-40/50 rounded-lg bg-neutral-60/10 py-2 pl-2 pr-8 focus:border-primary-10 transition duration-300 focus:outline-none w-full"
                  />
                </div>
              </div>

              {/* Navlinks */}
              <div className="flex flex-col gap-2 text-white">
                {navLinks.map((navLink, index) => (
                  <div key={index}>
                    <NavLink
                      to={`/${navLink.link}`}
                      onClick={() => handleExpand(navLink.link)}
                      className={`${
                        location.pathname.replace("/", "") === navLink.link
                          ? "text-primary-10 h-[45px] rounded-r-xl bg-primary-15/10 border-l-4 p-3 flex items-center justify-between text-[15px] font-roboto font-normal px-5 cursor-pointer"
                          : "dark:text-[#ABAEB2] text-[#F1EDFF] h-[45px] rounded-r-xl p-3 flex items-center gap-3 text-[15px] font-roboto font-normal px-5 cursor-pointer w-full"
                      }`}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <img src={navLink.icon} alt="" className="size-5" />{" "}
                        {navLink.pathName}
                      </div>
                      {navLink.downArrow && (
                        <img
                          className="size-6"
                          src={navLink.downArrow}
                          alt="down arrow"
                        />
                      )}
                    </NavLink>
                    {navLink.subMenu && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeMenu === navLink.link
                            ? "max-h-screen opacity-100 transition-all duration-300"
                            : "max-h-0 opacity-0 transition-all duration-300"
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHamburgerMenu;
