import { useState } from "react";
import InstructorRequestCard from "./InstructorRequestCard";
import Modal1 from "../../../../Components/Modals/Modal1";
import cross from "../../../../assets/Icons/cross.svg";
import InstructorRequestCardLoader from "./InstructorRequestCardLoader";
import Modal2 from "../../../../Components/Modals/Modal2";
import { useForm } from "react-hook-form";
import RequestTabs from "./RequestTabs";

type ScheduleInterviewFormData = {
  date: string;
  startTime: string;
  endTime: string;
};

const InstructorRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScheduleInterviewFormData>();

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [seeFeedback, setSeeFeedback] = useState(false);

  const [requestTab, setRequestTab] = useState<
    "Requests" | "Approved" | "Rejected"
  >("Requests");

  const isLoading = false;

// Schedule interview function
  const handleScheduleInterview = (data: ScheduleInterviewFormData) => {
    console.log(data);
  };

  return (
    <div className="font-Roboto">
      <RequestTabs requestTab={requestTab} setRequestTab={setRequestTab}/>

      {requestTab === "Requests" && (
        <div className="flex flex-col gap-5">
          <InstructorRequestCard
            setOpenModal1={setOpenModal1}
            setOpenModal2={setOpenModal2}
            variant="Request"
          />
        </div>
      )}

      {requestTab === "Approved" && (
        <div className="flex flex-col gap-5">
          <InstructorRequestCard variant="Approved" />
        </div>
      )}

      {requestTab === "Rejected" && (
        <div className="flex flex-col gap-5">
          <InstructorRequestCard setSeeFeedback={setSeeFeedback} variant="Rejected" />
        </div>
      )}

      {/* <InstructorRequestCardLoader/> */}

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames="w-[500px] h-fit p-4"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-body-text font-semibold">
            Reason Of <span className="text-warning-10">Rejection</span>
          </h1>
          <img
            onClick={() => setOpenModal1(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <form className="mt-5 flex flex-col gap-5">
          <div>
            <p>Please specify the reason of rejection and provide feedback.</p>

            <textarea
              rows={5}
              placeholder="Reason of rejections"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full mt-2"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-end gap-5">
            <div
              onClick={() => setOpenModal1(false)}
              className="font-medium px-7 py-2 w-fit rounded-lg focus:outline-none border border-neutral-60/20 hover:bg-dark-5 cursor-pointer text-neutral-60/70"
            >
              Cancel
            </div>
            <button
              type="submit"
              className={`${
                isLoading
                  ? "animate-pulse bg-warning-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none"
                  : "animate-none bg-warning-10 text-white font-medium px-7 py-2 w-fit rounded-lg focus:outline-none hover:bg-warning-10/90"
              }`}
            >
              {isLoading ? "Loading..." : "Reject"}
            </button>
          </div>
        </form>
      </Modal1>

    {/* See feedback modal */}
      <Modal1
        openModal1={seeFeedback}
        setOpenModal1={setSeeFeedback}
        classNames="w-[500px] h-fit p-4"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-primary-10 font-semibold">
          Feedback
          </h1>
          <img
            onClick={() => setSeeFeedback(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <form className="mt-5 flex flex-col gap-5">
          <div>
            <textarea
            defaultValue={"Feedback here"}
              rows={5}
              placeholder="Reason of rejections"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full mt-2"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-end gap-5">  
            <div
              onClick={() => setSeeFeedback(false)}
              className="font-medium px-7 py-2 w-fit rounded-lg focus:outline-none hover:bg-primary-15 bg-primary-10 text-white cursor-pointer"
            >
              Close
            </div>
          </div>
        </form>
      </Modal1>

      <Modal2
        openModal2={openModal2}
        setOpenModal2={setOpenModal2}
        classNames="w-[500px] h-fit p-4"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-body-text font-semibold">
            Schedule An Interview
          </h1>
          <img
            onClick={() => setOpenModal2(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <form
          onSubmit={handleSubmit(handleScheduleInterview)}
          className="mt-5 flex flex-col gap-5"
        >
          <div>
            <p>Select Date</p>

            <input
              {...register("date", { required: "Date is required" })}
              type="date"
              id="date"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your full date"
            />
            {errors.date && (
              <span className="text-warning-10 text-start">
                {errors.date.message as string}
              </span>
            )}
          </div>

          <div>
            <p>Start Time</p>

            <input
              {...register("startTime", { required: "Start Time is required" })}
              type="time"
              id="startTime"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your full startTime"
            />
            {errors.startTime && (
              <span className="text-warning-10 text-start">
                {errors.startTime.message as string}
              </span>
            )}
          </div>

          <div>
            <p>End Time</p>

            <input
              {...register("endTime", { required: "End Time is required" })}
              type="time"
              id="endTime"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your full endTime"
            />
            {errors.endTime && (
              <span className="text-warning-10 text-start">
                {errors.endTime.message as string}
              </span>
            )}
          </div>

          {/* Submit button */}
          <div className="flex justify-end gap-5">
            <div
              onClick={() => setOpenModal1(false)}
              className="font-medium px-7 py-2 w-fit rounded-lg focus:outline-none border border-neutral-60/20 hover:bg-dark-5 cursor-pointer text-neutral-60/70"
            >
              Cancel
            </div>
            <button
              type="submit"
              className={`${
                isLoading
                  ? "animate-pulse bg-warning-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none"
                  : "animate-none bg-warning-10 text-white font-medium px-7 py-2 w-fit rounded-lg focus:outline-none hover:bg-warning-10/90"
              }`}
            >
              {isLoading ? "Loading..." : "Reject"}
            </button>
          </div>
        </form>
      </Modal2>
    </div>
  );
};

export default InstructorRequest;
