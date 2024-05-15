import { Link } from "react-router-dom";
import speak from "../../assets/Icons/Speak.svg";
import career from "../../assets/Icons/career.svg";
import idea from "../../assets/Icons/idea.svg";
import heroimg from "../../assets/Images/heroimg.png";
import heroStudent from "../../assets/Images/heroStudent.png"
import ring from "../../assets/Images/Ring.svg"
import board from "../../assets/Icons/Board.svg";
import onlineEducation from "../../assets/Icons/Online Education.svg";

const Hero = () => {
  return (
    <div className="max-w-[2000px] mx-auto relative">
      <div className="font-Roboto flex items-center w-11/12 mx-auto mt-[50px]">
        <div className="w-[60%]">
          <h1 className="capitalize  font-bold text-6xl text-[#101828] leading-[70px] text-balance max-w-[573px]">
            Up your <span className="text-[#20B486]">skills</span> to{" "}
            <span className="text-[#20B486]">advance</span> your{" "}
            <span className="text-[#20B486]">career</span> path
          </h1>

          <p className="font-normal text-[#646464] text-base leading-7 mt-[20px] max-w-[487px]">
            Learn UI-UX Design skills with weekend UX . The latest online
            learning system and material that help your knowledge growing.
          </p>

          <div className="flex flex-wrap items-center gap-7 mt-5">
            <Link
              to={"/"}
              className="bg-[#20B486] py-4 px-7 rounded-lg border border-[#20B486] text-white font-medium text-lg shadow"
            >
              Get Started
            </Link>

            <Link
              to={"/"}
              className="bg-[#EAFFF9] py-4 px-7 rounded-lg border border-[#EAFFF9] text-[#3BC49A] font-medium text-lg shadow"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-[34px] mt-[50px]">
            <div className="flex items-center gap-[10px]">
              <img src={speak} alt="" />
              <p className="font-normal text-[#646464] text-base leading-10">
                Public Speaking
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={career} alt="" />
              <p className="font-normal text-[#646464] text-base leading-10">
                Career-Oriented
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={idea} alt="" />
              <p className="font-normal text-[#646464] text-base leading-10">
                Creative Thinking
              </p>
            </div>
          </div>
        </div>

        <div className="w-[40%] relative">

          {/* circle border */}
          <div className="border-[1px] border-[#20B486] w-[440px] h-[440px] rounded-full absolute right-20 bottom-6"></div>


          {/* first div */}
          <div className="w-[140px] h-[170px] border-[0.765px] border-[#20B486] bg-[#F5F5F4] shadow-xl p-4 rounded-[14px] flex flex-col gap-1 justify-center items-center absolute right-3 -top-10">
            <img  src={ring} alt="" />
            <h1 className="font-Roboto text-[#101828] text-[25px] font-bold">5K+</h1>
            <p className="font-Roboto text-[#101828] text-[15px] font-normal">Online Courses</p>

          </div>

          {/* second small div */}
          <div className="w-[140px] h-20 border-[0.765px] border-[#20B486] bg-[#F5F5F4] shadow-xl p-4 rounded-[14px] flex gap-2 justify-center items-center absolute bottom-5 right-3">
            <div className="w-12 h-12 bg-[#20B486] flex justify-center items-center p-2 rounded-xl">
            <img  src={board} alt="" />
            </div>
            <div>
            <p className="font-Roboto text-[#101828] text-[12px] font-normal">Tutors</p>
            <h1 className="font-Roboto text-[#101828] text-[20px] font-bold">250+</h1>
            </div>
          </div>


          {/* third div */}
          <div className="w-[180px] h-20 border-[0.765px] border-[#20B486] bg-[#F5F5F4] shadow-xl p-4 rounded-[14px] flex gap-2 justify-center items-center absolute -left-24 top-44">
          <div className="w-12 h-12 bg-[#20B486] flex justify-center items-center p-2 rounded-xl">
            <img  src={onlineEducation} alt="" />
            </div>
            <div>
            <h1 className="font-Roboto text-[#101828] text-[20px] font-bold">5K+</h1>
            <p className="font-Roboto text-[#101828] text-[12px] font-normal">Online Courses</p>
            </div>

          </div>


          {/* fourth div */}
          <div className="w-11 h-11 rounded-full bg-[#20B486] absolute bottom-0 left-7"></div>



          <div className="bg-[#20B486] rounded-full flex justify-center items-center w-[430px] h-[430px] overflow-hidden ">
          <img className="w-[366px] h-[432px]" src={heroimg} alt="" />
          </div>
        </div>
      </div>

      {/* The blured bg */}
      <div className="hidden lg:block w-[304px] h-[304px] rounded-full bg-[#24BB8C] bg-opacity-10 blur-[100px] absolute top-[270px] left-4"></div>


    {/* The circle shapes (left side) */}
      <div className="w-[414px] h-[414px] rounded-full border border-[#20B486]/20 flex justify-center items-center absolute top-0 bottom-0">
        <div className="w-[344px] h-[344px] rounded-full border border-[#20B486]/20 flex justify-center items-center">
          <div className="w-[265px] h-[265px] rounded-full border border-[#20B486]/20 flex justify-center items-center">
            <div className="w-[162px] h-[162px] rounded-full border border-[#20B486]/20"></div>
          </div>
        </div>
      </div>

    {/* The circle shapes (right side) */}
      {/* <div className="w-[414px] h-[414px] rounded-full border border-[#20B486]/20 flex justify-center items-center absolute top-32 right-0">
        <div className="w-[344px] h-[344px] rounded-full border border-[#20B486]/20 flex justify-center items-center">
          <div className="w-[265px] h-[265px] rounded-full border border-[#20B486]/20 flex justify-center items-center">
            <div className="w-[162px] h-[162px] rounded-full border border-[#20B486]/20"></div>
          </div>
        </div>
      </div> */}


    </div>
  );
};

export default Hero;
