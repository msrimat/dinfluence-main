import { RefObject } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Enums
import { contentType } from "../../enums/content";
import { experienceMode, experienceSize } from "../../enums/experience";

// Cards
import ExperienceCard from "../../cards/ExperienceCard";
import CategoryCard from "../../cards/CategoryCard";
import CreatorCard from "../../cards/CreatorCard";
import ReviewCard from "../../cards/ReviewCard";

interface label {
  slidesPerView: number;
  spaceBetween?: number;
  swiperRef: RefObject<SwiperRef>;
  data: any;
  type: contentType;
}

function ContentCarousel({
  slidesPerView,
  spaceBetween,
  swiperRef,
  data,
  type,
}: label) {
  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween ? spaceBetween : 30}
      onResize={(e) => {
        e.update();
        e.updateProgress();
        e.updateSize();
        e.updateSlides();
      }}
      breakpoints={{
        1266: {
          slidesPerView: slidesPerView,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
      className="w-full mt-5 lg:mt-8"
    >
      {data?.map((x: any) => {
        return (
          <SwiperSlide key={x._id + "next_day"}>
            {type === contentType.CATEGORIES && <CategoryCard category={x} />}
            {type === contentType.CREATORS && <CreatorCard creator={x} />}
            {type === contentType.EXPERIENCES_MEDIUM && (
              <ExperienceCard
                experience={x}
                mode={experienceMode.SCHEDULE}
                size={experienceSize.MEDIUM}
              />
            )}
            {type === contentType.EXPERIENCES_SMALL && (
              <ExperienceCard
                experience={x}
                mode={experienceMode.PRICE}
                size={experienceSize.SMALL}
              />
            )}
            {type === contentType.REVIEWS && <ReviewCard review={x} />}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ContentCarousel;
