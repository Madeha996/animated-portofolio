import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./index.scss";

import { Grid, Pagination } from "swiper/modules";
import Card from "../../components/card/Card";

export default function Portoflio() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 2,
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 5 },
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=1"
            title="Service 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=2"
            title="Service 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=3"
            title="Service 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=4"
            title="Service 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=5"
            title="Service 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=6"
            title="Service 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=7"
            title="Service 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=8"
            title="Service 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=9"
            title="Service 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=10"
            title="Service 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://picsum.photos/800/600?random=11"
            title="Service 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
