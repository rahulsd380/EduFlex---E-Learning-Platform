import { useEffect, useState } from "react";
import threeDots from "../../../../assets/Icons/three-dots.svg";
import edit from "../../../../assets/Icons/edit.svg";
import cross from "../../../../assets/Icons/cross.svg";
import pause from "../../../../assets/Icons/pause.svg";
import remove from "../../../../assets/Icons/remove.svg";
import Modal2 from "../../../../Components/Modals/Modal2";
import Modal1 from "../../../../Components/Modals/Modal1";

const ManageUserActionDropdown = (): JSX.Element => {
  const isLoading = false;
  // For modal1
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedReasons, setSelectedReasons] = useState<number[]>([]);
  const [otherReason, setOtherReason] = useState("");

  const reasons = [
    { id: 1, label: 'Spam: Unsolicited or irrelevant messages' },
    { id: 2, label: 'Inappropriate Content: Offensive or harmful material' },
    { id: 3, label: 'Harassment: Aggressive or bullying behavior' },
    { id: 4, label: 'Other: Specify a different reason' },
  ];

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(".dropdown");
      if (isOpen && closestDropdown === null) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleCheckboxChange = (id: number) => {
    if (id === 4) { // If 'Other' is selected
      if (selectedReasons.includes(id)) {
        // If 'Other' is already selected, remove it
        setSelectedReasons(prevSelected => prevSelected.filter(reasonId => reasonId !== id));
        setOtherReason(""); // Clear textarea if 'Other' is deselected
      } else {
        // If 'Other' is selected, add it to the selectedReasons and clear other reason
        setSelectedReasons(prevSelected => [...prevSelected, id]);
        setOtherReason("");
      }
    } else {
      // For other reasons
      setSelectedReasons(prevSelected =>
        prevSelected.includes(id)
          ? prevSelected.filter(reasonId => reasonId !== id)
          : [...prevSelected, id]
      );
    }
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherReason(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Selected Reasons:', selectedReasons);
    console.log('Other Reason:', otherReason);
    // Handle the submission of selected reasons here
  };

  return (
    <div className="z-50">
      <div className="relative dropdown">
        <img
          onClick={toggleDropdown}
          src={threeDots}
          alt=""
          className="size-5 cursor-pointer"
        />
        {isOpen && (
          <div className="absolute right-0 mt-3 w-36 z-10 origin-top-right bg-gray-50 border border-dark-5 bg-white rounded-lg shadow p-2">
            <div className="py-1 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 flex items-center gap-3 transform hover:-translate-y-0.5 text-sm"
              >
                <img src={edit} alt="" className="size-5" />
                Update Details
              </button>
              <button
                onClick={() => {
                  setOpenModal2(true);
                }}
                className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 flex items-center gap-3 transform hover:-translate-y-0.5 text-sm"
              >
                <img src={pause} alt="" className="size-5" />
                Suspend
              </button>
              <button
                onClick={() => {
                  setOpenModal1(true);
                }}
                className="font-Roboto text-body-text font-normal hover:text-primary-10 transition duration-300 flex items-center gap-3 transform hover:-translate-y-0.5 text-sm"
              >
                <img src={remove} alt="" className="size-5" />
                Remove User
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal2
        openModal2={openModal2}
        setOpenModal2={setOpenModal2}
        classNames="w-[500px] h-fit"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-body-text font-semibold">
            Please mention the reason for{" "}
            <span className="text-warning-10">suspension</span>.
          </h1>
          <img
            onClick={() => setOpenModal2(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <form className="mt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="flex items-center gap-[10px]"
            >
              <div
                className={`size-5 border border-neutral-40 rounded-md flex items-center justify-center cursor-pointer`}
                onClick={() => handleCheckboxChange(reason.id)}
              >
                <div
                  className={`${
                    selectedReasons.includes(reason.id)
                      ? 'bg-primary-10 scale-[1]'
                      : 'bg-transparent scale-[0.7]'
                  } size-3 transition-all duration-200 rounded-md`}
                ></div>
              </div>
              <p
                className="text-body-text cursor-pointer text-sm"
                onClick={() => handleCheckboxChange(reason.id)}
              >
                {reason.label}
              </p>
            </div>
          ))}

          {selectedReasons.includes(4) && (
            <textarea
              rows={5}
              placeholder="Please specify other reason..."
              value={otherReason}
              onChange={handleTextareaChange}
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full mt-2"
            />
          )}

          {/* Submit button */}
          <div className="flex justify-end gap-5">
            <div
              onClick={() => setOpenModal2(false)}
              className="font-medium px-7 py-2 w-fit rounded-lg focus:outline-none border border-primary-10/60 hover:bg-dark-5 shadow-md cursor-pointer"
            >
              Cancel
            </div>
            <button
              type="submit"
              className={`${
                isLoading
                  ? "animate-pulse bg-primary-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none"
                  : "animate-none bg-primary-10 text-white font-medium px-7 py-2 w-fit rounded-lg shadow-md focus:outline-none hover:bg-primary-15"
              }`}
            >
              {isLoading ? "Loading" : "Suspend"}
            </button>
          </div>
        </form>
      </Modal2>

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames="w-[500px] h-fit"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-body-text font-semibold">
            <span className="text-warning-10">Remove</span> Rahul Sutradhar
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
            <p>Please specify the reason for removing the user.</p>

            <textarea
              rows={5}
              placeholder="Reason for Removing"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full mt-2"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-end gap-5">
            <div
              onClick={() => setOpenModal1(false)}
              className="font-medium px-7 py-2 w-fit rounded-lg focus:outline-none border border-primary-10/60 hover:bg-dark-5 shadow-md cursor-pointer"
            >
              Cancel
            </div>
            <button
              type="submit"
              className={`${
                isLoading
                  ? "animate-pulse bg-warning-10 text-white font-medium w-full px-4 py-3 rounded-lg focus:outline-none"
                  : "animate-none bg-warning-10 text-white font-medium px-7 py-2 w-fit rounded-lg shadow-md focus:outline-none hover:bg-warning-10/90"
              }`}
            >
              {isLoading ? "Loading..." : "Remove"}
            </button>
          </div>
        </form>
      </Modal1>
    </div>
  );
};

export default ManageUserActionDropdown;
