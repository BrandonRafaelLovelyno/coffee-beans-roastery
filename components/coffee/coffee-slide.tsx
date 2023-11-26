"use client";

import React, { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Caveat } from "next/font/google";
import { Coffee } from "@prisma/client";
import { CategoryString, SubCategory } from "@/lib/types/coffee";
import CoffeeImage from "./coffee-image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CategoryCard from "./category-card";
import CoffeeThumbnail from "./coffee-thumbnail";
import MotionDivUp from "../motion-div/motion-div-up";
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

interface CoffeeSlideProps {
  coffee: Coffee[];
  subCategory: SubCategory;
}

const categoryString: CategoryString[] = [
  "origin",
  "roastLevel",
  "method",
  "flavor",
  "beanType",
];

const CoffeeSlide: React.FC<CoffeeSlideProps> = ({ coffee, subCategory }) => {
  const [index, setIndex] = useState<number>(0);
  const finalIndex = index % coffee.length;
  const finalCoffee = coffee[finalIndex];
  if (coffee.length == 0) {
    return <div>no coffee</div>;
  }
  return (
    <div className="flex flex-row w-full h-full px-0 mt-4 md:px-10 lg:px-20">
      <div className="w-[65%] flex flex-col justify-between pl-5 h-full gap-y-5">
        <div className="min-h-fit h-[40%]  flex flex-col">
          <div className="flex-1">
            <h2
              className={twMerge(
                caveat.className,
                "tracking-wide text-amber-500 font-bold text-5xl"
              )}
            >
              {subCategory}
            </h2>
            <h3 className="mt-5 text-xl font-bold tracking-wide">
              {finalCoffee.name}
              <p>{index}</p>
            </h3>
          </div>
          <ScrollArea className="h-[50%] text-md">
            {finalCoffee.desc}
          </ScrollArea>
        </div>
        <MotionDivUp
          duration={0.3}
          delay={0.5}
          className="h-[25%] w-full  flex flex-row gap-x-4 mb-4"
        >
          {categoryString.map((cat) => (
            <div className="flex-1">
              <CategoryCard
                categoryString={cat}
                subCategory={finalCoffee[cat] as SubCategory}
              />
            </div>
          ))}
        </MotionDivUp>
        <ScrollArea className="h-[20%] w-full bg-gray-900 rounded-xl ">
          <MotionDivUp
            duration={0.3}
            delay={0.5}
            className="flex flex-row items-center h-full w-fit gap-x-4"
          >
            {coffee.map((c) => (
              <div className="w-[60px] h-full">
                <CoffeeThumbnail
                  isActive={coffee.indexOf(c) == index}
                  onClick={() => {
                    setIndex(coffee.indexOf(c));
                  }}
                  cupImageUrl={c.cupImageUrl}
                  packImageUrl={c.packImageUrl}
                />
              </div>
            ))}
          </MotionDivUp>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="items-start flex-1 h-full">
        <div className="flex flex-col h-full">
          <div className="flex-1 ">
            <CoffeeImage
              cupImageUrl={finalCoffee.cupImageUrl}
              packImageUrl={finalCoffee.packImageUrl}
              key={finalCoffee.id}
            />
          </div>
          <div className="h-[30%] w-[10px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSlide;
