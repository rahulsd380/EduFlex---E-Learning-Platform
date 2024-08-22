import details from "../../../../assets/Icons/question.svg";
// import teacher from "../../../../assets/Icons/teacher.svg";
// import teamLocation from "../../../../assets/Icons/team-location.svg";
import chat from "../../../../assets/Icons/chat-black.svg";
import email from "../../../../assets/Icons/email-black.svg";
import call from "../../../../assets/Icons/call-black.svg";
import ManageTeamActionDropdown from "./ManageTeamActionDropdown";
import { TTeamMember } from "./manageTeam.types";

type TManageTeamCardProps = {
  member: TTeamMember;
  setTeamMemberDetailsModal: (open: boolean) => void;
};

const ManageTeamCard: React.FC<TManageTeamCardProps> = ({
  member,
  setTeamMemberDetailsModal,
}) => {

  const quickActions = [
    {
      index: 1,
      icon: call,
      action: "tel:+8801608249337",
    },
    {
      index: 1,
      icon: email,
      action: "mailto:rahulsd380@gmail.com",
    },
    {
      index: 1,
      icon: chat,
      action: "chats",
    },
  ];

  return (
    <div className="w-[230px] bg-white hover:shadow-lg rounded-lg shadow flex flex-col gap-5 font-Roboto">
      <div className="flex justify-between p-4">

      
        {/* Speed dial */}
        <div className="relative -top-2">
          <div className="group absolute">
            {/* + icon  */}
            <img src={details} alt="" className="size-8 cursor-pointer" />
            {/* icon container  */}
            <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
              {/* Icon Map */}
              {quickActions.map(({ index, action, icon }) => (
                <a
                  href={action}
                  className={`bg-neutral-20/50 p-1 size-8 rounded-full flex justify-center items-center scale-0 group-hover:scale-100 duration-300 opacity-0 group-hover:opacity-100 ${
                    index === 0
                      ? "delay-[400ms] group-hover:delay-100"
                      : index === 1
                      ? "delay-300 group-hover:delay-200"
                      : index === 2
                      ? "delay-200 group-hover:delay-300"
                      : index === 3
                      ? "delay-100 group-hover:delay-[400ms]"
                      : "delay-[400ms] group-hover:delay-100"
                  }`}
                >
                  <img src={icon} alt="" className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <ManageTeamActionDropdown
          setTeamMemberDetailsModal={setTeamMemberDetailsModal}
        />
      </div>


      {/* profile image - name - email */}
      <div className="flex flex-col justify-center items-center text-center">
        <div className="size-20 rounded-full bg-primary-15 flex justify-center items-center">
          <img
            src={member.profileImg}
            alt=""
            className="rounded-full size-20"
          />
        </div>
        <h1 className="text-xl text-neutral-60 font-bold capitalize mt-2">
          {member.name}
        </h1>
        <p className="text-neutral-60/80 font-semibold text-xs">
          {member.email}
        </p>
      </div>

      {/* <div className="flex items-center justify-between gap-3">
        <div className="w-full shadow-sm p-2 bg-white rounded-lg flex flex-col gap-1">
          <p className="text-neutral-60/80 font-semibold text-xs">Job Title</p>
          <div className="flex items-center gap-2">
            <img src={teacher} alt="" className="size-5" />
            <p className="text-primary-10 font-bold text-sm">
              {member.jobTitle}
            </p>
          </div>
        </div>
        <div className="w-full shadow-sm p-2 bg-white rounded-lg flex flex-col gap-1">
          <p className="text-neutral-60/80 font-semibold text-xs">Address</p>
          <div className="flex items-center gap-2">
            <img src={teamLocation} alt="" className="size-5" />
            <p className="text-primary-10 font-bold text-sm">
              {member.address}
            </p>
          </div>
        </div>
      </div> */}

      <div className="bg-dark-5/40 p-2">
        <p className="text-neutral-60/80 font-medium text-sm mb-2 border-b border-dark-5">
          Skills
        </p>
        <div className="flex items-center gap-2">
          <div className="bg-white px-2 py-1 text-xs rounded-3xl w-fit">
            React
          </div>
          <div className="bg-white px-2 py-1 text-xs rounded-3xl w-fit">
            React
          </div>
          <div className="bg-white px-2 py-1 text-xs rounded-3xl w-fit">
            React
          </div>
        </div>
      </div>

      {/* Call && Email */}
      {/* <div className="flex items-center justify-between gap-3">
        <a
          href={`mailto:${member.email}`}
          className="w-full px-5 py-2 bg-dark-5/50 rounded-md flex justify-center items-center gap-2"
        >
          <img src={email} alt="" className="size-5" />
          <p className="text-neutral-60/80 font-medium text-base">Email</p>
        </a>
        <a
          href={`tel:${member.phone}`}
          className="w-full px-5 py-2 bg-primary-10 rounded-md flex justify-center items-center gap-2"
        >
          <img src={call} alt="" className="size-5" />
          <p className="text-white font-medium text-base">Call</p>
        </a>
      </div> */}
    </div>
  );
};

export default ManageTeamCard;
