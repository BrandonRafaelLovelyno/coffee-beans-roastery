import React from "react";
import MotionDivUp from "../motion-div/motion-div-up";
import Image from "next/image";
import CoffeeImage from "./coffee-image";
import { twMerge } from "tailwind-merge";

interface CoffeeThumbnailProps {
  cupImageUrl: string;
  packImageUrl: string;
  onClick: () => void;
  isActive: boolean;
}

const CoffeeThumbnail: React.FC<CoffeeThumbnailProps> = ({
  cupImageUrl,
  packImageUrl,
  onClick,
  isActive,
}) => {
  return (
    <div
      key={cupImageUrl}
      className={twMerge("w-full h-full px-3 cursor-pointer")}
      onClick={onClick}
    >
      <CoffeeImage cupImageUrl={cupImageUrl} packImageUrl={packImageUrl} />
      <div></div>
    </div>
  );
};

export default CoffeeThumbnail;
