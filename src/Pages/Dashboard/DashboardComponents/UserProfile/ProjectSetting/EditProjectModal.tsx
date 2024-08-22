import { useForm } from "react-hook-form";
import UploadProjectScreenshorts from "./UploadProjectScreenshorts";
import { useState } from "react";

const EditProjectModal = ({ project, openEditProjectModal, setEditProjectModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const [tags, setTags] = useState(project.technologies || []);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      const capitalizedInput = inputValue
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
      setTags([...tags, capitalizedInput]);
      setInputValue('');
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };


  return (
    <div className="mx-auto flex items-center justify-center w-full">
      <div
        onClick={() => setEditProjectModal(false)}
        className={`w-full fixed z-[100] flex items-center justify-center ${
          openEditProjectModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-[500px] h-[550px] overflow-y-scroll rounded-lg bg-white p-6 drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openEditProjectModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form>
            <h3 className="text-lg font-semibold text-neutral-60 text-center">
              Update Project Details
            </h3>

            <UploadProjectScreenshorts/>

            <div className="flex flex-col gap-4">

            {/* Project Title */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Project Title</p>
          <input
            {...register("projectTitle", {
              required: "Project title is required",
            })}
            defaultValue={project.title}
            type="text"
            id="projectTitle"
            className="bg-dark-5/40 border border-dark-10/30 text-body-text p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your e-mail"
          />
          {errors.projectTitle && (
            <span className="text-warning-10 text-start">
              {errors.projectTitle.message as string}
            </span>
          )}
        </div>

        {/* Project Duration */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Project Duration</p>
          <input
            {...register("projectDuration", {
              required: "Project duration is required",
            })}
            defaultValue={project.duration}
            type="text"
            id="projectDuration"
            className="bg-dark-5/40 border border-dark-10/30 text-body-text p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Jan 2023 - Mar 2023"
          />
          {errors.projectDuration && (
            <span className="text-warning-10 text-start">
              {errors.projectDuration.message as string}
            </span>
          )}
        </div>

            {/* Github Link */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Github Link</p>
          <input
            {...register("githubLink", {
              required: "Github Link is required",
            })}
            defaultValue={project.githubLink}
            type="text"
            id="githubLink"
            className="bg-dark-5/40 border border-dark-10/30 text-body-text p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="www.github.com/your-repo"
          />
          {errors.githubLink && (
            <span className="text-warning-10 text-start">
              {errors.githubLink.message as string}
            </span>
          )}
        </div>

            {/* Live Link */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Live Link</p>
          <input
            {...register("liveLink", {
              required: "Live Link is required",
            })}
            defaultValue={project.liveLink}
            type="text"
            id="liveLink"
            className="bg-dark-5/40 border border-dark-10/30 text-body-text p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="www.github.com/your-repo"
          />
          {errors.liveLink && (
            <span className="text-warning-10 text-start">
              {errors.liveLink.message as string}
            </span>
          )}
        </div>

         {/* Technologies Used */}
         <div className="flex flex-col gap-1 w-full">
        <p className="text-body-text font-medium text-sm">Technologies Used</p>
        <div className="bg-dark-5/40 border border-dark-10/30  focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full">
      <div className="flex flex-wrap items-center gap-2">
        <div className="p-2 flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <div key={index} className="flex bg-primary-10 items-center text-white text-sm font-medium px-3 py-1 rounded">
            {tag}
            <span
              className="ml-2 cursor-pointer text-red-500"
              onClick={() => handleRemoveTag(index)}
            >
              &times;
            </span>
          </div>
        ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a tag and press Enter"
          className="border-none bg-dark-5/40 focus:outline-none w-full p-2"
        />
      </div>
    </div>
        </div>

            {/* Description */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text font-medium text-sm">Description</p>
          <textarea
           {...register("description", {
            required: "Description is required",
          })}
          defaultValue={project.description}
          rows={7}
          id="description"
          className="bg-dark-5/40 border border-dark-10/30 text-body-text p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
          placeholder="www.github.com/your-repo"
           />
          {errors.description && (
            <span className="text-warning-10 text-start">
              {errors.description.message as string}
            </span>
          )}
        </div>

            

        </div>

        <button className="w-full border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded bg-primary-10 text-white shadow-xl mt-7">
        Save Changes
      </button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModal;
