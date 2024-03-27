import path from "path";
import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import NoPreview from "./NoPreview";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ProjectsType, ImportTypesEnum } from "@/utils/models";

export type LaunchScreenRef = {
  openPopup: (project: ProjectsType) => void;
  closePopup: () => void;
  togglePopup: (value: boolean) => void;
  setData: (project: string) => void;
};
type Props = {};

const LaunchScreen = (props: Props, ref: any) => {
  const [activeProject, setActiveProject] = useState<ProjectsType | null>();
  const [showPopup, togglePopup] = useState(false);
  const [isPreviewVisible, setPreviewVisible] = useState(false);

  const pathBase = "/projects";
  const isMobile = () => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth < 768;
  };

  const src = useMemo(() => {
    console.log(activeProject);
    if ((isMobile() && activeProject) || (activeProject && isPreviewVisible)) {
      return <NoPreview project={activeProject} />;
    }
    switch (activeProject?.importType) {
      case ImportTypesEnum.IMPORT:
        return (
          <iframe
            className="h-[90%] w-[98%] mx-auto my-auto border-solid border-2 rounded border-slate-500"
            title="project"
            src={path.resolve(pathBase, activeProject.src)}
            allowFullScreen
            sandbox=" allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-same-origin"
          />
        );
      case ImportTypesEnum.PREVIEW:
        return (
          <iframe
            className="h-[90%] w-[98%] mx-auto my-auto border-solid border-2 rounded border-slate-500"
            title="project"
            src={activeProject.src}
            allowFullScreen
          />
        );
      case ImportTypesEnum.LINK:
        return <NoPreview project={activeProject} />;
      default:
        break;
    }
  }, [activeProject, isPreviewVisible]);

  const handleClose = () => {
    togglePopup(false);
    document.body.style.overflow = "auto";
    setActiveProject(null);
    setPreviewVisible(false);
  };

  useImperativeHandle(ref, () => {
    return {
      openPopup: (project: ProjectsType) => {
        setActiveProject(project);
        togglePopup(true);
        document.body.style.overflow = "hidden";
      },

      isActive: () => {
        return showPopup;
      },

      setData: (project: ProjectsType) => {
        setActiveProject(project);
      },

      closePopup: handleClose,
    };
  });

  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent click events from bubbling up to the outer div
    e.stopPropagation();
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div
      onClick={handleClose} // Close popup when clicking the outer div
      id="projectsPopup"
      className="fixed inset-0 flex items-center justify-center z-40 bg-slate-900 text-white h-screen w-screen bg-opacity-80 backdrop-blur-md rounded"
    >
      <div className=" h-[95vh] w-[92vw] mx-auto my-auto rounded z-50 bg-slate-700 flex-col items-center">
        <div
          className="relative-0 p-2.5 text-right flex justify-end"
          onClick={handleInnerClick} // Handle clicks inside the inner div
        >
          {!isMobile() && activeProject?.importType != ImportTypesEnum.LINK && (
            <div
              className=" text-slate-300 text-sm mr-2 font-bold hover:text-slate-100 cursor-pointer flex"
              onClick={() => setPreviewVisible(!isPreviewVisible)}
            >
              {isPreviewVisible ? "Preview" : "More details"}{" "}
              <ChevronDownIcon className=" w-3 h-3 ml-1" />
            </div>
          )}
          <button
            className="text-red-500 hover:text-red-700 border border-red-500 hover:border-red-700 px-2 rounded-full text-sm font-bold "
            onClick={handleClose}
          >
            X
          </button>
        </div>
        <div className="flex items-center justify-center "></div>
        {src}
      </div>
      <div className="h-4 w-[98%] bg-slate-700 mx-auto rounded absolute bottom-0.5 sm:block hidden"></div>
    </div>
  );
};
export const Screen = forwardRef<LaunchScreenRef, Props>(LaunchScreen);
