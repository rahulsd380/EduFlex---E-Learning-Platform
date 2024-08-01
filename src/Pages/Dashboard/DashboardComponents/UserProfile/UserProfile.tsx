import profileImg from '../../../../assets/Images/profileImg.jpeg'
import prize1 from '../../../../assets/Icons/prize1.svg';
import prize2 from '../../../../assets/Icons/prize2.svg';
import prize3 from '../../../../assets/Icons/prize3.svg';
import prize4 from '../../../../assets/Icons/prize4.svg';
import { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import SocialLinksSetting from './SocialLinksSetting';
import SkillsSetting from './SkillsSetting';
import NotificationSetting from './NotificationSetting';
import PrivacySetting from './PrivacySetting';

const UserProfile = () => {
  const [profileTab, setprofileTab] = useState<"PersonalDetails" | "SocialLinks" | "Skills" | "Notifications" | "Privacy">("Notifications");
    return (
        <div className="flex gap-10 w-full font-Roboto">
           <div className="bg-white rounded-xl p-3 shadow w-[35%] flex flex-col gap-10">


      {/* profile image - name - email */}
      <div className="flex flex-col justify-center items-center text-center">
        <div className="size-20 rounded-full bg-primary-15 flex justify-center items-center">
          <img src={profileImg} alt="" className="rounded-full size-20" />
        </div>
        <h1 className="text-xl text-neutral-60 font-bold capitalize mt-2">
          Rahul Sutradhar
        </h1>
        <p className="text-neutral-60/80 font-semibold text-xs bg-warning-10 px-2 py-1 text-white rounded-xl">Manager</p>
      </div>

      <div className='flex gap-5 justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-primary-10/5 p-1 size-11 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          07
        </div>
        <p className='text-neutral-60 text-sm '>Course In Progress</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-primary-10/5 p-1 size-11 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          10
        </div>
        <p className='text-neutral-60 text-sm '>Course Completed</p>
      </div>
      </div>

      {/* Achievements */}
      <div>
      <h1 className="text-xl text-neutral-60 font-medium capitalize mt-2">
          Your Achievements
        </h1>

        <div className='flex items-center gap-5 mt-3'>
        
        <div className='bg-warning-10/5 p-1 size-16 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          <img src={prize1} alt="" className='size-10' />
        </div>
        
        <div className='bg-warning-10/5 p-1 size-16 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          <img src={prize2} alt="" className='size-10' />
        </div>
        
        <div className='bg-warning-10/5 p-1 size-16 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          <img src={prize3} alt="" className='size-10' />
        </div>
        
        <div className='bg-warning-10/5 p-1 size-16 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          <img src={prize4} alt="" className='size-10' />
        </div>

        </div>
      </div>

      {/* Support */}
      <div className='flex flex-col gap-5'>
      <h1 className="text-xl text-neutral-60 font-medium capitalize mt-2">
          Support
        </h1>

        <div className='flex items-center gap-2'>
        <div className='bg-warning-10/5 p-1 size-8 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          <img src={prize1} alt="" className='size-10' />
        </div>
        <p className='text-neutral-60 text-sm '>Become a Mentor</p>
        </div>

        <div className='flex items-center gap-2'>
        <div className='bg-warning-10/5 p-1 size-8 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          <img src={prize1} alt="" className='size-10' />
        </div>
        <p className='text-neutral-60 text-sm '>Get Support</p>
        </div>

        <div className='flex items-center gap-2'>
        <div className='bg-warning-10/5 p-1 size-8 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          <img src={prize1} alt="" className='size-10' />
        </div>
        <p className='text-neutral-60 text-sm '>Invite Friends</p>
        </div>

        <div className='flex items-center gap-2'>
        <div className='bg-warning-10/5 p-1 size-8 rounded-full flex items-center justify-center shadow-inner font-bold text-xl'>
          <img src={prize1} alt="" className='size-10' />
        </div>
        <p className='text-neutral-60 text-sm '>Delete Account</p>
        </div>
      </div>

           </div>

           <div className="bg-white rounded-xl p-3 shadow w-[65%]">
           <h1 className="text-xl text-neutral-60 font-medium capitalize mt-2">
          Profile Setting
        </h1>

        <div className='flex items-center gap-7 border-b border-primary-10 pb-3 mt-5'>

        <button onClick={() => setprofileTab("PersonalDetails")} className={`${profileTab === "PersonalDetails" ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]" : "text-neutral-60"} text-sm`}>Personal Details</button>

        <button onClick={() => setprofileTab("SocialLinks")} className={`${profileTab === "SocialLinks" ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]" : "text-neutral-60"} text-sm`}>Social Links</button>

        <button onClick={() => setprofileTab("Skills")} className={`${profileTab === "Skills" ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]" : "text-neutral-60"} text-sm`}>Skills</button>

        <button onClick={() => setprofileTab("Notifications")} className={`${profileTab === "Notifications" ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]" : "text-neutral-60"} text-sm`}>Notifications</button>

        <button onClick={() => setprofileTab("Privacy")} className={`${profileTab === "Privacy" ? " bg-primary-10 px-3 py-2 text-white rounded-[100px]" : "text-neutral-60"} text-sm`}>Privacy</button>

        
        </div>

        {
          profileTab === "PersonalDetails" ? <PersonalInformation />
          :
          profileTab === "SocialLinks" ? <SocialLinksSetting/>
          :
          profileTab === "Skills" ? <SkillsSetting/>
          :
          profileTab === "Notifications" ? <NotificationSetting/>
          :
          <PrivacySetting/>
        }

           </div>

           
        </div>
    );
};

export default UserProfile;