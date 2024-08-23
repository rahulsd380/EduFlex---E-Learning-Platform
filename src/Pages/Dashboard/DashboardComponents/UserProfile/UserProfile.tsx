import profileImg from "../../../../assets/Images/profileImg.jpeg";
import prize1 from "../../../../assets/Icons/prize1.svg";
import prize2 from "../../../../assets/Icons/prize2.svg";
import prize3 from "../../../../assets/Icons/prize3.svg";
import prize4 from "../../../../assets/Icons/prize4.svg";

import warning from "../../../../assets/Icons/warning.svg";

import mentor from "../../../../assets/Icons/mentor.svg";
import support from "../../../../assets/Icons/support.svg";
import inviteFriend from "../../../../assets/Icons/invite-friend.svg";
import deleteProfile from "../../../../assets/Icons/delete-profile.svg";
import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import SocialLinksSetting from "./SocialLinksSetting";
import SkillsSetting from "./SkillsSetting";
import NotificationSetting from "./NotificationSetting";
import PrivacySetting from "./PrivacySetting";
import ProjectSetting from "./ProjectSetting/ProjectSetting";
import { useDeleteAccountMutation, useGetMeQuery } from "../../../../Redux/Features/Auth/authApi";
import Modal1 from "../../../../Components/Modals/Modal1";
import { toast } from "sonner";

