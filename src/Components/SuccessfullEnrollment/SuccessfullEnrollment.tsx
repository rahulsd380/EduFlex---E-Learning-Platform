import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png";
import congratulations from "../../assets/Images/Congratulations.png";
import profileImg from "../../assets/Images/profileImg.jpeg";
import quote from "../../assets/Icons/quote.svg";

const SuccessfullEnrollment = () => {
  return (
    <div className="max-w-[1500px] mx-auto font-Roboto">
      <div className="max-w-[800px] mx-auto bg-gradient-to-bl from-[#84CC16] via-[#15803D] to-[#047857] rounded-lg flex justify-center items-center p-2">
        <div className="rounded-lg bg-white p-4">
          <Link to={"/"} className="flex flex-col items-center gap-2">
            <img className="w-16" src={logo} alt="" />
            <h1 className="font-Roboto font-medium text-lg text-neutral-60">
              Welcome To EduFlex
            </h1>
          </Link>

          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 mt-4">
            <img src={congratulations} alt="" className="w-64" />
            <h1 className="text-3xl font-semibold">
              On Joining{" "}
              <span className="bg-gradient-to-r from-[#FEF08A] to-[#22C55E] bg-clip-text text-transparent">
                EduFlex
              </span>
            </h1>
          </div>
          <p className="text-body-text font-medium text-center mt-3 md:mt-0">
            Complete Machine Learning Course With EduFlex
          </p>

          <hr className="border border-body-text/40 mt-4"/>


          <div className="flex flex-col items-center gap-3 justify-center mt-4">

          <div className="w-full flex flex-col items-center justify-center relative">
            <h1 className="text-[40px] md:text-6xl font-bold text-neutral-55 absolute opacity-10">Machine Learning</h1>
            {/* <div className="bg-primary-10 opacity-35 w-[90%] h-1 absolute"></div> */}
          <div className="bg-gradient-to-r from-[#EF4444] to-[#F97316] size-28 rounded-full flex justify-center z-10">
            <div>
                <img src={profileImg} alt="" className="size-[105px] rounded-full mt-2" />
            </div>
          </div>
          </div>

          <h1 className="font-Roboto font-semibold text-2xl text-neutral-60">
              Rahul Sutradhar
            </h1>
          </div>


          <div className="mt-4 bg-neutral-40/10 w-full rounded-lg flex flex-col md:flex-row items-center gap-6 p-5">
            <img src={quote} alt="" className="size-20" />
            <div>
            <h1 className="font-Roboto font-semibold text-lg text-neutral-60">
              A Special Message From EduFlex
            </h1>
            <p className="text-body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus doloremque rerum tempore aliquam magni quasi maiores molestias quia, atque eveniet 
          </p>
            </div>
          </div>

          <div className="flex justify-center mt-3">
          <Link to={"/dashboard"} className="font-semibold text-neutral-60 hover:underline text-center">Go to Dashboard</Link>
          </div>



        </div>
      </div>
    </div>
  );
};

export default SuccessfullEnrollment;
