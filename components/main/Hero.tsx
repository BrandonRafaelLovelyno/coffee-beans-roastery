"use client";

import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import MyPict from "@/components/MyPict";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";

const canvas_black = localFont({
  src: "../../public/fonts/canvas_black.otf",
});
const raleway = Raleway({ subsets: ["latin"] });

export default function Hero() {
  const [idHero, setIdHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdHero((idHero + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, [idHero]);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen overflow-clip">
      {/* Shader */}
      <div className="absolute w-full h-full -z-[5] bg-[#141117]/[40%]" />

      {/* Background Image */}
      <div className="absolute w-[1536px] lg:w-full h-full top-0 left-0 -z-[10] flex">
        <div className="relative w-[75%] lg:w-full h-full">
          <MyPict
            alt=""
            src="/images/hero_slides/hero_1.png"
            heightPtg=""
            className={
              "absolute top-0 -left-[25%] lg:left-0 h-full duration-[1000ms] transition-transform " +
              (idHero === 0 ? "opacity-100" : "opacity-0")
            }
          />
          <MyPict
            alt=""
            src="/images/hero_slides/hero_2.png"
            heightPtg=""
            className={
              "absolute top-0 -left-[10%] lg:left-0 h-full duration-[1000ms] transition-transform " +
              (idHero === 1 ? "opacity-100" : "opacity-0")
            }
          />
          <MyPict
            alt=""
            src="/images/hero_slides/hero_3.png"
            heightPtg=""
            className={
              "absolute top-0 -left-[50%] lg:left-0 h-full duration-[1000ms] transition-transform " +
              (idHero === 2 ? "opacity-100" : "opacity-0")
            }
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center w-full h-full jusitfy-center">
        <p
          className={
            "text-[#F3F3F1] text-[12vw]/[11vw] lg:text-[8vw]/[7vw] 2xl:text-[123px]/[108px] " +
            canvas_black.className
          }
        >
          {"BeanMasters"}
        </p>
        <p
          className={
            "text-[#C9C7A7] text-[9vw]/[8vw] lg:text-[6vw]/[5vw] 2xl:text-[92px]/[77px] " +
            canvas_black.className
          }
        >
          {"Coffee Roastery"}
        </p>
        <p
          className={
            "text-[#F3F3F1] lg:mt-[3vh] mt-[2vh] text-[6vw]/[3vw] lg:text-[2vw]/[1vw] 2xl:text-[31px]/[15px] " +
            raleway.className
          }
        >
          {"See More"}
        </p>
        <IoIosArrowDown
          className="text-[#F3F3F1] text-[8vw] lg:text-[4vw]/[3vw] 2xl:text-[61px]/[46px] hover:cursor-pointer "
          onClick={() => {
            handleClick();
          }}
        />
      </div>
    </div>
  );
}
