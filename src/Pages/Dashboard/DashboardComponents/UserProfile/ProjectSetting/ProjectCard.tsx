import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import edit from "../../../../../assets/Icons/edit-icon.svg";
import deleteIcon from "../../../../../assets/Icons/delete-3.svg";
import { TProject } from "./ProjectSetting";
import { useState } from "react";
import EditProjectModal from "./EditProjectModal";

type TprojectCardProps = {
  project: TProject;
};

const ProjectCard: React.FC<TprojectCardProps> = ({ project }) => {
    const [openEditProjectModal, setEditProjectModal] = useState<boolean>(false);
  return (
    <div className="border border-neutral-40/30 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 mt-3">
      <div className="flex items-center justify-between mb-2">
        {/* Project Title */}
        <h3 className="text-xl font-semibold text-neutral-60">
          {project.title}
        </h3>

        {/* Edit & Delete */}
        <div className="flex items-center gap-4">
          <img onClick={() => setEditProjectModal(true)} src={edit} alt="" className="size-5 cursor-pointer" />
          <img src={deleteIcon} alt="" className="size-5 cursor-pointer" />
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-55 mb-4">{project.description}</p>

      {/* Technologies Used */}
      <p className="text-neutral-60 font-semibold">Technologies Used</p>
      <div className="flex flex-wrap gap-2 mb-4 mt-1">
        {project.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="bg-white border border-neutral-20 text-neutral-55 text-xs font-medium px-2.5 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Duration */}
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-neutral-60 font-semibold">Duration:</h2>{" "}
        {project.duration}
      </div>

      {/* Screemshorts */}
      <div className="flex gap-4 mb-4">
        {project.screenshots.map((screenshot: string, index: number) => (
          <img
            key={index}
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
            className="w-1/3 rounded-lg"
          />
        ))}
      </div>

      {/* Github & Live Link */}
      <div className="flex gap-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary-500 hover:text-primary-700"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary-500 hover:text-primary-700"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>

      <EditProjectModal project={project} openEditProjectModal={openEditProjectModal} setEditProjectModal={setEditProjectModal}/>
    </div>
  );
};

export default ProjectCard;
