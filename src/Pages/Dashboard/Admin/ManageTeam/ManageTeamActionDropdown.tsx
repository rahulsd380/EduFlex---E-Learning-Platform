import { useEffect, useState } from "react";
import threeDots from "../../../../assets/Icons/three-dots.svg";
import { Link } from "react-router-dom";

import edit from "../../../../assets/Icons/edit.svg";
import pause from "../../../../assets/Icons/pause.svg";
import remove from "../../../../assets/Icons/remove.svg";



const ManageTeamActionDropdown = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(
        ".dropdown"
      );
      if (isOpen && closestDropdown === null) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <div className="z-50">
      <div className="relative dropdown">
      <img onClick={toggleDropdown} src={threeDots} alt="" className="size-5 cursor-pointer" />
        {isOpen && (
          <div className="absolute right-0 mt-3 w-52 z-10 origin-top-right bg-gray-50 border border-dark-5 bg-white rounded-lg shadow p-2">
            <div className="py-1 flex flex-col gap-4">
             
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
              >
                <img src={edit} alt="" className="size-6"/>
                Update Details
              </button>
              <Link
                to={""}
                className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
              >
                <img src={pause} alt="" className="size-6"/>
                Suspend
              </Link>
              <Link
                to={""}
                className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
              >
                <img src={remove} alt="" className="size-6"/>
                Remove From team
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTeamActionDropdown;
