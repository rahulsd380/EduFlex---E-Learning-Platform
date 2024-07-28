import cross from "../../../../assets/Icons/cross.svg";
import profileImg from "../../../../assets/Images/profileImg.jpeg";
import { socialMediaIcons } from "../../../../Components/Footer/footerConstants";
import teacher from "../../../../assets/Icons/teacher.svg";
import teamLocation from "../../../../assets/Icons/team-location.svg";
import emailOutline from "../../../../assets/Icons/email-outline.svg";
import callOutline from "../../../../assets/Icons/call-outline.svg";

import email from "../../../../assets/Icons/email.svg";
import call from "../../../../assets/Icons/call-white.svg";
import { useState } from "react";
import AddSocialLinkModal from "./AddSocialLinkModal";

const TeamMemberDetailsModal = ({
  openTeamMemberDetailsModal,
  setTeamMemberDetailsModal,
}) => {
    const [addSocialLinkModal, setAddSocialLinkModal] = useState(false);
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB"]
  return (
    <div className="mx-auto w-fit">
      <div
        onClick={() => setTeamMemberDetailsModal(false)}
        className={`fixed w-screen z-[100] ${
          openTeamMemberDetailsModal
            ? "visible opacity-100"
            : "invisible opacity-0"
        } inset-0 grid place-items-center bg-neutral-55/40 backdrop-blur-sm duration-100 dark:bg-transparent`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-[640px] h-[400px] rounded-xl bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white overflow-y-auto ${
            openTeamMemberDetailsModal
              ? "opacity-1 duration-300"
              : "scale-110 opacity-0 duration-150"
          }`}
        >
          <div className="flex justify-end">
            <button className="size-7">
              <img
                onClick={() => setTeamMemberDetailsModal(false)}
                src={cross}
                alt=""
                className=" cursor-pointer"
              />
            </button>
          </div>

          <div className="flex gap-5">
          <div className="w-[30%]">
          <div className="flex w-full h-40 rounded-lg bg-neutral-40">
            <img src={profileImg} alt="" className="rounded-lg size-full" />
          </div>

            {/* Skills */}
          <div className="mt-2">
          <p className="text-body-text font-medium text-sm">Skills</p>
          <hr className="border border-neutral-40 mt-1" />

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {
                skills.map((skill, index) => 
                    <div key={index} className="px-1 bg-white rounded border border-neutral-55/50 text-body-text text-xs">
                {skill}
            </div>
                )
            }
          </div>
          </div>

          {/* Call && Email */}
        <div className="flex items-center justify-between gap-3 mt-3">
            <a href={`mailto:${"rahulsd380@gmail.com"}`} className="w-full px-5 py-2 bg-dark-5/50 rounded-md flex justify-center items-center gap-2">
            <img src={email} alt="" className="size-5" />
                <p className="text-neutral-60/80 font-medium text-base">Email</p>
            </a>
            

            <a href="tel:+8801608249337" className="w-full px-5 py-2 bg-primary-10 rounded-md flex justify-center items-center gap-2">
            <img src={call} alt="" className="size-5" />
                <p className="text-white font-medium text-base">Call</p>
            </a>
        </div>

          {/* <button className="px-3 py-2 bg-primary-10 text-white w-full rounded mt-5">
            Add More Skill
          </button> */}

          {/* <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
                <img src={teacher} alt="" className="size-5" />
                <p className="text-body-text font-medium text-sm">Instructor</p>
                </div>

                <div className="flex items-center gap-2">
                <img src={teamLocation} alt="" className="size-5" />
                <p className="text-body-text font-medium text-sm">Cumilla, BD</p>
                </div>

                <div className="flex items-center gap-2">
                <img src={emailOutline} alt="" className="size-5" />
                <p className="text-body-text font-medium text-sm">rahulsd380@gmail.com</p>
                </div>

                <a href="tel:+8801608249337" className="flex items-center gap-2">
                <img src={callOutline} alt="" className="size-5" />
                <p className="text-body-text font-medium text-sm">+8801608249337</p>
                </a>
          </div> */}
          </div>


            {/* Right side info */}
          <div className="w-[70%] overflow-y-auto">
          <h1 className="text-2xl text-neutral-60 font-bold capitalize leading-none">
          Rahul Sutradhar
        </h1>
        <p className="text-neutral-60/80 font-semibold text-xs mt-2">MERN Stack Instructor</p>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mt-3">
            {socialMediaIcons.map((icon, index) => (
              <a
                href={icon.href}
                target="blank"
                key={index}
                style={{ backgroundColor: icon.bgColor }}
                className={`size-7  rounded-full flex justify-center items-center`}
              >
                <img src={icon.icon} alt="" className="size-3" />
              </a>
            ))}
          </div>

          <hr className="border border-neutral-40 mt-4" />

        <p className="text-neutral-60/80 font-semibold text-xs mt-4 text-justify">I am a MERN Stack Instructor with extensive experience in teaching and developing full-stack web applications. Passionate about sharing knowledge, he excels in guiding students through the intricacies of MongoDB, Express.js, React, and Node.js, helping them build robust and scalable applications.</p>

        <div className="mt-5">
            <form className="flex flex-col gap-6 border border-neutral-40/30 p-2 rounded">
                {/* Personal Informations */}
                <div className="flex flex-col gap-3">
            <p className="text-neutral-60 font-bold text-sm">Personal Informations</p>
                <div className="flex items-center gap-1">
                {/* First Name */}
                <div className="flex flex-col gap-1">
                <label htmlFor="first-name" className="text-body-text font-medium text-sm">First Name</label>
            <input
            placeholder="Jonny"
                defaultValue={"Rahul"}
                name="first-name"
                type="text"
                className=" rounded bg-dark-5/40 border border-dark-10/30 p-2 w-full focus:border-primary-10 transition duration-300 focus:outline-none"
              />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1">
                <label htmlFor="last-name" className="text-body-text font-medium text-sm">Last Name</label>
            <input
            placeholder="Bairstow"
                defaultValue={"Sutradhar"}
                name="last-name"
                type="text"
                className="w-full rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
              />
                </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1">
                <label htmlFor="phone-number" className="text-body-text font-medium text-sm">Phone Number</label>
            <input
             placeholder="000 000 000"
                defaultValue={"+880 1608249337"}
                name="phone-number"
                type="text"
                className=" rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
              />
                </div>

            {/* Address */}
                <div className="flex flex-col gap-1">
                <label htmlFor="location" className="text-body-text font-medium text-sm">Address</label>
            <input
             placeholder="London, England"
                defaultValue={"Cumilla, Bangladesh"}
                name="location"
                type="text"
                className=" rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
              />
                </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
            <p className="text-neutral-60 font-bold text-sm">Social Links</p>
            <button type="button" onClick={() => setAddSocialLinkModal(true)} className="p-1 max-w-[100px] bg-white hover:bg-primary-10 hover:text-white transition duration-300 border border-neutral-40/50 text-neutral-60 font-bold text-sm w-full rounded-[100px]">
            Add Link
          </button>
            </div>
               
            {/* Social links card */}
               <div className="flex items-center gap-2">
               <div className="bg-dark-5/40 p-2 rounded flex items-center justify-center">
                    <img src={callOutline} alt="" className="size-7"/>
                </div>
                <input
             placeholder="www.example.com"
                defaultValue={"www.facebook.com"}
                name="location"
                type="text"
                className="w-full rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
              />
               </div>

                <div className="flex justify-end">
                <button className="px-3 py-2 max-w-[150px] bg-primary-10 text-white w-full rounded mt-5">
            Save Changes
          </button>
                </div>
                </div>


            </form>
        </div>
          </div>
        </div>


        </div>
      </div>
      <AddSocialLinkModal addSocialLinkModal={addSocialLinkModal} setAddSocialLinkModal={setAddSocialLinkModal}/>
    </div>
  );
};

export default TeamMemberDetailsModal;
