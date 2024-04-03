export interface ExperienceType {
  position: string;
  company: string;
  location: string;
  startDate: string;
  pin?: string;
  endDate: string;
  description: string;
  logo: string;
  url: string;
}

export interface EducationType {
  school: string;
  degree: string;
  location: string;
  description: string;
  url: string;
}
export enum ImportTypesEnum {
  LINK = "link", //external repo hosting the code (no preeview)
  IMPORT = "import", //actual html code to preview in iframe,
  PREVIEW = "preview", //external url where the code is hosted
  COMPONENT = "component",
}

export interface ProjectsType {
  name: string;
  description?: string; //description
  brief?: string; //brief description
  src: string;
  image?: string;
  technologies?: string[];
  importType?: ImportTypesEnum;
  repo?: string;
}
