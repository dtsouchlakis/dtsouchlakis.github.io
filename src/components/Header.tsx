import { Bars4Icon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface HeaderProps {
  homeRef: any;
  aboutRef: any;
  experienceRef: any;
  educationRef: any;
  projectsRef: any;
  skillsRef: any;
  contactRef: any;
}

export default function Header({
  homeRef,
  aboutRef,
  experienceRef,
  educationRef,
  projectsRef,
  skillsRef,
  contactRef,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function scrollToSection(ref: any) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="w-full h-12 bg-slate-800 flex justify-end items-center sticky top-0 z-50 ">
      <ul className="hidden sm:flex justify-end text-white  md:flex">
        <li
          className="mx-2 hover:text-slate-300 hover:cursor-pointer"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </li>
        <li
          className="mx-2 hover:text-slate-300 hover:cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </li>
        <li
          className="mx-2 hover:text-slate-300 hover:cursor-pointer"
          onClick={() => scrollToSection(experienceRef)}
        >
          Experience
        </li>
        <li
          className="mx-2 hover:text-slate-300 hover:cursor-pointer"
          onClick={() => scrollToSection(educationRef)}
        >
          Education
        </li>
        <li
          className="mx-2 hover:text-slate-300 hover:cursor-pointer"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </li>
        <li
          className="mx-2 hover:text-slate-300 hover:cursor-pointer"
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </li>
        <li
          className="mx-2 hover:text-slate-300 hover:cursor-pointer"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </li>
      </ul>
      <Bars4Icon
        className="h-8 w-8 text-white mx-2  sm:visible sm:hidden hover:text-slate-300 hover:cursor-pointer sm:mr-4"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div
          className="absolute top-12 right-0 w-52 h-52 bg-black opacity-50 sm:hidden z-50"
          onClick={toggleMenu}
        >
          <ul className="flex flex-col justify-center items-center text-white">
            <li
              className="mx-2 hover:text-slate-300 hover:cursor-pointer"
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </li>
            <li
              className="mx-2 hover:text-slate-300 hover:cursor-pointer"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </li>
            <li
              className="mx-2 hover:text-slate-300 hover:cursor-pointer"
              onClick={() => scrollToSection(experienceRef)}
            >
              Experience
            </li>
            <li
              className="mx-2 hover:text-slate-300 hover:cursor-pointer"
              onClick={() => scrollToSection(educationRef)}
            >
              Education
            </li>
            <li
              className="mx-2 hover:text-slate-300 hover:cursor-pointer"
              onClick={() => scrollToSection(projectsRef)}
            >
              Projects
            </li>
            <li
              className="mx-2 hover:text-slate-300 hover:cursor-pointer"
              onClick={() => scrollToSection(skillsRef)}
            >
              Skills
            </li>
            <li
              className="mx-2 hover:text-slate-300 hover:cursor-pointer"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
