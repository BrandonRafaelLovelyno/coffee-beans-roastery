import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import MyPict from "@/components/MyPict";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const canvas_black = localFont({
  src: "../../public/fonts/canvas_black.otf",
});
const raleway = Raleway({ subsets: ["latin"] });

const Story = () => {
  const imgs = [
    "/images/story_slides/story_1.png",
    "/images/story_slides/story_2.png",
    "/images/story_slides/story_3.png",
    "/images/story_slides/story_4.png",
    "/images/story_slides/story_5.png",
    "/images/story_slides/story_6.png",
    "/images/story_slides/story_7.png",
  ];

  return (
    <div className="relative flex items-center justify-center w-full min-h-[30vh] lg:min-h-screen overflow-clip bg-[#141117]">
      <MyPict
        alt=""
        src="/images/decoration/scattered_coffees.png"
        heightPtg=""
        className={
          "absolute top-0 left-0 scale-y-[-1] opacity-[15%] scale-[1.5] origin-top"
        }
      />

      <div className="w-full 2xl:w-[1536px] h-full flex flex-col items-center justify-center gap-[3vh] 2xl:gap-[40px]">
        <div>
          <p
            className={
              "text-[6vw]/[5vw] lg:text-[4vw]/[3vw] 2xl:text-[61px]/[46px] " +
              raleway.className
            }
          >
            {"What is our "}
            <span className={"" + canvas_black.className}>{"motivation?"}</span>
          </p>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1.15}
          centeredSlides={true}
          className="w-full h-full"
        >
          {imgs.map((sc, idx) => {
            return (
              <SwiperSlide>
                <MyPict alt="" src={imgs[idx]} heightPtg="" className="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Story;
