import quotation from "../../assets/Icons/quotation.svg";
import star from "../../assets/Icons/Star 1.svg";
import profileImg from "../../assets/Images/profileImg.jpeg";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
      <div
        className="w-48 h-56 bg-gradient-to-r from-[#22C55E] to-[#10B981]
 rounded-md relative"
      >
        <div className="w-48 h-56 bg-warning-10 rounded-md rounded-t-xl absolute bottom-4 left-4">
          <img
            src={profileImg}
            alt=""
            className="w-48 h-56 rounded-md rounded-t-xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <img src={quotation} alt="" className="size-8" />
        <p className="text-body-text font-normal max-w-[500px] leading-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit sit suscipit alias fugit corporis mollitia architecto?
          Blanditiis velit earum labore quasi provident tenetur vitae eligendi
          animi at libero. Cupiditate necessi
        </p>

        <div className="flex items-center gap-[5px]">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={star}
              alt={`star-${index}`}
              className={`w-4`}
            />
          ))}
        </div>

        <div>
          <h1 className="text-lg font-medium text-neutral-60">
            Rahul Sutradhar
          </h1>
          <p className="text-body-text font-normal text-xs">ABC Company</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
