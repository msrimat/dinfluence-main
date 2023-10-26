"use client";

import { useRef } from "react";
import { SwiperRef } from "swiper/react";
import { contentType } from "../enums/content";

import LabelCarousel from "./template/LabelCarousel";
import ContentCarousel from "./template/ContentCarousel";

function ReviewsCarousel({ reviews }: any) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div id="Reviews" className="max-w-7xl mx-auto p-5 lg:p-8">
      <LabelCarousel title="Reviews" swiperRef={swiperRef} />
      <ContentCarousel
        slidesPerView={3}
        swiperRef={swiperRef}
        data={reviews}
        type={contentType.REVIEWS}
      />
    </div>
  );
}

export default ReviewsCarousel;
