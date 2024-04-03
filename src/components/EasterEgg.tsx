import Home from "@/pages";
import { useMemo } from "react";

export default function EasterEgg() {
  const eggs = [
    "rotate-90",
    "rotate-180",
    "rotate-45",
    "invert",
    "grayscale",
    "animate-bounce",
    <img src="/assets/paris.jpg" className="h-full mx-auto" key={"paris"} />,
    <iframe
      src="/projects/portfolio/index.html"
      className="w-full h-full"
      key={"old-school"}
    />,
  ];
  const random = Math.floor(Math.random() * eggs.length);

  const selectedEgg = useMemo(() => {
    let rand = eggs[random];
    if (rand === "paris") {
      return "animate-paris";
    } else if (rand === "old-school") {
      return "animate-old-school";
    } else {
      return rand;
    }
  }, [random]);

  return (
    <div
      className={`overflow-scroll h-[90%] w-[98%] mx-auto my-auto border-solid border-2 rounded border-slate-500 bg ${selectedEgg} `}
      onClick={(e) => e.stopPropagation()}
    >
      {typeof selectedEgg === "string" ? <Home className={""} /> : selectedEgg}
    </div>
  );
}
