import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./index.scss";

const Services = () => {
  return (
    <div className="services">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        grabCursor={true}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SwiperSlide key={i}>
            <div className="card">
              <img src={`https://picsum.photos/800/600?random=${i}`} alt="" />
              <div className="text">Service {i}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
