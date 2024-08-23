import { useState } from "react";
import facebook from "../../../../assets/Icons/Profile-Social-Media-Icons/facebook.svg";
import behance from "../../../../assets/Icons/Profile-Social-Media-Icons/behance.svg";
import discord from "../../../../assets/Icons/Profile-Social-Media-Icons/discord.svg";
import dribbble from "../../../../assets/Icons/Profile-Social-Media-Icons/dribbble.svg";
import github from "../../../../assets/Icons/Profile-Social-Media-Icons/github.svg";
import instagram from "../../../../assets/Icons/Profile-Social-Media-Icons/instagram.svg";
import linkedin from "../../../../assets/Icons/Profile-Social-Media-Icons/linkedin.svg";
import pinterest from "../../../../assets/Icons/Profile-Social-Media-Icons/pinterest.svg";
import reddit from "../../../../assets/Icons/Profile-Social-Media-Icons/reddit.svg";
import twitter from "../../../../assets/Icons/Profile-Social-Media-Icons/twitter.svg";
import whatsapp from "../../../../assets/Icons/Profile-Social-Media-Icons/whatsapp.svg";
import youtube from "../../../../assets/Icons/Profile-Social-Media-Icons/youtube.svg";
import eye from "../../../../assets/Icons/eye.svg";

const SocialLinksSetting = ({socialLinks}) => {

    const [selectedLink, setSelectedLink] = useState<string[]>(socialLinks);
    const [currentLink, setCurrentLink] = useState("");
    console.log(selectedLink);

    const handleAddSkill = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentLink.trim() !== "") {
            setSelectedLink([...selectedLink, currentLink]);
            setCurrentLink("");
        }
      };
    return (
        <div className="flex flex-col gap-4 mt-10 font-Roboto">
            Social Media Links
            {
  selectedLink.length > 0 ? (
    selectedLink.map((link, index) => (
      <div key={index} className="flex items-center gap-3">
        <div className="bg-dark-5/20 border border-dark-10/30 p-1 focus:border-primary-10 transition duration-300 focus:outline-none rounded">
          {
            link.includes("facebook") ? (
              <img src={facebook} alt="Facebook" className="size-[33px]" />
            ) : link.includes("behance") ? (
              <img src={behance} alt="Behance" className="size-[33px]" />
            ) : link.includes("discord") ? (
              <img src={discord} alt="Discord" className="size-[33px]" />
            ) : link.includes("dribbble") ? (
              <img src={dribbble} alt="Dribbble" className="size-[33px]" />
            ) : link.includes("github") ? (
              <img src={github} alt="Github" className="size-[33px]" />
            ) : link.includes("instagram") ? (
              <img src={instagram} alt="Instagram" className="size-[33px]" />
            ) : link.includes("linkedin") ? (
              <img src={linkedin} alt="LinkedIn" className="size-[33px]" />
            ) : link.includes("pinterest") ? (
              <img src={pinterest} alt="Pinterest" className="size-[33px]" />
            ) : link.includes("reddit") ? (
              <img src={reddit} alt="Reddit" className="size-[33px]" />
            ) : link.includes("twitter") ? (
              <img src={twitter} alt="Twitter" className="size-[33px]" />
            ) : link.includes("whatsapp") ? (
              <img src={whatsapp} alt="WhatsApp" className="size-[33px]" />
            ) : link.includes("youtube") ? (
              <img src={youtube} alt="YouTube" className="size-[33px]" />
            ) : (
              <img src={facebook} alt="Facebook" className="size-[33px]" />
            )
          }
        </div>
        <div className="relative w-full">
        <input
          defaultValue={link}
          type="text"
          id="name"
          className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
          placeholder="Enter your full name"
        />
        <div className="flex items-center gap-3 absolute right-2 top-0 bottom-0">
        <button className="border border-dark-10/30 px-2 py-[6px] text-2xl leading-none rounded hover:bg-dark-10/30 hover:text-white transition duration-300">
        <img src={eye} alt="" className="size-[15px]" />
        </button>
        <button className="border border-dark-10/30 px-[10px] py-[1px] text-2xl leading-none rounded hover:bg-warning-10 hover:text-white transition duration-300">-</button>
        </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-body-text text-sm">No Links Added</p>
  )
}

           


             {/* Add new skill */}
      <form onSubmit={handleAddSkill} className="flex flex-col gap-3 bg-dark-5/20 border border-dark-10/30 p-3 rounded w-full mt-5">
        <p className="text-neutral-60 text-sm">Add New Link</p>
        <div className="flex gap-4 w-full">
          <input
          
          value={currentLink}
          onChange={(e) => setCurrentLink(e.target.value)}
            placeholder="Enter Link"
            name="skill"
            type="text"
            className="w-full rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
          />

            <button
              type="submit"
              className="px-3 py-2 bg-primary-10 text-white rounded w-[200px]"
            >
              Add
            </button>
        </div>
      </form>
        </div>
    );
};

export default SocialLinksSetting;