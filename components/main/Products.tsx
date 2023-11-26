"use client";

import { useRouter } from "next/navigation";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import MyPict from "@/components/MyPict";
import { Button } from "@/components/ui/button";

const canvas_black = localFont({
  src: "../../public/fonts/canvas_black.otf",
});
const raleway = Raleway({ subsets: ["latin"] });

const Products = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[40vh] lg:h-screen overflow-clip">
      <div className="absolute w-full h-full z-[-100] bg-[#141117]" />

      <div className="flex flex-col h-[35%] items-center justify-center text-center max-lg:pt-[10vh]">
        <p
          className={
            "text-[6vw]/[5vw] lg:text-[4vw]/[4vw] 2xl:text-[61px]/[61px] " +
            raleway.className
          }
        >
          {"Let's check"}
        </p>
        <p
          className={
            "text-[6vw]/[5vw] lg:text-[4vw]/[4vw] 2xl:text-[61px]/[61px] " +
            canvas_black.className
          }
        >
          {"Our products below!"}
        </p>
        <Button
          className="mt-8"
          onClick={() => {
            router.push("/coffee");
          }}
        >
          {"See More"}
        </Button>
      </div>
      <div className="relative flex items-end w-[75%] lg:w-[55%] 2xl:w-[844px] h-[65%]">
        <MyPict
          alt=""
          src="/images/decoration/products.png"
          className=""
          heightPtg=""
        />
      </div>

      <MyPict
        alt=""
        src="/images/decoration/scattered_coffees.png"
        className="absolute bottom-0 z-[-50] scale-[1.5] origin-bottom"
        heightPtg=""
      />
    </div>
  );
};

export default Products;
