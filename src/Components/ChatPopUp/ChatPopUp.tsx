import { useState } from "react";
import downArrow from "../../assets/Icons/down-arrow-dark.svg";
import search from "../../assets/Icons/search.svg";

const ChatPopUp = () => {
  const [chatTab, setChatTab] = useState<"Chats" | "Group" | "Admins">("Chats");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-0 right-0 w-full max-w-[350px] z-50">
      <div
        className={`bg-gradient-to-r from-[#f7fee7] to-[#f0fdf4] border border-neutral-55/30 rounded-t-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "h-[400px]" : "h-12"
        }`}
      >
        {/* Chat Header */}
        <div
          className="flex items-center justify-between p-2"
          
        >
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-full bg-neutral-55/20"></div>
            <p>Messaging</p>
          </div>
          <img
          onClick={toggleExpand}
            src={downArrow}
            alt=""
            className={`cursor-pointer size-6 transition-transform ${
              isExpanded ? "rotate-180 transition duration-300" : "rotate-0 transition duration-300"
            }`}
          />
        </div>

        {isExpanded && (
          <div className="p-2 flex flex-col gap-5">
            {/* Search Bar */}
            <div className="relative w-full shadow rounded-lg">
              <img src={search} alt="" className="absolute right-[6px] top-3" />
              <input
                placeholder="Want to learn?"
                type="text"
                className="w-full border-[1px] border-dark-5 rounded-lg bg-white py-2 pl-2 pr-7 focus:border-primary-10 transition duration-300 focus:outline-none"
              />
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-center gap-16">
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
            <div className="bg-white shadow p-2 rounded-lg flex flex-col gap-5">

              <div className="flex gap-3 w-full border-b border-neutral-40/30 pb-2">
                <div className="size-10 rounded-full bg-neutral-55/20"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-60 font-medium">Rahul Sutradhar</p>
                    <p className="text-neutral-60 text-sm">August 9</p>
                  </div>
                  <p className="text-body-text text-xs">Lorem ipsum dolor sit amet</p>
                </div>
              </div>

              <div className="flex gap-3 w-full border-b border-neutral-40/30 pb-2">
                <div className="size-10 rounded-full bg-neutral-55/20"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-60 font-medium">Rahul Sutradhar</p>
                    <p className="text-neutral-60 text-sm">August 9</p>
                  </div>
                  <p className="text-body-text text-xs">Lorem ipsum dolor sit amet</p>
                </div>
              </div>

              <div className="flex gap-3 w-full border-b border-neutral-40/30 pb-2">
                <div className="size-10 rounded-full bg-neutral-55/20"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-60 font-medium">Rahul Sutradhar</p>
                    <p className="text-neutral-60 text-sm">August 9</p>
                  </div>
                  <p className="text-body-text text-xs">Lorem ipsum dolor sit amet</p>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPopUp;
