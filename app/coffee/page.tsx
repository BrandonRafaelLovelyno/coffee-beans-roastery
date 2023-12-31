"use client";

import { Roboto_Mono } from "next/font/google";
import MotionDivUp from "@/components/motion-div/motion-div-up";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import CoffeeCarousel from "@/components/coffee/coffee-carousel";
import useCoffee from "@/hooks/useCoffee";
import { Category } from "@/lib/types/coffee";
import "swiper/css";
import { CoffeesRes } from "@/lib/types/api-response";
import ProgressLoader from "@/components/loader/progress-loader";
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const category: Category[] = [
  "ORIGIN",
  "ROAST LEVEL",
  "BEAN TYPE",
  "METHOD",
  "FLAVOR",
];

const CoffeePage = () => {
  const [cat, setCat] = useState<Category>("ORIGIN");
  const { data: coffeeRes, isLoading, mutate } = useCoffee();
  if (isLoading || !coffeeRes || !coffeeRes.data) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <ProgressLoader />
      </div>
    );
  }
  return (
    <MotionDivUp duration={0.2} delay={0.2} key={"coffe-page"}>
      <main className="flex flex-col items-center w-full h-screen pt-24 pb-5">
        <div
          className={twMerge(
            "flex flex-row w-full gap-x-8 tracking-widest justify-center mt-8 hover:cursor-pointer",
            robotoMono.className
          )}
        >
          {category.map((c) => (
            <div
              onClick={() => setCat(c)}
              className={twMerge(
                cat == c && "text-yellow-500",
                "font-bold hover:text-yellow-800 duration-300 text-md"
              )}
            >
              {c}
            </div>
          ))}
        </div>
        <CoffeeCarousel
          category={cat}
          coffee={(coffeeRes as CoffeesRes).data}
        />
      </main>
    </MotionDivUp>
  );
};

export default CoffeePage;
