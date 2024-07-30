import { useEffect, useRef, useState } from "react";
import {  useLocation } from "react-router-dom";
import cart from "../../../assets/Icons/cart.svg";
import notification from "../../../assets/Icons/notification.svg";
import downArrow from "../../../assets/Icons/down-arrow-dark.svg";
import chat from "../../../assets/Icons/chat.svg";
import search from "../../../assets/Icons/search.svg";
import user from "../../../assets/Icons/user.svg";

import myProfile from "../../../assets/Icons/my-profile.svg";
import editProfile from "../../../assets/Icons/edit-profile.svg";
import inbox from "../../../assets/Icons/inbox.svg";
import setting from "../../../assets/Icons/setting2.svg";
import help from "../../../assets/Icons/help.svg";
import logout from "../../../assets/Icons/logout.svg";



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
    } else if (location.pathname === "/admin/manage-team") {
        title = "Manage Team";
        subTitle = "Expand new with the iconic team member.";
    } 
    else if (location.pathname === "/admin/manage-blogs") {
        title = "Manage Blogs";
        subTitle = "Create, edit, and manage informative content.";
    } else if (location.pathname === "/admin/manage-users") {
        title = "Manage Users";
        subTitle = "Handle user accounts, profiles, and access.";
    }

    const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = [
    {
        pathname : "My Profile",
        link : "/admin/my-profile",
        icon : myProfile
    },
    {
        pathname : "Edit Profile",
        link : "/admin/my-profile",
        icon : editProfile
    },
    {
        pathname : "Inbox",
        link : "/admin/my-profile",
        icon : inbox
    },
    {
        pathname : "Setting",
        link : "/admin/my-profile",
        icon : setting
    },
    {
        pathname : "Help",
        link : "/admin/my-profile",
        icon : help
    },
  ];
  
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

    return (
        <div className="flex items-center justify-between border-b border-neutral-60/20 pb-3">
            <div>
            <h1 className="text-2xl text-neutral-60 font-bold capitalize">
            {/* {location.pathname.replace("/", "").toUpperCase()} */}
            {title}
        </h1>
        <p className="text-neutral-60/80 font-semibold text-xs mt-[2px]">{subTitle}</p>
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

            <div ref={dropDownRef} className="relative mx-auto w-fit">
      <div onClick={() => setOpen((prev) => !prev)} className="flex items-center gap-4 cursor-pointer">
            <div className="size-10 rounded-full bg-dark-5/40 border border-dark-10/30 flex justify-center items-center">
                <img src={user} alt="" className="size-8" />
            </div>
                <div className="flex items-center gap-2">
                <div>
                <p className="text-neutral-60 font-semibold text-lg">Rahul Sutradhar</p>
                <p className="text-neutral-60/80 font-semibold text-xs">Manager</p>
                </div>

                <img src={downArrow} alt="" className="size-6" />
                </div>
            </div>
      <ul className={`${open ? 'visible translate-y-0 duration-300' : 'invisible translate-y-4'} absolute top-16 z-50 w-full  bg-white shadow rounded-b-lg py-2`}>
        {items.map((item, idx) => (
          <li key={idx} className={` px-4 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:text-primary-10 cursor-pointer text-body-text`}>
            <div className="flex items-center gap-2">
            <img src={item.icon} alt="" className="size-5"/>
            {item.pathname}
            </div>
          </li>
        ))}

<li className={` px-4 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:text-primary-10 cursor-pointer text-body-text border-t border-neutral-55/20`}>
            <div className="flex items-center gap-2">
            <img src={logout} alt="" className="size-5"/>
            Log Out
            </div>
          </li>
      </ul>
    </div>

            
            

            
        </div>
        </div>
    );
};

export default DashboardHeader;