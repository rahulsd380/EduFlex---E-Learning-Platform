import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiUnlock } from "react-icons/ci";


const UserDropdown = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


  const toggleDropdown = (): void => {
    setIsOpen(!isOpen)
  }

 

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest('.dropdown')
      if (isOpen && closestDropdown === null) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])
    return (
        <div>
             <div className="relative dropdown">
            <div
              onClick={toggleDropdown}
              className="cursor-pointer text-2xl text-gray-500 hover:text-blue-500 transition duration-300"
            >
              <FaRegUser/>
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-3 w-52 z-10 origin-top-right bg-gray-50 border rounded-lg shadow p-2">
                <div className="py-1 flex flex-col gap-3">
                  <Link to={"/"} className="font-Roboto text-gray-500 font-normal hover:text-blue-500 transition duration-300">
                    Home
                  </Link>
                  <Link to={"/"} className="font-Roboto text-gray-500 font-normal hover:text-blue-500 transition duration-300">
                    Setting
                  </Link>
                  <Link to={"/"} className="font-Roboto text-gray-500 font-normal hover:text-blue-500 transition duration-300">
                    All Course
                  </Link>
                  <Link to={""} className="font-Roboto text-gray-500 font-normal hover:text-blue-500 transition duration-300 flex items-center gap-1 transform hover:-translate-y-0.5"><CiUnlock className="text-xl"/> Login</Link>
                  <Link to={""} className="font-Roboto text-gray-500 font-normal hover:text-blue-500 transition duration-300 flex items-center gap-1 transform hover:-translate-y-0.5">
                    <FiLogOut />
                    Logout
                  </Link>
                  <Link to={""} className="bg-blue-500 py-2 px-2 md:px-4 rounded-md text-white font-Roboto font-normal">Sign Up For Free</Link>
                </div>
              </div>
            )}
          </div>
        </div>
    );
};

export default UserDropdown;