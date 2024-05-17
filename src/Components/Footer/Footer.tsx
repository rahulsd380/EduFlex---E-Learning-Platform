import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png"
import linkedin from "../../assets/Icons/Social Icons/linkedin.svg";
import twitter from "../../assets/Icons/Social Icons/twitter.svg";
import facebook from "../../assets/Icons/Social Icons/facebook.svg";
import github from "../../assets/Icons/Social Icons/github.svg";

const Footer = () => {
    return (
        <div className="bg-[#101828] py-14 w-full">
            <footer className="w-[90%] mx-auto  font-Roboto">
            <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-2">
            <img className="w-20" src={logo} alt="genius-grove-logo" />
            <h1 className="text-3xl font-bold text-white font-Roboto">EduFlex</h1>

            <p className=" text-[#EAECF0] text-base font-normal mt-5">Top learning experiences that create more <br /> talent in the world.</p>
        </div>

        <div className="flex flex-col gap-4">
            <h1 className="text-[#98A2B3] text-base font-semibold">Company</h1>

            <div className="flex flex-col gap-3">
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Courses</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">About Us</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Blogs</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Instructors</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Services</Link>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <h1 className="text-[#98A2B3] text-base font-semibold">Company</h1>

            <div className="flex flex-col gap-3">
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Courses</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">About Us</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Blogs</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Instructors</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Services</Link>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <h1 className="text-[#98A2B3] text-base font-semibold">Company</h1>

            <div className="flex flex-col gap-3">
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Courses</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">About Us</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Blogs</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Instructors</Link>
                <Link to={"/"} className="text-[#EAECF0] text-[14px] font-medium">Services</Link>
            </div>
        </div>



            </div>


            <div className="flex justify-between items-center mt-12">
                <p className="text-[#98A2B3] text-base">© 2022 Ed-Circle. All rights reserved.</p>
                <div className="flex items-center gap-5 ">
            <a
              href="https://www.linkedin.com/in/rahul-sutradhar-a99749202"
              target="_blank"
            >
              <img
                className="w-[41px] cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={linkedin}
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/rahulsd836" target="_blank">
              <img
                className="w-10 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={facebook}
                alt=""
              />
            </a>
            <img
              className="w-7 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
              src={twitter}
              alt=""
            />
            <a href="https://github.com/rahulsd380" target="_blank">
              <img
                className="w-7 cursor-pointer transition duration-300 transform hover:-translate-y-0.5"
                src={github}
                alt=""
              />
            </a>
          </div>

            </div>
            </footer>
        </div>
    );
};

export default Footer;