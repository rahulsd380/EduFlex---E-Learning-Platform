import { Dispatch, SetStateAction } from "react";

type RequestTabsProps = {
  requestTab: "Requests" | "Approved" | "Rejected";
  setRequestTab: Dispatch<SetStateAction<"Requests" | "Approved" | "Rejected">>;
};

const RequestTabs: React.FC<RequestTabsProps> = ({
  requestTab,
  setRequestTab,
}) => {
  return (
    <div className="flex items-center gap-5 mb-8">
      <button
        onClick={() => setRequestTab("Requests")}
        className={`${
          requestTab === "Requests"
            ? "bg-[#e9912d] text-white border border-[#e9912d]"
            : "bg-dark-5/50 text-body-text border border-dark-10/20"
        } px-5 py-2 rounded-md transition duration-300`}
      >
        Requests
      </button>

      <button
        onClick={() => setRequestTab("Approved")}
        className={`${
          requestTab === "Approved"
            ? "bg-primary-10 text-white border border-primary-10"
            : "bg-dark-5/50 text-body-text border border-dark-10/20"
        } px-5 py-2 rounded-md transition duration-300`}
      >
        Approved
      </button>

      <button
        onClick={() => setRequestTab("Rejected")}
        className={`${
          requestTab === "Rejected"
            ? "bg-warning-10 text-white border border-warning-10"
            : "bg-dark-5/50 text-body-text border border-dark-10/20"
        } px-5 py-2 rounded-md transition duration-300`}
      >
        Rejected
      </button>
    </div>
  );
};

export default RequestTabs;
