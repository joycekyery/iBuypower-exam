"use client";
import React, { Children, ReactNode, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef } from "swiper/react";
import "swiper/css";
import "./styles.css";
interface SliderProps {
  isMobile: boolean;
  cards: ReactNode;
  hasButton: boolean;
}

const Slider: React.FC<SliderProps> = ({
  cards,
  isMobile = false,
  hasButton = false,
}) => {
  const [isBeginning, setisBeginning] = useState<boolean | undefined>(false);
  const [isEnd, setisEnd] = useState<boolean | undefined>(false);

  const swiperElRef = useRef<SwiperRef>(null);

  return (
    <div className="flex flex-col w-full justify-center ">
      {!isMobile && hasButton && (
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
      )}
      <div className={`flex w-[1430px] ${isMobile && "w-full"} self-center`}>
        <Swiper
          ref={swiperElRef}
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={20}
          centeredSlides={isMobile ? true : false}
          initialSlide={0}
          onInit={() => {
            setisBeginning(swiperElRef.current?.swiper.isBeginning);
            setisEnd(swiperElRef.current?.swiper.isEnd);
          }}
          pagination={{
            clickable: true,
          }}
          className="mySlider"
          loop={false}
          onTouchMove={() => {
            setisBeginning(swiperElRef.current?.swiper.isBeginning);
            setisEnd(swiperElRef.current?.swiper.isEnd);
          }}
        >
          {cards}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
