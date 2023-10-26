"use client";

import { FaSearch } from "react-icons/fa";
import FadeVertical from "../utils/FadeVertical";

function FindExperiences() {
  return (
    <div className="max-w-7xl mx-auto p-5 lg:p-8">
      <FadeVertical y={30}>
        <div className="bg-[url('/background_2.png')] bg-cover bg-center p-5 lg:p-12 flex flex-col items-center text-center rounded-2xl text-white">
          <div className="text-[1.25rem] lg:text-[2.5rem] fredoka font-bold md:max-w-[80%]">
            Want to sign up your large group to sign up for your favorite
            influencer’s workshop?
          </div>
          <button className="bg-primary p-3 px-5 lg:text-[1.25rem] rounded-lg mt-5 lg:mt-12 lg:hover:scale-[0.9] transition-all cursor-pointer hover:brightness-[0.95]">
            Find experiences
          </button>
        </div>
      </FadeVertical>
      <div className="mt-5">
        <div className="font-medium fredoka text-[1.25rem] lg:text-[2.5rem] text-center md:text-left">
          Can't find what you're looking for?
        </div>
        <div className="w-full border border-primary rounded-lg flex items-center space-x-3 p-3 mt-5 lg:text-[1.25rem]">
          <FaSearch className="text-gray-300" />
          <input placeholder="Search..." className="flex-1 outline-none" />
        </div>
      </div>
    </div>
  );
}

export default FindExperiences;
