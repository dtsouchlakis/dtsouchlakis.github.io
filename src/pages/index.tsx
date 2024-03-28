import { Inter } from "next/font/google";
import { useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import { EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from "@/utils/constants";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToSection(ref: any) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);

    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const subject = target.subject.value;
    const body = target.body.value;
    const email = target.email.value;
    window.open(
      `mailto:d.tsouchlakis@outlook.com?subject=${subject}&body=${body}&email=${email}`
    );
  }

  return (
    <>
      <Head>
        <title>Tsouchlakis Dionysios Portfolio</title>

        <meta property="og:url" content="https://dtsouchlakis.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tsouchlakis Dionysios Portfolio" />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/dd117dbb-6b33-4e3c-9573-c38aec3ee232.jpg?token=LwbCXUZfZzriLbZir5-D6TxaS6ITDG6Av53BKbC-6WY&height=750&width=1200&expires=33247623515"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="dtsouchlakis.com" />
        <meta property="twitter:url" content="https://dtsouchlakis.com" />
        <meta name="twitter:title" content="Tsouchlakis Dionysios Portfolio" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/dd117dbb-6b33-4e3c-9573-c38aec3ee232.jpg?token=LwbCXUZfZzriLbZir5-D6TxaS6ITDG6Av53BKbC-6WY&height=750&width=1200&expires=33247623515"
        />
      </Head>

      <main
        className={` ${inter.className} h-screen bg-[url('/background.jpg')] bg-cover `}
      >
        <Header
          homeRef={homeRef}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
        />
        <section
          className="w-full h-full  backdrop-blur-lg bg-center "
          ref={homeRef}
        >
          <div className="w-full h-full flex flex-col justify-center items-center relative">
            <div className="flex flex-col justify-center items-center">
              <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-slate-800 ">
                Tsouchlakis Dionysios
              </h1>
              <h2 className="text-xl text-slate-800 sm:text-2xl">
                Software Developer
              </h2>
              <Link
                href="https://drive.google.com/uc?export=download&id=14FWovu1RdU1QdfG4Lx8Tn3yQvXrv2KJK"
                className="text-slate-800 text-2xl border-2 border-slate-800 px-2 py-1 mt-4 rounded-md hover:bg-slate-800 hover:text-slate-200 transition duration-300 ease-in-out"
                target="_blank"
              >
                Download CV
              </Link>
              <div className="absolute bottom-36 sm:bottom-20">
                <ChevronDownIcon
                  className="w-6 h-6 mt-4 text-slate-500 sm:text-slate-800 hover:cursor-pointer hover:text-slate-200 transition duration-300 ease-in-out border-2 sm:border-slate-800 border-slate-600 rounded-full animate-bounce"
                  onClick={() => scrollToSection(aboutRef)}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full bg-slate-200" ref={aboutRef}>
          <div className="w-full h-full flex sm:flex-row flex-col justify-center items-center ">
            <h1 className="md:text-5xl text-3xl font-bold text-slate-800 text-center w-1/2 py-8  underline decoration-4 decoration-[#18bc9c]">
              About Me
            </h1>
            <p className="md:text-2xl sm:text-xl text-slate-800 max-w-5xl mx-8 ">
              Full-Stack Software Engineer blending Environmental Sciences and
              Energy markets expertise. Passionate about coding, I drive
              innovation with diverse skills and a collaborative spirit.
              Thriving on problem-solving, I craft scalable, user-friendly
              solutions.
            </p>
          </div>
        </section>
        <section className="w-full bg-slate-800 py-12" ref={experienceRef}>
          <div className="sm:w-full  flex flex-col justify-center items-center">
            <h1 className="md:text-5xl text-3xl font-bold text-slate-200 text-center  underline decoration-4 decoration-[#18bc9c]  my-8">
              Experience
            </h1>
            <Experience experienceHistory={EXPERIENCE} />
          </div>
        </section>
        <section className="w-full  bg-slate-200 py-12" ref={educationRef}>
          <div className="w-full  flex flex-col justify-center items-center ">
            <h1 className="sm:text-5xl text-3xl font-bold text-slate-800 text-center   underline decoration-4 decoration-[#18bc9c]  my-8">
              Education
            </h1>
            {EDUCATION.map((education, index) => (
              <Link
                href={education.url}
                key={index}
                target="_blank"
                className="text-center sm:text-start sm:w-1/2 w-[90vw] my-4 flex flex-col justify-center items-center py-4 px-8 border-2 text-slate-800 border-slate-800 rounded-lg  hover:bg-slate-800 hover:text-slate-200 transition duration-300 ease-in-out hover:cursor-pointer mx-8 "
              >
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {education.school}
                </h2>
                <p className="text-2xl sm:text-3xl">{education.degree}</p>
                <p className="text-2xl sm:text-3xl">{education.location}</p>
                <p className="text-2xl sm:text-3xl">{education.description}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="w-full   " ref={projectsRef}>
          <div className="w-full h-full flex flex-col justify-center items-center bg-slate-800 py-12">
            <h1 className="sm:text-5xl text-3xl font-bold text-slate-200 text-start underline decoration-4 decoration-[#18bc9c] ">
              Projects
            </h1>
            <Projects projects={PROJECTS} />
          </div>
        </section>
        <section className="w-full sm:h-[80%]" ref={skillsRef}>
          <div className="w-full h-full flex sm:flex-row  items-center  bg-slate-200 py-12 flex-col">
            <h1 className="sm:text-5xl text-3xl font-bold text-slate-800 text-start underline decoration-4 decoration-[#18bc9c] mx-8 px-4">
              Skills
            </h1>
            <div className="flex sm:flex-row flex-wrap mt-8 sm:w-1/2 w-full justify-center sm:justify-start">
              {SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className="mx-2 bg-slate-800 text-slate-200 px-4 py-1 text-sm rounded-full hover:cursor-pointer hover:bg-slate-200 hover:text-slate-800 transition duration-300 ease-in-out mb-4 sm:w-auto w-32"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full " ref={contactRef}>
          <div className="w-full h-full flex flex-col justify-center items-center bg-slate-800 ">
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-200  underline decoration-4 decoration-[#18bc9c] mx-8 px-4 mb-14 sm:mt-8 mt-12">
              Contact
            </h1>
            <div className="w-3/4 flex flex-col justify-center items-center text-slate-200">
              <p>
                Email:{" "}
                <a
                  href="mailto:d.tsouchlakis@outlook.com"
                  className="text-slate-200 hover:text-slate-800"
                >
                  d.tsouchlakis@outlook.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+821025773205"
                  className="text-slate-200 hover:text-slate-800"
                >
                  +821025773205
                </a>
              </p>
            </div>
            <div className="w-1/2 my-4 flex flex-row justify-center items-center">
              <div>
                <a
                  href="https://github.com/dtsouchlakis"
                  target="_blank"
                  className="text-slate-200 hover:text-slate-800"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    className="w-8 h-8"
                  ></img>
                </a>
              </div>
              <div className="mx-4">
                <a
                  href="https://www.linkedin.com/in/dionysios-tsouchlakis/"
                  target="_blank"
                  className="text-slate-200 hover:text-slate-800"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    className="w-8 h-8"
                  ></img>
                </a>
              </div>
              <div>
                <a
                  href="mailto:d.tsouchlakis@outlook.com"
                  target="_blank"
                  className="text-slate-200 hover:text-slate-800"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    className="w-8 h-8"
                  ></img>
                </a>
              </div>
            </div>

            <div className="sm:w-3/4 flex flex-col justify-center items-center text-slate-200 w-full">
              <form
                className="sm:w-1/2 my-4 flex flex-col justify-center items-center w-[80%]"
                onSubmit={sendEmail}
              >
                <input
                  type="subject"
                  name="subject"
                  required
                  placeholder="subject"
                  className="w-full border-2 border-slate-800 rounded-lg p-2 my-4 text-slate-800"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full border-2 border-slate-800 rounded-lg p-2 my-4 text-slate-800"
                />
                <textarea
                  placeholder="body"
                  name="body"
                  required
                  className="w-full border-2 border-slate-800 rounded-lg p-2 my-4 text-slate-800"
                  rows={5}
                ></textarea>
                <button
                  type="submit"
                  className="bg-slate-200 text-slate-800 px-4 py-2 rounded-full hover:bg-slate-800 hover:text-slate-200 transition duration-300 ease-in-out w-24"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="w-full h-12 bg-slate-900 flex justify-center items-center relative bottom-0 z-50">
          <p className="text-slate-200 text-sm">
            &copy; {new Date().getFullYear()} Tsouchlakis Dionysios. All rights
            reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
