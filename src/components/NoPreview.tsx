import { ProjectsType } from "@/utils/models";
import Triangle from "../assets/triangle.svg";
import Circle from "../assets/circle.svg";
import Square from "../assets/square.svg";
import { isMobile } from "@/utils/utils";

export default function NoPreview({
  project,
  isPreviewVisible,
}: {
  project?: ProjectsType;
  isPreviewVisible?: boolean;
}) {
  return (
    <div
      className="flex sm:h-[80vh] sm:w-[90vw] h-[80vh] w-[90vw]  flex-col justify-center mx-auto text-center p-4 text-slate-300 bg-slate-800 rounded border-2 border-slate-500 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <a
        className="sm:text-2xl font-bold text-lg underline hover:text-slate-100"
        href={project?.src}
        target="_blank"
        rel="noreferrer"
      >
        {project?.name}
      </a>

      <h1 className="sm:text-xl font-semibold text-md ">
        {!isMobile() && !isPreviewVisible
          ? "This project has no preview - But you can view the code on"
          : "You can view this project's code on"}{" "}
        <a
          className="underline hover:text-slate-100 cursor-pointer"
          href={project?.repo}
          target="_blank"
        >
          github!
        </a>
      </h1>
      <h3 className="text-md text-slate-400 mt-4">Description</h3>
      <p className="text-xs text-slate-300 mt-2">{project?.description}</p>

      <img
        className="w-max-1/3 sm:max-h-[60%] aspect-auto rounded-lg m-auto mt-8 max-h-[50%]"
        src={project?.image}
        alt="preview"
      />
      {/* <div className="flex mt-4 absolute bottom-8 left-8 gap-4 h-8">
        <img
          src="/assets/triangle.svg"
          alt="icon"
          className="-rotate-90  cursor-pointer stroke-white hover:stroke-red-700"
        />
        <img src="/assets/circle.svg" alt="icon" className="cursor-pointer" />
        <span className="hover:text-slate-100 hover:fill-red-700">
          <img
            src="/assets/square.svg"
            alt="icon"
            className="cursor-pointer  "
          />
        </span>
      </div> TODO:Different close button for mobile*/}
    </div>
  );
}
