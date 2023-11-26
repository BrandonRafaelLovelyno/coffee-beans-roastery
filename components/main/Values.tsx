import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import MyPict from "@/components/MyPict";

const canvas_black = localFont({
  src: "../../public/fonts/canvas_black.otf",
});
const raleway = Raleway({ subsets: ["latin"] });

const Values = () => {
  return (
    <div className="px-[2vw] relative flex flex-col items-center justify-center w-full min-h-[200vh] overflow-clip bg-[#141117]">
      <div className="w-full 2xl:w-[1536px] h-screen flex flex-col items-center justify-center py-[5vh]">
        <p
          className={
            "text-[4vw]/[4vw] 2xl:text-[61px]/[61px] " + raleway.className
          }
        >
          That's why we support
        </p>
        <p
          className={
            "text-[4vw]/[4vw] 2xl:text-[61px]/[61px] " + canvas_black.className
          }
        >
          No Straw!
        </p>
        <div className="w-full h-full 2xl:h-[600px] flex items-center justify-center">
          <div
            className={
              "w-[40%] text-[3.5vw]/[3.5vw] 2xl:text-[54px]/[54px] " +
              raleway.className
            }
          >
            <p>Why don't just</p>
            <p>Slurp it directly?</p>
          </div>
          <div className="w-[60%] 2xl:w-[768px]">
            <MyPict
              alt=""
              src="/images/decoration/cups.png"
              className=""
              heightPtg=""
            />
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w-[1536px] h-screen flex flex-col items-center justify-center py-[5vh]">
        <p
          className={
            "text-[4vw]/[4vw] 2xl:text-[61px]/[61px] " + raleway.className
          }
        >
          And of course with an
        </p>
        <p
          className={
            "text-[4vw]/[4vw] 2xl:text-[61px]/[61px] " + canvas_black.className
          }
        >
          Eco-Friendly Packaging!
        </p>
        <div className="w-full h-full 2xl:h-[600px] flex items-center justify-center">
          <div className="w-[60%] 2xl:w-[768px]">
            <MyPict
              alt=""
              src="/images/decoration/sachets.png"
              className=""
              heightPtg=""
            />
          </div>
          <div
            className={
              "w-[40%] text-[3.5vw]/[3.5vw] 2xl:text-[54px]/[54px] flex flex-col items-end text-end" +
              raleway.className
            }
          >
            <p>Bringing the taste</p>
            <p>worry no waste!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
