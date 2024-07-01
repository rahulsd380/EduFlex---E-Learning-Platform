import Marquee from "react-fast-marquee";
import logo1 from "../../assets/Icons/Company logo/Codecov (logo — Black).svg";
import logo2 from "../../assets/Icons/Company logo/Group.svg";
import logo3 from "../../assets/Icons/Company logo/Magic Leap (logo — Black).svg";
import logo4 from "../../assets/Icons/Company logo/UserTesting (logo — Black).svg";

const Collaboration = () => {
  const companyImages = [logo1, logo2, logo3, logo4, logo2];
  return (
    <div className="max-w-[1500px] w-[90%] mx-auto mt-16 flex items-center gap-10">
      <div>
        <h1 className="capitalize font-bold text-3xl text-primary-10 leading-[34px]">
          250+
        </h1>
        <p className="text-neutral-5 font-Roboto text-[25px] font-light">
          Collaboration
        </p>
      </div>

      <Marquee
        className="flex items-center justify-between"
        pauseOnHover={true}
        speed={30}
      >
        <div className="flex">
          {companyImages.map((img, index) => (
            <img key={index} className="w-full mr-16" src={img} alt="" />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Collaboration;
