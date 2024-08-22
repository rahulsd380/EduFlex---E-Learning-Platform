import bgImage from "../../assets/Images/bg-image.png";
import errorIcon from "../../assets/Images/404-icon.svg";
import { Link } from "react-router-dom";
// import space from "../../assets/Images/space.png";

const ErrorPage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-neutral-60 font-Roboto"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-full flex flex-col justify-center items-center p-10 md:p-0">
      <div className="flex items-center justify-center w-full max-w-[500px]">
        <img src={errorIcon} alt="Error Icon" className="w-full max-w-[500px]" />
      </div>

      <h1 className="text-center text-3xl font-semibold text-[#B20C13] mt-4">Looks like you have losted in the space.</h1>
      <p className="text-[#8588a0] text-center mt-1">Don't worry! You can go back to earth!</p>

      <Link to={"/"} className="bg-[#630509] px-3 py-3 rounded text-[#7d7f92] font-medium mt-4">Back To Home</Link>
      </div>
      {/* <div className="absolute right-0 bottom-0">
        <img src={space} alt="Space Image" className="w-80 h-80" />
      </div> */}
    </div>
  );
};

export default ErrorPage;
