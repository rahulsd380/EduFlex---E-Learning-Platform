import { Link } from "react-router-dom";

type TYourCourseCardProps = {
    details : {
        _id : string;
        img : string;
        title : string;
        completed : string;
        lessons : string;
        duration : string;
    }
}

const YourCourseCard : React.FC<TYourCourseCardProps> = ({details}) => {
    const {_id, img, title, completed, lessons, duration} = details;
  return (
    <div className="bg-white border border-dark-5 rounded-lg shadow group font-Roboto p-2 flex items-center gap-5 w-full">
      <img src={img} alt="" className="rounded-lg w-[200px] h-[150px]" />
      <div className=" flex flex-col gap-3 w-full">
        <h1 className="text-lg font-Roboto text-body-text font-semibold">
          {title}
        </h1>

        <div className="flex flex-col gap-3">
          <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
            <div className="bg-gradient-to-t from-[#10B981] via-[#16A34A] to-[#65A30D] rounded-[100px] w-[80%] h-2"></div>
          </div>

          <div className="flex items-center justify-between gap-2 text-sm">
            <p className="text-body-text">
              Completed :{" "}
              <span className="text-primary-10 font-semibold">{completed}%</span>
            </p>
            <p className="text-body-text">
              Lessons :{" "}
              <span className="text-primary-10 font-semibold">{completed}/{lessons}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-body-text w-fit bg-neutral-5 rounded-md py-[6px] px-2 text-sm">
            {duration} MIN
          </p>

          <Link to={`/${_id}`} className="w-[150px]">
          <div className="bg-primary-10 hover:bg-primary-15 transition duration-300 text-white px-4 py-[6px] rounded-md flex-1 font-medium text-center">
            Play
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YourCourseCard;
