import details from "../../../../assets/Icons/question.svg";
import profileImg from "../../../../assets/Images/profileImg.jpeg";
import teacher from "../../../../assets/Icons/teacher.svg";
import teamLocation from "../../../../assets/Icons/team-location.svg";
import email from "../../../../assets/Icons/email.svg";
import call from "../../../../assets/Icons/call-white.svg";
import ManageTeamActionDropdown from "./ManageTeamActionDropdown";
import { useState } from "react";
import TeamMemberDetailsModal from "./TeamMemberDetailsModal";

const ManageTeam = () => {
  const [openTeamMemberDetailsModal, setTeamMemberDetailsModal] = useState(false);
  return (
    <div>
      <div className="max-w-[320px] bg-white hover:shadow-lg rounded-lg shadow p-4 flex flex-col gap-5 group font-Roboto">
        <div className="flex justify-between items-center">
          <img onClick={() => setTeamMemberDetailsModal(true)} src={details} alt="" className="size-8 cursor-pointer" />
          <ManageTeamActionDropdown/>
        </div>

        

        {/* profile image - name - email */}
        <div className="flex flex-col justify-center items-center text-center">
        <div className="size-20 rounded-full bg-primary-15 flex justify-center items-center">
          <img src={profileImg} alt="" className="rounded-full size-20" />
        </div>

        <h1 className="text-xl text-neutral-60 font-bold capitalize mt-2">
          Rahul Sutradhar
        </h1>
        <p className="text-neutral-60/80 font-semibold text-xs">rahulsd380@gmail.com</p>
        </div>


        <div className="flex items-center justify-between gap-3">
            <div className="w-full shadow-sm p-2 bg-white rounded-lg flex flex-col gap-1">
                <p className="text-neutral-60/80 font-semibold text-xs">Job Title</p>
                <div className="flex items-center gap-2">
                <img src={teacher} alt="" className="size-5" />
                <p className="text-primary-10 font-bold text-sm">Instructor</p>
                </div>
            </div>

            <div className="w-full shadow-sm p-2 bg-white rounded-lg flex flex-col gap-1">
                <p className="text-neutral-60/80 font-semibold text-xs">Address</p>
                <div className="flex items-center gap-2">
                <img src={teamLocation} alt="" className="size-5" />
                <p className="text-primary-10 font-bold text-sm">Cumilla, BD</p>
                </div>
            </div>
        </div>

        {/* Call && Email */}
        <div className="flex items-center justify-between gap-3">
            <a href={`mailto:${"rahulsd380@gmail.com"}`} className="w-full px-5 py-2 bg-dark-5/50 rounded-md flex justify-center items-center gap-2">
            <img src={email} alt="" className="size-5" />
                <p className="text-neutral-60/80 font-medium text-base">Email</p>
            </a>
            

            <a href="tel:+8801608249337" className="w-full px-5 py-2 bg-primary-10 rounded-md flex justify-center items-center gap-2">
            <img src={call} alt="" className="size-5" />
                <p className="text-white font-medium text-base">Call</p>
            </a>
        </div>
      </div>
      <TeamMemberDetailsModal openTeamMemberDetailsModal={openTeamMemberDetailsModal} setTeamMemberDetailsModal={setTeamMemberDetailsModal}/>
    </div>
  );
};

export default ManageTeam;
