"use client";

import { useRef } from "react";
import { SwiperRef } from "swiper/react";
import { contentType } from "../enums/content";

import LabelCarousel from "./template/LabelCarousel";
import ContentCarousel from "./template/ContentCarousel";

function ExperiencesUnder100Carousel({ experiences }: any) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto p-5 lg:p-8">
        <LabelCarousel title="Experiences under $100" swiperRef={swiperRef} />
        <ContentCarousel
          slidesPerView={5}
          spaceBetween={15}
          swiperRef={swiperRef}
          data={experiences}
          type={contentType.EXPERIENCES_SMALL}
        />
      </div>
    </div>
  );
}

export default ExperiencesUnder100Carousel;
