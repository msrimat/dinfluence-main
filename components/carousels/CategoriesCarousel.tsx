"use client";

import { useRef } from "react";
import { SwiperRef } from "swiper/react";
import { contentType } from "../enums/content";

import LabelCarousel from "./template/LabelCarousel";
import ContentCarousel from "./template/ContentCarousel";

function CategoriesCarousel({ categories }: any) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div id="Categories" className="max-w-7xl mx-auto p-5 lg:p-8">
      <LabelCarousel title="Categories" swiperRef={swiperRef} />
      <ContentCarousel
        slidesPerView={5}
        swiperRef={swiperRef}
        data={categories}
        type={contentType.CATEGORIES}
      />
    </div>
  );
}

export default CategoriesCarousel;
