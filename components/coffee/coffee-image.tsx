import React from "react";
import MotionDivUp from "../motion-div/motion-div-up";
import Image from "next/image";

interface CoffeeImageProps {
  cupImageUrl: string;
  packImageUrl: string;
  size: number;
}

const CoffeeImage: React.FC<CoffeeImageProps> = ({
  cupImageUrl,
  packImageUrl,
  size,
}) => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="relative w-fit h-fit">
        <Image
          alt="cup-image"
          className="relative -left-[30%] z-10"
          src={cupImageUrl}
          height={size}
          width={size}
        />
        <Image
          alt="pack-image"
          src={packImageUrl}
          height={size}
          width={size}
          className="absolute -right-[30%] bottom-3"
        />
      </div>
    </div>
  );
};

export default CoffeeImage;
