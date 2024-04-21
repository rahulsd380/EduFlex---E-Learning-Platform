import Marquee from "react-fast-marquee";

const CompanyInfo = () => {
  return (
    <div>
      <Marquee
      className="bg-gray-100 py-7 px-16 flex items-center justify-between"
      pauseOnHover={true}
      speed={30}
      >
        <div>
        <h1>hi</h1>
        </div>
        <div>
        <h1>hi</h1>
        </div>
        <div>
        <h1>hi</h1>
        </div>
        <div>
        <h1>hi</h1>
        </div>
        <div>
        <h1>hi</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default CompanyInfo;
