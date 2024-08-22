import { useState } from "react";
import { ImProfile } from "react-icons/im";
import editImg from "../../../../../assets/Icons/edit-profile.svg";


const InstructorDetails = ({register, errors}) => {
    const [imageLink, setImageLink] = useState("");

  const handleUploadImageClick = (): void => {
    const inputElement = document.getElementById("image") as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  };
  

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageLink(imageURL);
    }
  };


    return (
        <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div className="w-[150px] h-[150px] rounded-full border border-[#e5eaf2] flex items-center justify-center relative">
                    {imageLink === "" ? (
                      <ImProfile className="text-[80px] text-[#e5eaf2]" />
                    ) : (
                      <img
                        src={imageLink}
                        alt="image"
                        className="w-full h-full object-cover rounded-full"
                      />
                    )}

                    <div
                      onClick={handleUploadImageClick}
                      className="size-10 rounded-full bg-white hover:bg-dark-5/40 transition duration-300 cursor-pointer border border-dark-5 shadow-inner p-1 flex justify-center items-center absolute top-0 right-0"
                    >
                      <img src={editImg} alt="" className="size-7" />
                    </div>
                  </div>
                </div>

                {/* Instructor Name */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-body-text font-medium text-sm">
                    Instructor Name
                  </p>
                  <input
                    {...register("instructorName", {
                      required: "Instructor Name is required",
                    })}
                    type="text"
                    id="instructorName"
                    className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                    placeholder="Enter course instructorName."
                  />
                  {errors.instructorName && (
                    <span className="text-warning-10 text-start">
                      {errors.instructorName.message as string}
                    </span>
                  )}
                </div>

                {/* Instructor Experience */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-body-text font-medium text-sm">
                    Instructor Experience
                  </p>
                  <input
                    {...register("instructorExperience", {
                      required: "Instructor Experience is required",
                    })}
                    type="text"
                    id="instructorExperience"
                    className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                    placeholder="Enter course instructorExperience."
                  />
                  {errors.instructorExperience && (
                    <span className="text-warning-10 text-start">
                      {errors.instructorExperience.message as string}
                    </span>
                  )}
                </div>
              </div>
    );
};

export default InstructorDetails;