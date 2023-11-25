import React from "react";
import { twMerge } from "tailwind-merge";
import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

const CoffeeItem = () => {
  return (
    <div className="flex w-full min-h-[50px] h-fit flex-row px-20 mt-10">
      <div className="w-[75%] flex flex-col px-5">
        <h2
          className={twMerge(
            caveat.className,
            "tracking-wide text-amber-500 font-bold text-5xl"
          )}
        >
          Arabica
        </h2>
        <h3 className="mt-5 text-xl font-bold tracking-wide">
          Ehtiopian Yirgacheffe
        </h3>
        <p className="mt-3 text-sm text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="flex-1">gambar</div>
    </div>
  );
};

export default CoffeeItem;
