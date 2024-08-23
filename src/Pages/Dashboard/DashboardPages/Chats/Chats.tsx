import { useState } from "react";
import downArrow from "../../../../assets/Icons/down-arrow-dark.svg";
import search from "../../../../assets/Icons/search.svg";
import dots from "../../../../assets/Icons/three-dots.svg";
import sendImg from "../../../../assets/Icons/image.svg";
import sendFile from "../../../../assets/Icons/file.svg";
import send from "../../../../assets/Icons/send.svg";

const Chats = () => {
  const [chatTab, setChatTab] = useState<"Chats" | "Group" | "Admins">("Chats");

  return (
    <div className="font-Roboto">
      <div className="flex flex-col lg:flex-row bg-dark-5/40 rounded-lg p-5 gap-7">
        {/* Left Side */}
        <div className="w-full lg:w-[50%] xl:w-[35%] bg-white rounded-lg pb-4">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-dark-5 pb-3 bg-primary-10 rounded-t-lg p-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-neutral-55/40"></div>
              <p className="text-white font-medium text-lg">Rahul Sutradhar</p>
            </div>
            <img src={downArrow} alt="" className="size-5" />
          </div>

          <div className="flex flex-col gap-5">
            {/* Search Bar */}
            <div className=" p-4">
              <div className="relative w-full shadow rounded-lg">
                <img
                  src={search}
                  alt=""
                  className="absolute right-[6px] top-3"
                />
                <input
                  placeholder="Want to learn?"
                  type="text"
                  className="w-full border-[1px] border-dark-5 rounded-lg bg-white py-2 pl-2 pr-7 focus:border-primary-10 transition duration-300 focus:outline-none"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-center gap-16 bg-primary-10/5 p-2 rounded-lg">
              <p
                onClick={() => setChatTab("Chats")}
                className={`cursor-pointer pb-2 text-center font-medium ${
                  chatTab === "Chats"
                    ? "text-primary-10 border-b border-primary-10 font-semibold"
                    : "text-neutral-60"
                }`}
              >
                Chat
              </p>

              <p
                onClick={() => setChatTab("Group")}
                className={`cursor-pointer pb-2 text-center font-medium ${
                  chatTab === "Group"
                    ? "text-primary-10 border-b border-primary-10 font-semibold"
                    : "text-neutral-60"
                }`}
              >
                Group
              </p>

              <p
                onClick={() => setChatTab("Admins")}
                className={`cursor-pointer pb-2 text-center font-medium ${
                  chatTab === "Admins"
                    ? "text-primary-10 border-b border-primary-10 font-semibold"
                    : "text-neutral-60"
                }`}
              >
                Admins
              </p>
            </div>

            {/* Chat Messages */}
            <div className="flex flex-col">
              {/* Message Card */}
              <div className="flex gap-3 w-full border-b border-neutral-40/30 pb-2 hover:bg-dark-5/60 cursor-pointer p-4">
                <div className="size-10 rounded-full bg-neutral-55/20"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-60 font-medium">
                      Rahul Sutradhar
                    </p>
                    <p className="text-neutral-60 text-sm">August 9</p>
                  </div>
                  <p className="text-body-text text-xs">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>

              {/* Message Card */}
              <div className="flex gap-3 w-full border-b border-neutral-40/30 pb-2 hover:bg-dark-5/60 cursor-pointer p-4">
                <div className="size-10 rounded-full bg-neutral-55/20"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-60 font-medium">
                      Rahul Sutradhar
                    </p>
                    <p className="text-neutral-60 text-sm">August 9</p>
                  </div>
                  <p className="text-body-text text-xs">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>

              {/* Message Card */}
              <div className="flex gap-3 w-full border-b border-neutral-40/30 pb-2 hover:bg-dark-5/60 cursor-pointer p-4">
                <div className="size-10 rounded-full bg-neutral-55/20"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-60 font-medium">
                      Rahul Sutradhar
                    </p>
                    <p className="text-neutral-60 text-sm">August 9</p>
                  </div>
                  <p className="text-body-text text-xs">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[65%] bg-white p-4 rounded-lg relative">
            {/* Header */}
          <div className="flex items-center justify-between border-b pb-2 border-dark-5">
            <div className="flex items-center gap-3">
              {/* Image */}
              <div className="size-10 rounded-full bg-neutral-55/40"></div>

              {/* Name & online */}
              <div className="flex flex-col gap-1">
                <p className="text-neutral-60 font-medium text-lg leading-none">
                  Rahul Sutradhar
                </p>
                {/* Online */}
                <div className="flex items-center gap-2">
                  <p className="text-body-text text-sm">Online</p>
                  <div className="size-2 rounded-full bg-primary-10"></div>
                </div>
              </div>
            </div>

            <div className="size-10 rounded-2xl bg-dark-5/60 p-2 flex items-center justify-center">
              <img src={dots} alt="" className="size-5" />
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-5 mb-16">
            <div className="bg-dark-5/60 text-neutral-55 px-3 py-2 rounded-r-3xl rounded-tl-2xl rounded-bl-lg w-fit">Hi, how are you?</div>
            <div className="flex justify-end">
            <div className="bg-primary-10 text-white px-3 py-2 rounded-l-3xl rounded-tr-2xl rounded-br-lg w-fit">Hello</div>
            </div>
          </div>

          {/* Input field */}
          <div className="flex items-center gap-5 w-full absolute bottom-0 left-0 p-4">
            <div className="flex items-center gap-3">

            <div className="group relative flex cursor-pointer justify-center size-[22px]">
            {/* Hover button */}
            <img src={sendImg} alt="" className="size-[22px] cursor-pointer" />
            {/* Hover Text */}
            <div className="absolute -left-2 -top-8 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-9 group-hover:opacity-100  ">
                <p className="h-fit rounded-md bg-dark-5 px-2 py-1 text-body-text text-xs">Attach An Image</p>
            </div>
        </div>


            {/* <img src={sendImg} alt="" className="size-[22px] cursor-pointer" /> */}

            
            <div className="group relative flex cursor-pointer justify-center size-6">
            {/* Hover button */}
            <img src={sendFile} alt="" className="size-6 cursor-pointer" />
            {/* Hover Text */}
            <div className="absolute -top-8 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-9 group-hover:opacity-100  ">
                <p className="h-fit rounded-md bg-dark-5 px-2 py-1 text-body-text text-xs">Attach File</p>
            </div>
        </div>
            {/* <img src={sendFile} alt="" className="size-6 cursor-pointer" /> */}
            </div>
            
            <div className="relative w-full">
            <input type="text" placeholder="Type your message" className="bg-dark-5/60 rounded-3xl px-4 py-2 w-full border border-neutral-55/10 focus:border-primary-10 transition duration-300 focus:outline-none" />
            <img src={send} alt="" className="size-6 absolute bottom-2 right-3 cursor-pointer" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Chats;
