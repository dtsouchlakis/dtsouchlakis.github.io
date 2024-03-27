import { ExperienceType } from "@/utils/models";

export default function Experience({
  experienceHistory,
}: {
  experienceHistory: ExperienceType[];
}) {
  console.log(experienceHistory);
  return (
    <ol className="relative border-s border-gray-700 sm:w-auto w-[70%]">
      {experienceHistory.map((experience) => (
        <li className="mb-7 ms-6">
          <span
            key={experience.company}
            className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-gray-900 "
          >
            <img
              className="rounded-full shadow-lg"
              src={experience.logo}
              alt={experience.company}
            />
          </span>
          <time className=" text-xs font-normal text-gray-400 sm:order-last sm:mb-0 mb-1 ">
            {experience.startDate} - {experience.endDate}
          </time>

          <div className="items-center justify-between p-4   rounded-lg shadow-sm sm:flex bg-gray-700 border-gray-600 max-w-3xl mx-auto mt-2">
            <div className="text-sm font-normal text-gray-300 ">
              <a
                href={experience.url}
                className="font-semibold text-blue-500 hover:underline"
              >
                {experience.company}
              </a>{" "}
              - {experience.position}
              <a
                href={experience.pin}
                target="_blank"
                className="font-semibold text-blue-500 hover:underline ml-2"
              >
                @ {experience.location}
              </a>
              <div className=" p-3 text-xs italic font-normal border  rounded-lg bg-gray-600 border-gray-500 text-gray-300 mt-2">
                {experience.description}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
