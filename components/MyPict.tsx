"use client";

import Image from "next/image";

interface MyPictProps {
  src: string;
  alt: string;
  action?: () => void;
  className: string;
  heightPtg: string;
}

const MyPict: React.FC<MyPictProps> = ({
  src = "",
  alt = "",
  action,
  className = "",
  heightPtg = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      onClick={action ? () => action() : () => {}}
      className={className + (action ? " hover:cursor-pointer" : "")}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: heightPtg }}
      draggable="false"
    />
  );
};

export default MyPict;
