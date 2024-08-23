import avatarSrc from "../../../../assets/Images/Avatar (1).png";
import resume from "../../../../assets/Icons/resume.svg";
import approved from "../../../../assets/Icons/approved.svg";
import rejected from "../../../../assets/Icons/rejected.svg";
import portfolio from "../../../../assets/Icons/portfolio.svg";
import { Dispatch, SetStateAction } from "react";

type InstructorRequestCardProps = {
  variant: string;
  setOpenModal1?: Dispatch<SetStateAction<boolean>>;
  setOpenModal2?: Dispatch<SetStateAction<boolean>>;
  setSeeFeedback?: Dispatch<SetStateAction<boolean>>;
};

const InstructorRequestCard: React.FC<InstructorRequestCardProps> = ({
  variant,
  setOpenModal1,
  setOpenModal2,
  setSeeFeedback
}) => {
  const borderColor =
    variant === "Request"
      ? "border-[#e9912d]"
      : variant === "Approved"
      ? "border-primary-10"
      : variant === "Rejected"
      ? "border-warning-10"
      : "border-neutral-60/30";
  return (
    <div
      className={`${borderColor} bg-dark-5/30 shadow p-3 md:p-4 rounded-r border-l-2 font-Roboto flex flex-col gap-3`}
    >
      <div className="flex items-center justify-between">
        {/* Profile */}
        <div className="flex items-center gap-3 mt-2">
          <img src={avatarSrc} alt="" />
          <div>
            <p className="font-semibold text-neutral-60 text-lg">
              {"Rahul SD"}
              {/* {author} */}
            </p>
            <a
              href="mailto:rahulsd380@gmail.com"
              className="font-normal text-neutral-60 text-sm hover:underline"
            >
              rahulsd380@gmail.com
            </a>
          </div>
        </div>

        {variant === "Rejected" && (
          <img src={rejected} alt="" className="size-16" />
        )}
      </div>

      <p className="text-body-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis atque
        illum doloribus voluptate at vitae esse dignissimos sed natus
        repellendus assumenda ea, maiores aperiam sapiente eos accusamus
        accusantium dolores minus magni voluptatem rem! Ipsum veritatis minus
        numquam temporibus. In id eum rerum accusamus non libero vero
        repellendus! Consequatur, autem nobis.
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0  md:justify-between">
        <div className="flex items-center gap-7">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img src={resume} alt="" className="size-5" />
            <p className="text-neutral-60/70 font-semibold group-hover:underline">
              View Resume
            </p>
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img src={portfolio} alt="" className="size-6" />
            <p className="text-neutral-60/70 font-semibold group-hover:underline">
              Portfolio
            </p>
          </a>
        </div>
        {variant === "Request" && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpenModal1!(true)}
              className="bg-dark-5/50 text-body-text border border-neutral-60/20 hover:bg-warning-10 transition duration-300 px-5 py-2 rounded-md hover:text-white"
            >
              Reject
            </button>

            <button onClick={() => setOpenModal2!(true)} className="bg-primary-10 hover:bg-primary-15 border border-primary-10 text-white px-5 py-2 rounded-md transition duration-300 text-sm md:text-base">
              Schedule An Interview
            </button>
          </div>
        )}

        {variant === "Approved" && (
          <div className="flex items-center gap-4">
            <div className="bg-dark-5/50 text-body-text border border-neutral-60/20 px-5 py-2 rounded-md text-xs sm:text-base">
              23rd August, 2024
            </div>

            <button
              disabled
              className="bg-primary-10 border border-primary-10 text-white px-5 py-2 rounded-md transition duration-300 flex items-center gap-2"
            >
              <img src={approved} alt="" className="size-5" />
              Approved
            </button>
          </div>
        )}

        {variant === "Rejected" && (
          <div className="flex items-center gap-4">
            <div className="bg-dark-5/50 text-body-text border border-neutral-60/20 px-5 py-2 rounded-md text-sm md:text-base">
              23rd August, 2024
            </div>

            <button onClick={() => setSeeFeedback!(true)} className="bg-warning-10 hover:bg-warning-10/80 border border-warning-10 text-white px-5 py-2 rounded-md transition duration-300 flex items-center gap-2 text-sm md:text-base">
              See Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorRequestCard;
