import React from 'react';
import details from "../../../../assets/Icons/view-details.svg";
import chat from "../../../../assets/Icons/chat-primary.svg";
import ManageUserActionDropdown from "./ManageUserActionDropdown";
import { TUser } from './manageUser.types';


type TManageUserCardProps = {
  user: TUser;
}

const ManageUserCard: React.FC<TManageUserCardProps> = ({ user }) => {
  return (
    <div className="bg-neutral-40/5 w-[250px] rounded-lg shadow relative">
      <div className="p-4 flex flex-col items-center justify-center">
        {/* Img */}
        <div className="size-36 rounded-full bg-white border border-neutral-55 flex justify-center items-center">
          <div className="size-[133px] rounded-full flex justify-center items-center">
            <img src={user.profileImg} alt="" className="w-full size-[133px] rounded-full" />
          </div>
        </div>
      </div>

      <div className="bg-primary-15/15 p-2 rounded-r-md text-white flex items-center gap-2 absolute left-0 top-0">
        <p className="text-body-text font-semibold text-[11px] text-center">{user.role}</p>
      </div>

      <div className="absolute top-2 right-2">
        <ManageUserActionDropdown />
      </div>

      <div className="bg-neutral-60 p-4 rounded-b-lg flex flex-col gap-5">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="text-xl text-white font-bold capitalize text-center mt-2">
            {user.name}
          </h1>
          <a href={`mailto:${user.email}`} className="text-neutral-20/80 font-semibold text-[11px] hover:underline">
            {user.email}
          </a>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="bg-primary-15/15 p-2 rounded-md text-white flex items-center gap-2">
            <img src={chat} alt="" className="size-5" />
            <p className="text-white font-semibold text-[11px] text-center">Message</p>
          </div>
          <div className="bg-primary-10 p-2 rounded-md text-white flex items-center gap-2">
            <img src={details} alt="" className="size-4" />
            <p className="text-white font-semibold text-[11px] text-center">Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUserCard;
