"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import Card from "./card";
import "swiper/css";
import "swiper/css/free-mode";
import "./styles.css";
interface SliderProps {}

const Slider: React.FC<SliderProps> = ({}) => {
  const [isBeginning, setisBeginning] = useState<boolean | undefined>(false);
  const [isEnd, setisEnd] = useState<boolean | undefined>(false);

  const swiperElRef = useRef<SwiperRef>(null);

  return (
    <div className="relative flex w-[1430px]">
      <div className="fex flex-col w-full">
        <div className="flex flex-row w-full justify-end ">
          <button
            onClick={() => {
              swiperElRef.current?.swiper?.slidePrev();
              setisBeginning(swiperElRef.current?.swiper.isBeginning);
              setisEnd(swiperElRef.current?.swiper.isEnd);
            }}
            disabled={isBeginning}
            className="shadow-md border-3 border-solid border-black p-2 bg-gray-200 enabled:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              swiperElRef.current?.swiper?.slideNext();
              setisBeginning(swiperElRef.current?.swiper.isBeginning);
              setisEnd(swiperElRef.current?.swiper.isEnd);
            }}
            disabled={isEnd}
            className="shadow-md border-3 border-solid border-black p-2 bg-gray-200 enabled:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <Swiper
          ref={swiperElRef}
          spaceBetween={2}
          slidesPerView={4}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySlider"
          loop={false}
          onTouchMove={() => {
            setisBeginning(swiperElRef.current?.swiper.isBeginning);
            setisEnd(swiperElRef.current?.swiper.isEnd);
          }}
        >
          {Array.from({ length: 10 }, () => 0).map((val, k) => {
            return (
              <SwiperSlide key={k}>
                <Card />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
