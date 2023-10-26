import { RefObject } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { SwiperRef } from "swiper/react";

interface label {
  title: string;
  swiperRef: RefObject<SwiperRef>;
}

function LabelCarousel({ title, swiperRef }: label) {
  return (
    <div className="flex items-center justify-between font-medium">
      <div className="text-[1.25rem] lg:text-[2.5rem] fredoka">{title}</div>
      <div className="flex items-center space-x-3 text-[1.25rem]">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="bg-white hover:bg-black cursor-pointer rounded-full hover:text-white transition-all border border-black p-1"
        >
          <IoChevronBack />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="bg-white hover:bg-black cursor-pointer rounded-full hover:text-white transition-all border border-black p-1"
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
}

export default LabelCarousel;
