import { Outlet } from "react-router-dom";

import DashboardHeader from "../../Pages/Dashboard/DashboardComponents/DashboardHeader";
import DashboardSidebar from "../../Pages/Dashboard/DashboardComponents/DashboardSidebar";
import ChatPopUp from "../../Components/ChatPopUp/ChatPopUp";

const DashboardLayout = () => {
  // bg-gradient-to-bl from-[#f3f3f3] via-[#eafff4] to-[#f7f7f7]
  return (
    <div className="flex">
      
      <DashboardSidebar/>

      <div className="bg-gradient-to-r from-gray-50 to-green-50 w-full px-5 md:px-10 py-5 flex flex-col gap-5">
        <DashboardHeader/>
        <Outlet></Outlet>
      </div>

      <div className="hidden lg:block xl:hidden">
      <ChatPopUp/>
      </div>
    </div>
  );
};

export default DashboardLayout;
