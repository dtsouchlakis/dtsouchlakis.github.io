import { ExperienceType, EducationType, ProjectsType } from "../utils/models";
import { ImportTypesEnum } from "../utils/models";

export const SKILLS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Next.js",
  "React Native",
  "Git",
  "Docker",
  "PostgreSQL",
  "Prisma",
  "NestJS",
  "FastAPI",
  "HTML",
  "CSS",
  "TailwindCSS",
  "OpenAI API",
  "Ionic",
];

export const EXPERIENCE: ExperienceType[] = [
  {
    position: "Junior Software Engineer",
    company: "HanaLoop",
    location: "Seoul",
    pin: "https://maps.app.goo.gl/RujRM63qoBcLGajA6",
    startDate: "07/2023",
    endDate: "present",
    description:
      "Full stack development, working on the whole lifecycle of projects including RAG LLM assistant, microservices, Deployment.",
    logo: "/assets/hanaloop.png",
    url: "hanaloop.com",
  },
  {
    position: "Commercial associate & Research analyst",
    company: "Aurora Energy Research",
    location: "Berlin",
    pin: "https://maps.app.goo.gl/Tp9wygRTNpV3Ssgb8",
    startDate: "01/2021",
    endDate: "09/2022",
    description:
      "Developed Aurora’s Southeast European imbalance price analysis forecast, using python and excel, Power Query.",
    logo: "/assets/aurora.png",
    url: "auroraer.com",
  },
  {
    position: "Corporate Emissions trader",
    company: "Vertis Environmental Finance",
    pin: "https://maps.app.goo.gl/WCsxemDvok742SuB6",
    location: "Budapest",
    startDate: "08/2019",
    endDate: "01/2021",
    description:
      "Provided data-driven market analysis for the environmental commodity markets to inform trading strategies.",
    logo: "/assets/vertis.png",
    url: "www.vertis.com",
  },
  {
    position: "Junior Analyst – EU & Global Carbon and Power markets",
    company: "ICIS",
    pin: "https://maps.app.goo.gl/GfsSQQ7Ui9TL4GVm9",
    location: "Karlsruhe (1-Year contract)",
    startDate: "08/2018",
    endDate: "08/2019",
    description:
      "Helped develop the Greek and Cypriot Power forecast, using Python, SQL and Excel.",
    logo: "/assets/icis.png",
    url: "www.icis.com",
  },
] as ExperienceType[];

export const EDUCATION = [
  {
    school: "University of Western Macedonia",
    degree: "Bachelor of Engineering",
    location: "Kozani, Greece",
    description: "Environmental Science",
    url: "https://www.uowm.gr",
  },
  {
    school: "Wcoding Bootcamp",
    location: "Seoul, South Korea",
    description: "Full stack web development",
    url: "https://www.wcoding.com",
  },
  {
    school: "Hochschule Karlsruhe",
    degree: "Internship",
    location: "Karlsruhe, Germany",
    description: "Emulation of solar panel shading in Matlab",
    url: "https://www.h-ka.de",
  },
] as EducationType[];

export const PROJECTS = [
  {
    name: "GoFast",
    src: "https://github.com/dtsouchlakis/goFast",
    description: `One of my latest personal projects. This is a react native project, a fasting tracker. After trying a lot of the available options I felt that none of the existing projects
      were really suited to my needs. I decided to create my own. The project is close to being in a finished state, and the next steps is creating notifications and a widget for tracking the time left.`,
    brief: "(WIP-close to finish) An android fasting tracker with a widget.",
    image: "/assets/gofast-screen.jpeg",
    technologies: ["React", "tailwind", "typescript"],
    importType: ImportTypesEnum.LINK,
    repo: "https://github.com/dtsouchlakis/goFast",
  },
  {
    name: "Open Resources",
    src: "https://github.com/dtsouchlakis/open-resources",
    description: `One of my latest personal projects, and perhaps the most ambitious one. Working at a startup I saw the need for software to manage Human Resources but also to manage clients was a
    very apparent one, but also it was something that could very easily improve the life of my coworkers. So for this reason I decided to create an open source project that will do just that. The project is still in its initial states, amd apart from
    being a source to learn more about new architecture patterns, it is also a project that I aim to use to learn how to manage projects in an agile way.`,
    brief: "(WIP) Open Resources, a CRM and HR management system",
    image: "/assets/openresources-screen.png",
    technologies: ["React", "tailwind", "typescript", "nextjs"],
    importType: ImportTypesEnum.LINK,
    repo: "https://github.com/dtsouchlakis/open-resources",
  },
  {
    name: "Climatix",
    src: "https://exercise-ebon.vercel.app/",
    description: `This is my first full-stack project, initially done as part of the interview that was part of my current position. This is a crud app that includes a map visualizing emissions in Korea among other things. Furthermore,
      this is my first time using several technologies such as next, nextst, typescript and tailwind, so the project was a real challenge at that time. Furthermore, this project taught me a lot about how to actually deploy a project`,
    brief:
      "(2023-06) Climatix emissions management app. First full-stack project",
    image: "/assets/climatix-screen.png",
    technologies: ["React", "tailwind", "typescript", "nextjs", "nestjs"],
    importType: ImportTypesEnum.PREVIEW,
    repo: "https://github.com/dtsouchlakis/exercise",
  },
  {
    name: "TODO",
    src: "Todo/build/index.html",
    description:
      "A simple todo app. This was my first React Project, and for this reason it has a special place in my portfolio. I still think the style looks quite nice.",
    brief: "(2023-05) TODO App",
    image: "/assets/todo-screen.png",
    technologies: ["react", "css", "javascript"],
    importType: ImportTypesEnum.IMPORT,
    repo: "https://github.com/dtsouchlakis/dtsouchlakis.github.io",
  },
  {
    name: "Weather App",
    src: "weatherApp/index.html",
    description:
      "Another very simple project done during the bootcamp, that was challenging at the time. I mainly like the styles and the animations.",
    brief: "(2023-04) Weather App",
    image: "/assets/weather-screen.png",
    technologies: ["html", "css", "javascript"],
    importType: ImportTypesEnum.IMPORT,
    repo: "https://github.com/dtsouchlakis/dtsouchlakis.github.io",
  },
  {
    name: "PacMan",
    src: "Pacman/index.html",
    description:
      "This is my first personal project, and it was challenging at the time, but it helped me think in a very different way and learn a lot about how to think in Javascript. This is just the traditional pacman game.",
    brief: "(2023-04)The classic PacMan game",
    image: "/assets/pacman-screen.png",
    technologies: ["javascript"],
    importType: ImportTypesEnum.IMPORT,
    repo: "https://github.com/dtsouchlakis/dtsouchlakis.github.io",
  },
  {
    name: "St. Pauls project",
    src: "St. Pauls project/index.html",
    description: `One of the first projects with a larger scope that I did during the bootcamp.
    Although this project might not be impressive at a first glance, it was all done with css and HTML, and although I have improved since then, I still feel that it's still a great project, considering my experience at the time.`,
    brief: "(2023-03) A redesign of a school website in HTML and CSS",
    image: "/assets/stpauls-screen.png",
    technologies: ["css", "html"],
    importType: ImportTypesEnum.IMPORT,
    repo: "https://github.com/dtsouchlakis/dtsouchlakis.github.io",
  },
] as ProjectsType[];
