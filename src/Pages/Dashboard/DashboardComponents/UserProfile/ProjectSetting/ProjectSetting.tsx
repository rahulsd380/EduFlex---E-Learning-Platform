import ProjectCard from "./ProjectCard";

export type TProject = {
  title: string;
  description: string;
  technologyUsed: string[];
  startDate: string;
  endDate: string;
  images: string[];
  githubLink: string;
  liveLink: string;
};

const ProjectSetting = ({projects} : {projects : TProject[]}) => {

  return (
    <div className="mt-10 font-Roboto">
      <div>
        <h1 className="text-neutral-60 font-semibold">Your Projects</h1>
      </div>

      <div className="flex flex-col gap-5">
        {
        projects?.length > 0 ?
        projects?.map((project: TProject, index: number) => (
          <ProjectCard key={index} project={project} />
        ))
        :
        <p>No Project added.</p>
        }
      </div>

      
    </div>
  );
};

export default ProjectSetting;
