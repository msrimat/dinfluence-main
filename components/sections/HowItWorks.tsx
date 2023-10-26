"use client";

import StaggerChildren from "../utils/StaggerChildren";
import StaggerParent from "../utils/StaggerParent";

function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto p-5 lg:p-8 md:py-12 xl:py-16">
      <div className="fredoka font-semibold text-[1.5rem] lg:text-[2rem] text-center">
        How it Works
      </div>
      <StaggerParent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 lg:mt-12">
          {howitworks.map((x) => {
            return (
              <StaggerChildren key={x.label}>
                <div className="border-2 rounded-md border-primary p-5 lg:p-8 flex flex-col items-center text-center lg:hover:translate-y-[-5%] transition-all cursor-pointer">
                  <div className="p-3 flex items-center justify-center rounded-full bg-primary">
                    <img src={x.icon} />
                  </div>
                  <div className="lg:text-[1.25rem] mt-3">{x.label}</div>
                </div>
              </StaggerChildren>
            );
          })}
        </div>
      </StaggerParent>
    </div>
  );
}

const howitworks = [
  {
    icon: "/icons/icon_1.png",
    label: "Sign up for a time slot for your favorite influencers workshop",
  },
  {
    icon: "/icons/icon_2.png",
    label: "Attend by yourself or with a group of friends",
  },
  {
    icon: "/icons/icon_3.png",
    label: "Learn your new skill taught by the ones who know most! ",
  },
];

export default HowItWorks;
