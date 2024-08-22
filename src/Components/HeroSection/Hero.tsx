import { Link } from "react-router-dom";
import speak from "../../assets/Icons/Speak.svg";
import career from "../../assets/Icons/career.svg";
import idea from "../../assets/Icons/idea.svg";
import heroStudent from "../../assets/Images/heroStudent.png";
import ring from "../../assets/Images/Ring.svg";
import board from "../../assets/Icons/Board.svg";
import onlineEducation from "../../assets/Icons/Online Education.svg";
import Collaboration from "./Collaboration";

const Hero = () => {
  return (
    <div className="max-w-[2000px] mx-auto bg-gradient-to-b from-white to-[#dff8ed]">
      <div className="font-Roboto flex flex-col-reverse lg:flex-row items-center max-w-[1500px] w-[90%] mx-auto pt-[50px]">
        <div className="w-full lg:w-[60%]">
          <h1 className="capitalize font-bold text-2xl md:text-6xl text-neutral-60 leading-10 md:leading-[70px] text-balance max-w-[573px]">
            Up your <span className="text-primary-10">skills</span> to{" "}
            <span className="text-primary-10">advance</span> your{" "}
            <span className="text-primary-10">career</span> path
          </h1>

          <p className="font-normal text-body-text text-base leading-7 mt-[20px] max-w-[487px]">
            Learn UI-UX Design skills with weekend UX . The latest online
            learning system and material that help your knowledge growing.
          </p>

          <div className="flex flex-wrap items-center gap-7 mt-5">
            <Link
              to={"/"}
              className="bg-primary-10 py-4 px-7 rounded-lg border border-primary-10 text-white font-medium text-lg shadow"
            >
              Get Started
            </Link>

            <Link
              to={"/"}
              className="bg-primary-5 py-4 px-7 rounded-lg border border-primary-5 text-primary-10 font-medium text-lg shadow z-50"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center flex-wrap gap-5 md:gap-[34px] mt-[50px]">
            <div className="flex items-center gap-2 md:gap-[10px]">
              <img src={speak} alt="" className="size-4 md:size-7" />
              <p className="font-normal text-body-text text-xs md:text-base leading-10">
                Public Speaking
              </p>
            </div>
            <div className="flex items-center gap-2 md:-[10px]">
              <img src={career} alt="" className="size-4 md:size-7" />
              <p className="font-normal text-body-text text-xs md:text-base leading-10">
                Career-Oriented
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-[10px]">
              <img src={idea} alt="" className="size-4 md:size-7" />
              <p className="font-normal text-body-text text-xs md:text-base leading-10">
                Creative Thinking
              </p>
            </div>
          </div>

        </div>

        <div className="w-full sm:w-[40%]">
        <div className="relative">

          {/* img div */}
          <div className="bg-primary-10 rounded-full flex justify-center items-center w-[320px] md:w-[430px] h-[320px] md:h-[430px] overflow-hidden relative">
            <img className="w-[300px] md:w-[366px] h-[320px] md:h-[432px]" src={heroStudent} alt="" />
          </div>

          {/* circle border */}
          <div className="hidden md:block border-[1px] border-primary-10 w-[440px] h-[440px] rounded-full absolute -left-5 lg:right-20 -top-5"></div>

          {/* first div */}
          <div className="w-[100px] md:w-[140px] h-[140px] md:h-[170px] border-[0.765px] border-primary-10 bg-primary-4 shadow-xl p-4 rounded-[14px] flex flex-col gap-1 justify-center items-center absolute right-0 md:-right-48 lg:right-0 -top-10 z-10">
            <img src={ring} alt="" className="size-8 md:size-12" />
            <h1 className="font-Roboto text-neutral-60 text-[25px] font-bold">
              5K+
            </h1>
            <p className="font-Roboto text-neutral-60 text-[15px] font-normal">
              Online Courses
            </p>
          </div>

          {/* second small div */}
          <div className="w-[110px] md:w-[140px] h-16 md:h-20 border-[0.765px] border-primary-10 bg-primary-4 shadow-xl p-4 rounded-[14px] flex gap-2 justify-center items-center absolute bottom-5 right-3 md:-right-40 lg:-right-10 xl:right-3 z-10">
            <div className="size-7 md:size-12 bg-primary-10 flex justify-center items-center p-2 rounded-xl">
              <img src={board} alt="" />
            </div>
            <div>
              <p className="font-Roboto text-neutral-60 text-[12px] font-normal">
                Tutors
              </p>
              <h1 className="font-Roboto text-neutral-60 text-[20px] font-bold">
                250+
              </h1>
            </div>
          </div>

          {/* third div */}
          <div className="w-[130px] md:w-[180px] h-16 md:h-20 border-[0.765px] border-primary-10 bg-primary-4 shadow-xl p-4 rounded-[14px] flex gap-2 justify-center items-center absolute -left-4 md:-left-24 top-56 md:top-44 z-10">
            <div className="w-12 h-12 bg-primary-10 flex justify-center items-center p-2 rounded-xl">
              <img src={onlineEducation} alt="" />
            </div>
            <div>
              <h1 className="font-Roboto text-neutral-60 text-[20px] font-bold">
                5K+
              </h1>
              <p className="font-Roboto text-neutral-60 text-[12px] font-normal">
                Resources
              </p>
            </div>
          </div>

          {/* fourth div */}
          <div className="w-11 h-11 rounded-full bg-primary-10 absolute bottom-0 left-7"></div>

          
        </div>
        </div>
      </div>
      <Collaboration/>


      {/* The blured bg */}
      <div className="hidden lg:block w-[304px] h-[304px] rounded-full bg-primary-10 bg-opacity-10 blur-[100px] absolute top-[270px] left-4"></div>

      {/* The circle shapes (left side) */}
      <div className="hidden w-[414px] h-[414px] rounded-full border border-primary-10/20 lg:flex justify-center items-center absolute top-36 bottom-0">
        <div className="w-[344px] h-[344px] rounded-full border border-primary-10/20 flex justify-center items-center">
          <div className="w-[265px] h-[265px] rounded-full border border-primary-10/20 flex justify-center items-center">
            <div className="w-[162px] h-[162px] rounded-full border border-primary-10/20"></div>
          </div>
        </div>
      </div>

      {/* The circle shapes (right side) */}
      {/* <div className="w-[414px] h-[414px] rounded-full border border-primary-10/20 flex justify-center items-center absolute top-32 right-0">
        <div className="w-[344px] h-[344px] rounded-full border border-primary-10/20 flex justify-center items-center">
          <div className="w-[265px] h-[265px] rounded-full border border-primary-10/20 flex justify-center items-center">
            <div className="w-[162px] h-[162px] rounded-full border border-primary-10/20"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
