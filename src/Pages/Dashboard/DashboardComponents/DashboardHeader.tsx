import {  useLocation } from "react-router-dom";
import cart from "../../../assets/Icons/cart.svg";
import notification from "../../../assets/Icons/notification.svg";
import chat from "../../../assets/Icons/chat.svg";
import search from "../../../assets/Icons/search.svg";
import user from "../../../assets/Icons/user.svg";


const DashboardHeader = () => {
    const location = useLocation();
    let title : string = "Admin"
    let subTitle = "Manage your dashboard and expand more facilities."

    if (location.pathname === "/admin") {
        title = "Admin";
        subTitle = "Manage your dashboard and expand more facilities.";
    } else if (location.pathname === "/admin/manage-course") {
        title = "Manage Courses";
        subTitle = "Organize and maintain all course materials.";
    } else if (location.pathname === "/admin/manage-blogs") {
        title = "Manage Blogs";
        subTitle = "Create, edit, and manage informative content.";
    } else if (location.pathname === "/admin/manage-users") {
        title = "Manage Users";
        subTitle = "Handle user accounts, profiles, and access.";
    }

    return (
        <div className="flex items-center justify-between border-b border-neutral-5/20 pb-3">
            <div>
            <h1 className="text-2xl text-neutral-5 font-bold capitalize">
            {/* {location.pathname.replace("/", "").toUpperCase()} */}
            {title}
        </h1>
        <p className="text-neutral-5/80 font-semibold text-xs mt-[2px]">{subTitle}.</p>
            </div>

        <div className="px-2 py-1 rounded-[100px] border border-primary-10 flex items-center gap-5">
        <div className="hidden md:block relative">
            <div className="relative">
              <img src={search} alt="" className="absolute left-[6px] top-3" />
              <input
                placeholder="Want to learn?"
                type="text"
                className=" rounded-[100px] bg-dark-5/40 border border-dark-10/30 py-2 pl-7 pr-2 focus:border-primary-10 transition duration-300 focus:outline-none"
              />
            </div>
          </div>

            <img src={cart} alt="" className="size-7" />
            <img src={notification} alt="" className="size-8" />
            <img src={chat} alt="" className="size-6" />

            <div className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-dark-5/40 border border-dark-10/30 flex justify-center items-center">
                <img src={user} alt="" className="size-8" />
            </div>
                <div>
                <p className="text-neutral-5 font-semibold text-lg">Rahul Sutradhar</p>
                <p className="text-neutral-5/80 font-semibold text-xs">Admin</p>
                </div>
            </div>
            

            
        </div>
        </div>
    );
};

export default DashboardHeader;