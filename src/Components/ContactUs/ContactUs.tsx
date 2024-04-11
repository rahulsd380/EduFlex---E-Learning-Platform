import { useEffect } from "react";
import { VscCallOutgoing } from "react-icons/vsc";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuUserCheck } from "react-icons/lu";

import { RiCustomerService2Fill } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { FaUsersCog } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

import { RxCross1 } from "react-icons/rx";

const ContactUs = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(
        "#closeModal"
      );
      if (isModalOpen && closestDropdown === null) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="bg-primary-100 bg-opacity-30 backdrop-blur-sm fixed inset-0 flex justify-center items-center z-50 w-full mx-auto">
          {/* Form */}
          <div id="closeModal" className="w-5/6 mx-auto">
            <div className="bg-blue-500 w-full p-3 rounded-t-3xl relative">
              <h1 className="text-white font-Roboto font-bold text-xl text-center">
                Reach Out to Us Today for Any Inquiries or Assistance!
              </h1>

              <RxCross1
                onClick={() => setIsModalOpen(false)}
                className="text-white text-2xl absolute top-3 right-5 cursor-pointer"
              />
            </div>
            <div className="w-full shadow-lg bg-white mb-3 border-t border-gray-100 flex gap-5 p-4">
              <div className="w-1/2 flex flex-col gap-8 border-r-2 border-dotted items-center">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl font-Roboto font-semibold">
                    Let's Start a Conversation About Your Needs and Queries!
                  </h1>
                  <p className="text-gray-800 font-Roboto text-sm">
                    Caring Support Every Step of the Way: We're Here to Listen
                    and Assist You.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg font-Roboto font-medium">
                    Next Steps:
                  </h1>

                  <div className="flex gap-5 mt-3">
                    <div className="relative">
                      <div className="bg-gray-500 w-[1px] h-[90px] absolute mt-2 ml-2 z-10"></div>
                      <div className="flex flex-col gap-6 z-20">
                        <VscCallOutgoing className="text-xl z-20 bg-white" />
                        <HiOutlineUserGroup className="text-xl z-20 bg-white" />
                        <LuUserCheck className="text-xl z-20 bg-white" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      <p className="text-gray-800 font-Roboto">
                        Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                      <p className="text-gray-800 font-Roboto">
                        {" "}
                        Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                      <p className="text-gray-800 font-Roboto">
                        {" "}
                        Once you share your issue, our experts will reach you
                        out shortly.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 w-full rounded bg-gray-100 flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between mt-5">
                    <div className="flex flex-col gap-1 items-center">
                      <div className="rounded-full w-20 h-20 p-2 bg-white flex justify-center items-center">
                        <FiMessageSquare className="text-5xl text-blue-400" />
                      </div>
                      <h3 className="text-base font-semibold font-Roboto text-gray-600">
                        Instant Response
                      </h3>
                    </div>

                    <div className="flex flex-col gap-1 items-center">
                      <div className="rounded-full w-20 h-20 p-2 bg-white flex justify-center items-center">
                        <FaUsersCog className="text-5xl text-blue-400" />
                      </div>
                      <h3 className="text-base font-semibold font-Roboto text-gray-600">
                        Expert Assistance
                      </h3>
                    </div>

                    <div className="flex flex-col gap-1 items-center">
                      <div className="rounded-full w-20 h-20 p-2 bg-white flex justify-center items-center">
                        <RiCustomerService2Fill className="text-5xl text-blue-400" />
                      </div>
                      <h3 className="text-base font-semibold font-Roboto text-gray-600">
                        Personalized Service
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <form className="flex flex-col gap-3 bg-white rounded-3xl w-1/2">
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  placeholder="Your Name"
                  className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
                />

                <div className="flex items-center flex-col md:flex-row gap-5 w-full">
                  <input
                    type="number"
                    id="mobileNumber"
                    placeholder="Phone Number"
                    name="mobileNumber"
                    className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
                  />

                  <input
                    type="email"
                    id="Email"
                    placeholder="Your Email"
                    name="mobileNumber"
                    className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
                  />
                </div>

                <textarea
                  className="bg-white border border-gray-300 px-4 py-2 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full rounded-lg"
                  name="message"
                  placeholder="Enter Your Message"
                  id=""
                  cols={30}
                  rows={7}
                ></textarea>

                <button
                  className="bg-blue-500 px-4 w-full h-12 rounded-lg text-white"
                  type="submit"
                >
                  Send Message
                </button>

                <div className="flex items-center gap-3">
                  <p className="flex items-center gap-2 font-Roboto text-gray-700 text-left text-sm">
                    <MdAddIcCall className="text-xl" />
                    Call for any query :
                    <span className="flex items-center gap-1">
                      <a
                        href="tel:+880 1608249337"
                        className="font-medium hover:underline"
                      >
                        +880 1608249337
                      </a>
                      ,
                      <a
                        href="tel:+880 1608249337"
                        className="font-medium hover:underline"
                      >
                        +880 1860647218
                      </a>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