const UserProfile = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const {data:userProfileData , isLoading} = useGetMeQuery({});

  const [deleteAccount, {isLoading : isDeleting}] = useDeleteAccountMutation();

  const handleDeleteAccount = async (userId: string) => {
    const deleteData = {
      isAccountDeleted: true,
    };
    try {
      const res = await deleteAccount({ userId, data: deleteData }).unwrap();
      toast.success(res.message);
      setOpenModal1(false)
    } catch (err) {
      toast.success(err)
    }
  };
  

  const {
    _id,
    name : userName,
    email,
    job_title,
    projects,
    address,
    phone_number,
    skills,
    objective,
    social_links,
    role,
    enrolledCourses
  } = userProfileData?.data || {};

  const [profileTab, setprofileTab] = useState<
    | "PersonalDetails"
    | "SocialLinks"
    | "Skills"
    | "Notifications"
    | "Privacy"
    | "Projects"
  >("PersonalDetails");

  if(isLoading){
    return <p>Loading...</p>
  }
  
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full font-Roboto">
      <div className="bg-white rounded-xl p-3 shadow w-full md:w-[35%] flex flex-col gap-10">
        {/* profile image - name - email */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="size-20 rounded-full bg-primary-15 flex justify-center items-center">
            <img src={profileImg} alt="" className="rounded-full size-20" />
          </div>
          <h1 className="text-xl text-neutral-60 font-bold capitalize mt-2">
            Rahul Sutradhar
          </h1>
          <p className="text-neutral-60/80 font-semibold text-xs bg-warning-10 px-2 py-1 text-white rounded-xl">
            Manager
          </p>
        </div>

        <div className="flex gap-5 justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-primary-10/5 p-1 size-11 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              07
            </div>
            <p className="text-neutral-60 text-sm ">Course In Progress</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-primary-10/5 p-1 size-11 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              10
            </div>
            <p className="text-neutral-60 text-sm ">Course Completed</p>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h1 className="text-xl text-neutral-60 font-medium capitalize mt-2">
            Your Achievements
          </h1>

          <div className="flex items-center gap-5 mt-3">
            <div className="bg-warning-10/5 p-1 size-16 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              <img src={prize1} alt="" className="size-10" />
            </div>

            <div className="bg-warning-10/5 p-1 size-16 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              <img src={prize2} alt="" className="size-10" />
            </div>

            <div className="bg-warning-10/5 p-1 size-16 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              <img src={prize3} alt="" className="size-10" />
            </div>

            <div className="bg-warning-10/5 p-1 size-16 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              <img src={prize4} alt="" className="size-10" />
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl text-neutral-60 font-medium capitalize mt-2">
            Support
          </h1>

          <div className="flex items-center gap-2">
            <div className="bg-warning-10/5 p-1 size-8 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              <img src={mentor} alt="" className="size-10" />
            </div>
            <p className="text-neutral-60 text-sm ">Become a Mentor</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-warning-10/5 p-1 size-8 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              <img src={support} alt="" className="size-10" />
            </div>
            <p className="text-neutral-60 text-sm ">Get Support</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-warning-10/5 p-1 size-8 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              <img src={inviteFriend} alt="" className="size-10" />
            </div>
            <p className="text-neutral-60 text-sm ">Invite Friends</p>
          </div>

          <div onClick={() => setOpenModal1(true)} className="flex items-center gap-2 cursor-pointer">
            <div className="bg-warning-10/5 p-1 size-8 rounded-full flex items-center justify-center shadow-inner font-bold text-xl">
              <img src={deleteProfile} alt="" className="size-10" />
            </div>
            <p className="text-neutral-60 text-sm ">Delete Account</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-3 shadow w-full md:w-[65%]">
        <h1 className="text-xl text-neutral-60 font-medium capitalize mt-2">
          Profile Setting
        </h1>

        <div className="flex overflow-x-auto custom-scrollbar2 items-center gap-7 border-b border-primary-10 pb-3 mt-5 w-full">
          <button
            onClick={() => setprofileTab("PersonalDetails")}
            className={`${
              profileTab === "PersonalDetails"
                ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]"
                : "text-neutral-60"
            } w-fit text-sm`}
          >
            Personal Details
          </button>

          <button
            onClick={() => setprofileTab("SocialLinks")}
            className={`${
              profileTab === "SocialLinks"
                ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]"
                : "text-neutral-60"
            } text-sm`}
          >
            Social Links
          </button>

          <button
            onClick={() => setprofileTab("Skills")}
            className={`${
              profileTab === "Skills"
                ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]"
                : "text-neutral-60"
            } text-sm`}
          >
            Skills
          </button>

          <button
            onClick={() => setprofileTab("Projects")}
            className={`${
              profileTab === "Projects"
                ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]"
                : "text-neutral-60"
            } text-sm`}
          >
            Projects
          </button>

          <button
            onClick={() => setprofileTab("Notifications")}
            className={`${
              profileTab === "Notifications"
                ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]"
                : "text-neutral-60"
            } text-sm`}
          >
            Notifications
          </button>

          <button
            onClick={() => setprofileTab("Privacy")}
            className={`${
              profileTab === "Privacy"
                ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]"
                : "text-neutral-60"
            } text-sm`}
          >
            Privacy
          </button>
        </div>

        {profileTab === "PersonalDetails" ? (
          <PersonalInformation userName={userName} email={email} address={address} phoneNumber={phone_number}/>
        ) : profileTab === "SocialLinks" ? (
          <SocialLinksSetting socialLinks={social_links}/>
        ) : profileTab === "Skills" ? (
          <SkillsSetting skills={skills}/>
        ) : profileTab === "Notifications" ? (
          <NotificationSetting />
        ) : profileTab === "Projects" ? (
          <ProjectSetting projects={projects} />
        ) : (
          <PrivacySetting />
        )}
      </div>




      <Modal1 openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[500px] overflow-y-auto p-8"}>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="size-20 rounded-full bg-warning-10/20 p-1 flex items-center justify-center">
              <img src={warning} alt="" className="size-14" />
            </div>

            <h1 className="font-Roboto text-2xl text-neutral-60 text-center font-semibold">Are you sure?</h1>
            <p className="text-body-text font-Roboto text-sm text-center max-w-96 mx-auto">Once your account is deleted, all of your informations will be lost and you will not be able to revert those again!</p>

            <div className="flex flex-col gap-3 w-full">
            <button
            onClick={() => handleDeleteAccount(_id)}
                type="submit"
                className="bg-warning-10 border border-warning-10 text-white font-medium px-10 py-3 rounded focus:outline-none shadow"
              >
                {
                  isDeleting ? 
                  "Deleting..."
                  :
                  "Delete Account"
                }
              </button>

            <button
            onClick={() => setOpenModal1(false)}
                className="bg-dark-5/60 border border-dark-5 text-body-text font-medium px-10 py-3 rounded focus:outline-none shadow"
              >
                Cancel
              </button>
            </div>


          </div>
      </Modal1>



    </div>
  );
};

export default UserProfile;
