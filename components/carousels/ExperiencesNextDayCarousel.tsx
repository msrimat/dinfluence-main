"use client";

import { useRef } from "react";
import { SwiperRef } from "swiper/react";
import { contentType } from "../enums/content";

import LabelCarousel from "./template/LabelCarousel";
import ContentCarousel from "./template/ContentCarousel";

function ExperiencesNextDayCarousel({ experiences }: any) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div id="Experiences" className="bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto p-5 lg:p-8">
        <LabelCarousel
          title="Experiences within the next day"
          swiperRef={swiperRef}
        />
        <ContentCarousel
          slidesPerView={3}
          swiperRef={swiperRef}
          data={experiences}
          type={contentType.EXPERIENCES_MEDIUM}
        />
      </div>
    </div>
  );
}

export default ExperiencesNextDayCarousel;
