import Marquee from "react-fast-marquee";
import google from "../../assets/Images/Company images/google.png";
import microsoft from "../../assets/Images/Company images/microsoft.png";
import apple from "../../assets/Images/Company images/apple.png";
import meta from "../../assets/Images/Company images/meta.png";
import oracle from "../../assets/Images/Company images/oracle.png";
import alibaba from "../../assets/Images/Company images/alibaba.png";
import intel from "../../assets/Images/Company images/intel.png";
import ibm from "../../assets/Images/Company images/ibm.png";
import samsung from "../../assets/Images/Company images/samsung.png";
import tesla from "../../assets/Images/Company images/tesla.png";

const CompanyInfo = () => {
  const companyImages = [
    google, microsoft, apple, meta, oracle, alibaba, intel, ibm, samsung, tesla
  ]
  return (
    <div className="mt-20">
      <div className="font-Roboto flex flex-col gap-7 max-w-[2000px] mx-auto">
            <h1 className="text-gray-600 font-bold text-2xl md:text-4xl text-center">
                Our Students In Giant Companies
        </h1>

        <p className="text-center w-1/2 mx-auto">
        Thriving alumni land prestigious roles in industry giants, showcasing our platform's success in career advancement and professional development.
        </p>

        <Marquee
      className="bg-gray-100 py-7 px-16 flex items-center justify-between"
      pauseOnHover={true}
      speed={30}
      >
       <div className="flex gap-20">
       {
        companyImages.map((img, index) => 
        <img key={index} className="w-20" src={img} alt="" />
        )
       }
       </div>
      </Marquee>
        </div>
      
    </div>
  );
};

export default CompanyInfo;
