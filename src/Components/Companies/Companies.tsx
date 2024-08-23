import Marquee from "react-fast-marquee";
import logo1 from "../../assets/Icons/Company logo/Codecov (logo — Black).svg";
import logo2 from "../../assets/Icons/Company logo/Group.svg";
import logo3 from "../../assets/Icons/Company logo/Magic Leap (logo — Black).svg";
import logo4 from "../../assets/Icons/Company logo/UserTesting (logo — Black).svg";

const Companies = () => {
    const companyImages = [logo1, logo2, logo3, logo4, logo2, logo1, logo3];
    return (
        <div className="bg-gradient-to-b from-[#F0FDF4] to-[#dff8ed] py-16 mt-20">
            <div className="max-w-[1500px] w-[90%] mx-auto font-Roboto">
                <div>
                <h1 className="text-3xl text-neutral-60 font-bold capitalize">
          Our Heros In Giant Companies
        </h1>

        <p className="text-body-text font-normal max-w-[700px] mt-4">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti dicta quo! Odio ut ullam reiciendis adipisci magni explicabo tempore!
        </p>


                </div>


            <div className="flex flex-col gap-12 mt-9">
            <Marquee
        className="flex items-center justify-between"
        pauseOnHover={true}
        speed={60}
      >
        <div className="flex">
          {companyImages.map((img, index) => (
            <img key={index} className="w-full mr-16" src={img} alt="" />
          ))}
        </div>
      </Marquee>
            <Marquee
            direction="right"
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
            </div>
        </div>
    );
};

export default Companies;