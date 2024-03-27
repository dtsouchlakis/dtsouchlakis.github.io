import { ProjectsType } from "@/utils/models";

export default function NoPreview({ project }: { project?: ProjectsType }) {
  return (
    <div className="flex sm:h-[80vh] sm:w-[90vw] h-[80vh] w-[90vw]  flex-col justify-center mx-auto text-center p-4 text-slate-300 bg-slate-800 rounded border-2 border-slate-500 overflow-hidden">
      <a
        className="sm:text-2xl font-bold text-lg underline hover:text-slate-100"
        href={project?.src}
        target="_blank"
        rel="noreferrer"
      >
        {project?.name}
      </a>

      <h1 className="sm:text-xl font-semibold text-md ">
        This project has no preview - But you can view the code on{" "}
        <span className="underline hover:text-slate-100 cursor-pointer">
          github!
        </span>
      </h1>
      <h3 className="text-md text-slate-400 mt-4">Description</h3>
      <p className="text-xs text-slate-300 mt-2">{project?.description}</p>

      <img
        className="w-max-1/3 sm:max-h-[60%] aspect-auto rounded-lg m-auto mt-8 max-h-[50%]"
        src={project?.image}
        alt="preview"
      />
    </div>
  );
}
