import code from "../../assets/Icons/code.svg";
import { FaChevronRight } from "react-icons/fa6";

const OurService = () => {
    return (
        <div className="font-Roboto max-w-[1500px] w-[90%] mx-auto mt-20">
            <div className="flex flex-col gap-1 my-5">
                <p className="text-primary-10 font-semibold text-base text-center">Our Services</p>
                <h1 className="text-3xl text-neutral-5 font-bold text-center">Fostering a playful & engaging learning environment</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">


{/* Cards */}
                
                <div className="group px-10 py-[30px] rounded-xl border-[1px] border-dark-5 bg-white hover:bg-primary-10 transition duration-500">
                   <div className="flex items-center gap-5">
                   <div className="px-[11px] py-3 bg-secondary-5 rounded-lg ">
                   <img src={code} alt="" />
                   </div>
                   <h1 className="text-2xl text-neutral-5 font-bold group-hover:text-white">UX Design Course</h1>
                   </div>

                   <p className="text-body-text font-normal text-base mt-[30px] group-hover:text-white">Classes in development that cover the most recent advancements in web.</p>


                   <div className="flex items-center gap-3 mt-[22px]">
                   <p className="text-primary-10 font-medium text-xl group-hover:text-white">Learn More</p>
                   <FaChevronRight className="text-primary-10 group-hover:text-white"/>
                   </div>
                </div>
                
                <div className="group px-10 py-[30px] rounded-xl border-[1px] border-dark-5 bg-white hover:bg-primary-10 transition duration-500">
                   <div className="flex items-center gap-5">
                   <div className="px-[11px] py-3 bg-secondary-5 rounded-lg ">
                   <img src={code} alt="" />
                   </div>
                   <h1 className="text-2xl text-neutral-5 font-bold group-hover:text-white">UX Design Course</h1>
                   </div>

                   <p className="text-body-text font-normal text-base mt-[30px] group-hover:text-white">Classes in development that cover the most recent advancements in web.</p>


                   <div className="flex items-center gap-3 mt-[22px]">
                   <p className="text-primary-10 font-medium text-xl group-hover:text-white">Learn More</p>
                   <FaChevronRight className="text-primary-10 group-hover:text-white"/>
                   </div>
                </div>
                
                <div className="group px-10 py-[30px] rounded-xl border-[1px] border-dark-5 bg-white hover:bg-primary-10 transition duration-500">
                   <div className="flex items-center gap-5">
                   <div className="px-[11px] py-3 bg-secondary-5 rounded-lg ">
                   <img src={code} alt="" />
                   </div>
                   <h1 className="text-2xl text-neutral-5 font-bold group-hover:text-white">UX Design Course</h1>
                   </div>

                   <p className="text-body-text font-normal text-base mt-[30px] group-hover:text-white">Classes in development that cover the most recent advancements in web.</p>


                   <div className="flex items-center gap-3 mt-[22px]">
                   <p className="text-primary-10 font-medium text-xl group-hover:text-white">Learn More</p>
                   <FaChevronRight className="text-primary-10 group-hover:text-white"/>
                   </div>
                </div>
                
             

            </div>
        </div>
    );
};

export default OurService;