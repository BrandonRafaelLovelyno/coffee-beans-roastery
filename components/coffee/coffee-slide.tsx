"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Caveat } from "next/font/google";
import { Coffee } from "@prisma/client";
import { CategoryString, SubCategory } from "@/lib/types/coffee";
import CoffeeImage from "./coffee-image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CategoryCard from "./category-card";
import CoffeeThumbnail from "./coffee-thumbnail";
import MotionDivUp from "../motion-div/motion-div-up";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import useModal from "@/hooks/useModal";

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
  const modal = useModal();
  const [index, setIndex] = useState<number>(0);
  const finalIndex = index % coffee.length;
  const finalCoffee = coffee[finalIndex];
  if (coffee.length == 0) {
    return <div>no coffee</div>;
  }
  return (
    <div className="flex flex-row w-full h-full px-0 md:px-10 lg:px-20">
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
            </h3>
          </div>
          <ScrollArea className="h-[50%] text-md">
            {finalCoffee.desc}
          </ScrollArea>
        </div>
        <MotionDivUp
          duration={0.3}
          delay={0.5}
          className="h-[25%] w-full flex flex-row gap-x-4 mb-4"
        >
          {categoryString.map((cat) => (
            <div className="flex-1 h-full">
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
      <div className="items-start w-full pl-8">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <CoffeeImage
              size={120}
              cupImageUrl={finalCoffee.cupImageUrl}
              packImageUrl={finalCoffee.packImageUrl}
              key={finalCoffee.id}
            />
          </div>
          <div className="h-[30%] w-full flex flex-col items-center justify-end ">
            <p className="w-full text-left text-yellow-500">
              Stock : {finalCoffee.stock}
            </p>
            <div className="flex flex-row justify-center w-full gap-x-3">
              <div className="justify-start flex-1">
                <span className="text-4xl">{`$${finalCoffee.price}`}</span>
              </div>
              <div className="flex justify-center flex-1 gap-x-5">
                <button
                  onClick={() => {
                    modal.onOpen("buy", { coffee: finalCoffee });
                  }}
                >
                  <FaCartPlus size={40} />
                </button>
                <button>
                  <FaRegHeart size={40} />
                </button>
                <button>
                  <BiCommentDetail size={40} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSlide;
