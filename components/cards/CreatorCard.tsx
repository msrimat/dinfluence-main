import { IoStarSharp } from "react-icons/io5";

function CreatorCard({ creator }: any) {
  return (
    <div className="relative rounded-xl overflow-hidden lg:hover:scale-[0.975] transition-all cursor-pointer">
      <div className="absolute left-[5%] top-[5%] bg-white/[0.4] p-2 rounded-md">
        {creator.media}
      </div>
      <div className="bg-gradient-to-b from-white/[0.1] from-70% to-black/[0.9] absolute w-full h-full"></div>
      <div className="absolute bottom-[5%] left-[5%] text-white">
        <div className="fredoka lg:text-[1.5rem] font-medium">
          {creator.name}
        </div>
        <div className="flex items-center space-x-2">
          <IoStarSharp className="text-primary" />
          <div>{creator.rating}</div>
        </div>
      </div>
      <img className="w-full h-[20rem] object-cover" src={creator.imageUrl} />
    </div>
  );
}

export default CreatorCard;
