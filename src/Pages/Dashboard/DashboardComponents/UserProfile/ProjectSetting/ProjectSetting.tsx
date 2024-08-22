import ProjectCard from "./ProjectCard";

export type TProject = {
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  screenshots: string[];
  githubLink: string;
  liveLink: string;
};

const ProjectSetting = () => {
  const project = [
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website with features such as user authentication, product management, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "Jan 2023 - Mar 2023",
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      githubLink: "https://github.com/username/ecommerce-website",
      liveLink: "https://ecommerce-website-demo.com",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website with features such as user authentication, product management, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "Jan 2023 - Mar 2023",
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      githubLink: "https://github.com/username/ecommerce-website",
      liveLink: "https://ecommerce-website-demo.com",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website with features such as user authentication, product management, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "Jan 2023 - Mar 2023",
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      githubLink: "https://github.com/username/ecommerce-website",
      liveLink: "https://ecommerce-website-demo.com",
    },
  ];

  return (
    <div className="mt-10 font-Roboto">
      <div>
        <h1 className="text-neutral-60 font-semibold">Your Projects</h1>
      </div>

      <div className="flex flex-col gap-5">
        {project?.map((project: TProject, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSetting;
