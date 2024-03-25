import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png"
import { CiUnlock } from "react-icons/ci";
import UserDropdown from "./UserDropdown";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = (): JSX.Element => {
    const links = [
        {
            pathName: "Home",
            link : "/"
        },
        {
            pathName: "About Us",
            link : "aboutUs"
        },
        {
            pathName: "Course",
            link : "course"
        },
        {
            pathName: "Blog",
            link : "blog"
        },
        {
            pathName: "Contact",
            link : "contact"
        },
    ]
    return (
        <div className="py-3">
            
            <div className="flex justify-between items-center w-11/12 mx-auto">
                {/* Logo */}
                <img className="w-40 md:w-60" src={logo} alt="" />

                <div className="flex items-center gap-5">
                    {/* Mapping throught all the links here */}
                <div className="hidden lg:flex items-center gap-5">
                    {
                        links.map((link, index) => 
                        <Link key={index} to={`${link?.link}`} className="font-Roboto text-gray-500 font-normal hover:text-blue-500 transition duration-300">{link?.pathName}</Link>
                        )
                    }
                </div>
                 
                 {/* Login and sign up btn */}
                <div className="flex items-center gap-5">
                    <Link to={""} className="font-Roboto text-gray-500 font-normal hover:text-blue-500 transition duration-300 flex items-center gap-1 transform hover:-translate-y-0.5"><CiUnlock className="text-xl"/> Login</Link>

                    <Link to={""} className="bg-blue-500 py-2 px-2 md:px-4 rounded-md text-white font-Roboto font-normal">Sign Up For Free</Link>
                    <UserDropdown/>
                    <HamburgerMenu/>
                </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-300 mt-3"></div>
        </div>
    );
};

export default Navbar;