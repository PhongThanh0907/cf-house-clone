import Image from "next/image";
import React from "react";
import Banner01 from "../public/assets/banner-1.webp";
import Banner02 from "../public/assets/banner-2.webp";
import Banner03 from "../public/assets/banner-3.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Banner = () => {
  const slider = React.useRef<HTMLDivElement | null>(null);

  const slideLeft = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft - window.outerWidth;
  };

  const slideRight = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft + window.outerWidth;
  };

  const listBanner = [Banner01, Banner02, Banner03];
  return (
    <div className="relative">
      <ChevronLeftIcon
        onClick={slideLeft}
        className="absolute z-10 left-2 top-1/2 h-6 w-6 lg:h-8 lg:w-8 border-2 text-gray-500 border-gray-500 duration-200 rounded-full p-1 hover:border-mainColor hover:text-mainColor cursor-pointer"
      />
      <div
        className="relative w-full scroll-smooth flex overflow-x-hidden"
        ref={slider}
      >
        {listBanner.map((item, index) => (
          <Image
            className="flex h-[180px] lg:h-auto object-cover"
            key={index}
            src={item}
            alt="Banner"
          />
        ))}
      </div>
      <ChevronRightIcon
        onClick={slideRight}
        className="w-6 z-10 h-6 lg:h-8 lg:w-8 right-2 top-1/2 absolute border-2 text-gray-500 border-gray-500 duration-200 rounded-full p-1 hover:border-mainColor hover:text-mainColor cursor-pointer"
      />
    </div>
  );
};

export default Banner;
