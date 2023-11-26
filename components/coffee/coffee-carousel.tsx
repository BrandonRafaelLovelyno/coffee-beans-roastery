"use client";

import { Coffee } from "@prisma/client";
import React, { useMemo } from "react";
import { Category, SubCategory, SubCategoryMap } from "@/lib/types/coffee";
import CoffeeSlide from "./coffee-slide";
import MotionDivUp from "../motion-div/motion-div-up";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

interface CoffeeCarouselProps {
  category: Category;
  coffee: Coffee[];
}

const CoffeeCarousel: React.FC<CoffeeCarouselProps> = ({
  category,
  coffee,
}) => {
  const swiper = useSwiper();
  const coffeesPerSub = useMemo(
    () => ({
      Africa: [] as Coffee[],
      "South America": [] as Coffee[],
      "Central America": [] as Coffee[],
      Asia: [] as Coffee[],
      "North America": [] as Coffee[],
      Light: [] as Coffee[],
      Medium: [] as Coffee[],
      Dark: [] as Coffee[],
      Arabica: [] as Coffee[],
      Robusta: [] as Coffee[],
      Washed: [] as Coffee[],
      Natural: [] as Coffee[],
      Honey: [] as Coffee[],
      Fruity: [] as Coffee[],
      Nutty: [] as Coffee[],
      Spicy: [] as Coffee[],
      Chocolatey: [] as Coffee[],
    }),
    [category]
  );
  const subCategories: SubCategory[] = SubCategoryMap.get(category)!;

  subCategories.map((sub) => {
    const coffees: Coffee[] = coffee.filter((c) => {
      if (
        c.roastLevel == sub ||
        c.beanType == sub ||
        c.flavor == sub ||
        c.method == sub ||
        c.origin == sub
      ) {
        return true;
      }
    });
    coffeesPerSub[sub] = coffees;
  });

  return (
    <MotionDivUp
      delay={0}
      duration={0.6}
      key={category}
      className="w-full h-full mt-20"
    >
      <Swiper spaceBetween={50} slidesPerView={1} direction="horizontal">
        {subCategories.map((sc) => {
          if (coffeesPerSub[sc].length == 0) {
            return;
          }
          return (
            <SwiperSlide>
              <CoffeeSlide
                coffee={coffeesPerSub[sc]}
                subCategory={sc}
                key={sc}
              />
            </SwiperSlide>
          );
        })}
        <button onClick={() => swiper.slideNext()}>hai</button>
      </Swiper>
    </MotionDivUp>
  );
};

export default CoffeeCarousel;
