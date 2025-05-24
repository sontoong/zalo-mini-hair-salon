import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BannerImg from "../../static/homepage-banner.png";

const Promotion = () => {
  return (
    <div className="h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        className="h-full"
        pagination={true}
        modules={[Pagination]}
        loop={true}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index} className="!flex items-center">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={BannerImg}
                className="size-full object-cover object-top"
                style={{ objectPosition: "0 -25px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Promotion;
