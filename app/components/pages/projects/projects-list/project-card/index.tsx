import { Project } from "@/app/types/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {

  const technologies = project.technologies.map(x => x.name).join(', ')

  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-customPurple opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src={project.thumbnail.url}
          unoptimized
          alt={`Thumbnail do ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-mono text-gray-50/90 group-hover:text-customPurple transition-all">
          Bé aqui
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4 font-mono">
         {project.shortDescription}
        </p>
        <span className="text-gray-300 text-lg font-mono block mt-auto truncate group-hover:text-customPurple">
          {technologies}
        </span>
      </div>
    </div>
  );
};
