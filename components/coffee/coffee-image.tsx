import React from "react";
import MotionDivUp from "../motion-div/motion-div-up";
import Image from "next/image";

interface CoffeeImageProps {
  cupImageUrl: string;
  packImageUrl: string;
}

const CoffeeImage: React.FC<CoffeeImageProps> = ({
  cupImageUrl,
  packImageUrl,
}) => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="relative w-fit h-fit">
        <Image
          alt="cup-image"
          className="relative -left-[30%] z-10"
          src={cupImageUrl}
          height={150}
          width={150}
        />
        <Image
          alt="pack-image"
          src={packImageUrl}
          height={150}
          width={150}
          className="absolute -right-[30%] bottom-3"
        />
      </div>
    </div>
  );
};

export default CoffeeImage;
