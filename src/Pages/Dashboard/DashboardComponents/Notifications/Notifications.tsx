import { useEffect, useRef, useState } from "react";
import notification from "../../../../assets/Icons/notification.svg";
import NotificationCard from "./NotificationCard";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const close = (e : MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit ">
    <img
        onClick={() => setOpen((prev) => !prev)}
        src={notification}
        alt=""
        className="size-8 cursor-pointer"
      />
    <div
        className={`${
          open
            ? "visible translate-y-0 duration-300 w-96 h-72 overflow-y-auto -left-[250px] md:-left-56"
            : "invisible translate-y-4 size-0"
        } absolute top-16 z-50  bg-white shadow-xl rounded-b-lg py-2`}
      >
        <div className="flex flex-col overflow-y-hidden">
        {
          [1,2,3,4].map((_, index) => 

              <NotificationCard key={index}/>
          )
        }
        </div>
      </div>
  </div>
  );
};

export default Notifications;