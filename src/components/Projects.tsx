import { useRef } from "react";
import { LaunchScreenRef, Screen } from "./LaunchScreen";
import { ProjectsType } from "@/utils/models";
import Image from "next/image";

type Props = {
  projects: ProjectsType[];
};

export default function Projects({ projects }: Props) {
  const ref = useRef<LaunchScreenRef>(null);

  return (
    <div className="container p-4 mx-auto">
      <Screen ref={ref} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects &&
          projects.map((project: ProjectsType) => (
            <div
              className="p-4  rounded  bg-gray-800 text-slate-300 hover:bg-gray-700 hover:text-slate-100 grid grid-cols-2 sm:flex sm:flex-col sm:items-start"
              key={project.name}
            >
              <span className="col-span-2 sm:col-span-1 sm:grow">
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-slate-500 text-sm ">{project.brief}</p>
              </span>
              <div className="relative lg:w-64 lg:h-48 w-40 h-32 border-4 border-black rounded-lg overflow-hidden mt-4 ">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-36 bg-blue-200 flex flex-col items-center justify-center overflow-hidden">
                    <div className="relative-0  text-right flex bg-slate-700 w-full justify-end p-1">
                      <div className="text-red-500 hover:text-red-700 border border-red-500 hover:border-red-700 px-1 rounded-full text-[5px] font-bold">
                        X
                      </div>
                    </div>
                    <img
                      src={`${project.image}`}
                      alt="Content"
                      className="max-w-full max-h-full cursor-pointer "
                      onClick={(e) => {
                        console.log(e, e.target, e.currentTarget);
                        console.log(project);

                        e.stopPropagation();
                        project.src && ref.current?.openPopup(project);
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-black"></div>
              </div>
              <span className="flex flex-col items-center sm:items-start sm:block">
                <p className="text-slate-500 text-sm mt-4 mb-4 sm:mt-2">
                  technologies
                </p>
                <div className="flex cursor flex-row justify-center flex-wrap sm:flex-nowrap sm:justify-start ml-3 sm:m-0">
                  {project.technologies &&
                    project.technologies.map((technology: string) => (
                      <img
                        key={technology}
                        src={`/assets/${technology}.svg`}
                        alt={technology}
                        className="inline-block w-8 h-8 mr-2"
                      />
                    ))}
                </div>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
