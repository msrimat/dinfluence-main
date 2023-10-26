"use client";

import { useRef } from "react";
import { SwiperRef } from "swiper/react";
import { contentType } from "../enums/content";

import LabelCarousel from "./template/LabelCarousel";
import ContentCarousel from "./template/ContentCarousel";

function FeaturedCreatorsCarousel({ creators }: any) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div id="Creators" className="max-w-7xl mx-auto p-5 lg:p-8">
      <LabelCarousel title="Featured creators" swiperRef={swiperRef} />
      <ContentCarousel
        slidesPerView={4}
        swiperRef={swiperRef}
        data={creators}
        type={contentType.CREATORS}
      />
    </div>
  );
}

export default FeaturedCreatorsCarousel;
