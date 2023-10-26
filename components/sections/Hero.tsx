"use client";
import FadeVertical from "../utils/FadeVertical";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto p-5 lg:p-8">
      <div className="p-5 rounded-3xl bg-[url('/background.png')] bg-cover bg-center bg-no-repeat lg:p-12 xl:px-24 lg:pt-24">
        <FadeVertical y={30}>
          <div className="flex flex-col items-center space-y-3 text-white text-center">
            <div className="text-[1.5rem] lg:text-[4.5rem] font-bold fredoka lg:max-w-[90%]">
              Unforgettable Experiences Hosted by Influencers
            </div>
            <div className="lg:max-w-[55%]">
              Create ever-lasting memories and learn new skills with your
              favorite creators and influencers.
            </div>
          </div>
          <img
            className="lg:hover:scale-[1.03] cursor-pointer transition-all mt-12 w-full"
            src="illustration.png"
          />
        </FadeVertical>
      </div>
    </div>
  );
}

export default Hero;
