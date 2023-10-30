import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiper.module.css"; // Import CSS module

import Fade from "react-reveal/Fade";
// import required modules
import { EffectFade, Pagination } from "swiper/modules";
const SwiperCm = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Set the delay between slides in milliseconds (3 seconds in this case)
        }}
        modules={[EffectFade, Pagination]}
        className="w-screen h-[100vh]"
      >
        <SwiperSlide>
          <div className={`${styles.img1}`}>
            <div className={`grid grid-cols-2 text-white text-2xl ${styles.textup}`}>
              <div className="">
              </div>
              <div className="flex flex-col gap-5 items-center justify-center h-screen">
                <p  className="text-3xl font-bold ">GOD OF WAR</p>
                <p className="text-xl font-tanha font-semibold">برای کنسول XBOX  و PS</p>
                <p className="text-lg font-tanha font-semibold">همین الان خرید کنید</p>
               <button className="px-10 font-tanha py-2 rounded-lg bg-green-500 text-white">
                خرید
               </button>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${styles.img2}`}>
            <div className={`grid grid-cols-2 text-white text-2xl ${styles.textup}`}>
              <div className="">
              </div>
              <div className="flex flex-col gap-5 items-center justify-center h-screen">
                <p  className="text-3xl font-bold ">GOD OF WAR</p>
                <p className="text-xl font-tanha font-semibold">برای کنسول XBOX  و PS</p>
                <p className="text-lg font-tanha font-semibold">همین الان خرید کنید</p>
               <button className="px-10 font-tanha py-2 rounded-lg bg-green-500 text-white">
                خرید
               </button>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${styles.img3}`}>
            <div className={`grid grid-cols-2 text-white text-2xl ${styles.textup}`}>
              <div className="">
              </div>
              <div className="flex flex-col gap-5 items-center justify-center h-screen">
                <p  className="text-3xl font-bold ">GOD OF WAR</p>
                <p className="text-xl font-tanha font-semibold">برای کنسول XBOX  و PS</p>
                <p className="text-lg font-tanha font-semibold">همین الان خرید کنید</p>
               <button className="px-10 font-tanha py-2 rounded-lg bg-green-500 text-white">
                خرید
               </button>

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
};

export default SwiperCm;
