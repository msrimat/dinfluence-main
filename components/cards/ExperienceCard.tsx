import { IoStarSharp } from "react-icons/io5";
import { experienceMode, experienceSize } from "../enums/experience";

interface experienceType {
  experience: any;
  size?: experienceSize;
  mode: experienceMode;
}

function ExperienceCard({ experience, size, mode }: experienceType) {
  return (
    <div className="bg-white drop-shadow-sm border rounded-xl p-4 rounded-lg flex flex-col lg:hover:scale-[0.975] transition-all cursor-pointer">
      <img
        className={`w-full object-cover rounded-xl ${
          size === experienceSize.SMALL ? "h-[10rem]" : "h-[15rem]"
        }`}
        src={experience.imageUrl}
      />
      <div className="flex items-center space-x-1 text-primary mt-3">
        <IoStarSharp />
        <div>{experience.rating}</div>
        <div>({experience.totalReviews} Reviews)</div>
      </div>
      <div className="mt-2">{experience.title}</div>
      {mode === experienceMode.PRICE ? (
        <div className="mt-2 text-primary">${experience.price}</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          {experience.schedule?.map((y: any, index: number) => {
            return (
              <div
                key={y + index}
                className="border-2 border-primary p-2 px-4 rounded-md text-center hover:bg-primary hover:text-white cursor-pointer transition-all text-[0.95rem] whitespace-nowrap text-primary"
              >
                {y}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
