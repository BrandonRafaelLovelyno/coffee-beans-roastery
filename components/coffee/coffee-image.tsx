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
    <MotionDivUp
      className="flex items-center justify-center w-full h-full"
      delay={0.1}
      duration={0.3}
    >
      <Image
        alt="cup-image"
        className="relative z-10"
        src={cupImageUrl}
        height={100}
        width={100}
      />
      <Image
        alt="pack-image"
        src={packImageUrl}
        height={100}
        width={100}
        className="absolute -right-3 bottom-3"
      />
    </MotionDivUp>
  );
};

export default CoffeeImage;
