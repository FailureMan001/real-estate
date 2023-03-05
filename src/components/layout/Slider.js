/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../layout/slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import bg_1 from '../../assets/img/bg-2.jpg'
import bg_2 from '../../assets/img/bg-3.jpg'
import bg_3 from '../../assets/img/bg-4.jpg'
import bg_5 from '../../assets/img/bg-5.jpg'
import bg_6 from '../../assets/img/bg-6.jpg'
import bg_7 from '../../assets/img/bg-7.jpg'

const Slider = () => {
   
    return (
        <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bg_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg_5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg_6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg_7} />
        </SwiperSlide>
      </Swiper>
    </>
    );

}

export default Slider