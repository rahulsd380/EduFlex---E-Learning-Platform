import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/Images/Logo//fabicon.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

interface NavigationLinks {
  pathName: string;
  link: string;
  icon: ReactNode;
}

interface Props {
  links: NavigationLinks[];
}

const HamburgerMenu = ({ links }: Props): JSX.Element => {
  // Just for testing puspose now
  const [user, setUser] = useState(false)
  const accountLinks = [
    {
      pathName: "Chat",
      link: "/",
      icon: <IoChatbubbleOutline />,
    },
    {
      pathName: "Setting",
      link: "aboutUs",
      icon: <IoSettingsOutline />,
    },
    {
      pathName: "Dashboard",
      link: "course",
      icon: <MdDashboard />,
    },
  ];
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const toggleHamburgerMenu = (): void => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(
        ".hamburgerMenu"
      );
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);
  return (
    <div className="relative hamburgerMenu">
      <AiOutlineMenu
        onClick={toggleHamburgerMenu}
        className="cursor-pointer text-[26px] text-gray-500 hover:text-blue-500 transition duration-300"
      />

      <div
        className={`overflow-y-scroll fixed inset-y-0 right-0 z-50 bg-gray-800 w-64 h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isHamburgerOpen && (
          <div>
            <div className="flex justify-between items-center p-[9px]">
              {/* Logo */}
              <Link to={"/"} className="flex gap-1 items-center">
                <img className="w-12 md:w-12" src={logo} alt="" />
                <h1 className="text-xl font-Roboto text-gray-100">
                  Genius Grove
                </h1>
              </Link>

              {/* Hamburger menu close button */}
              <MdKeyboardArrowLeft
                onClick={toggleHamburgerMenu}
                className="text-white text-4xl cursor-pointer"
              />
            </div>
            <div className="w-full h-[1px] bg-gray-500"></div>

            {/* Navigations links */}
            <div className="flex flex-col items-start gap-5 p-4 border-b border-gray-600 pb-3">
              <h1 className="text-base font-normal font-Roboto text-gray-200">
                Main Menu
              </h1>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={`${link?.link}`}
                  className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  {link?.icon}
                  {link?.pathName}
                </Link>
              ))}
            </div>

            {/* Theme toggle and logout */}
            <div className="flex flex-col items-start gap-5 p-4 border-b border-gray-600 pb-3">
              <h1 className="text-base font-normal font-Roboto text-gray-300">
                Account
              </h1>
              {accountLinks.map((link, index) => (
                <Link
                  key={index}
                  to={`${link?.link}`}
                  className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  {link?.icon}
                  {link?.pathName}
                </Link>
              ))}

              {/* Logout button */}
              {
                user === false ?
                <button className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
                <CiLogout />
                Logout
              </button>

              :
              <button className="font-Roboto text-gray-300 font-normal hover:text-blue-400 transition duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
                <IoLogOutOutline />
                Login
              </button>
              }
            </div>

            <div className="p-3">
              <ThemeToggleBtn />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
