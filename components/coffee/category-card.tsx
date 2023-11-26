import { Category, CategoryString, SubCategory } from "@/lib/types/coffee";
import React from "react";
import MotionDivUp from "../motion-div/motion-div-up";
import Image from "next/image";

interface CategoryCardProps {
  className?: string;
  categoryString: CategoryString;
  subCategory: SubCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  className,
  categoryString,
  subCategory,
}) => {
  return (
    <MotionDivUp
      delay={0.2}
      duration={0.2}
      className="flex flex-col justify-center w-full h-full p-3 bg-gray-900 gap-y-2 rounded-2xl"
    >
      <div className="h-[45%] w-full relative">
        <Image
          src={`/images/coffee/${categoryString}/${subCategory}.png`}
          fill
          alt={`${categoryString} img`}
          objectFit={"contain"}
        />
      </div>
      <div className="flex flex-col flex-1">
        <p className="font-bold tracking-widest text-center">
          {categoryString}
        </p>
        <p className="text-xs tracking-widest text-center text-gray-400">
          {subCategory}
        </p>
      </div>
    </MotionDivUp>
  );
};

export default CategoryCard;
