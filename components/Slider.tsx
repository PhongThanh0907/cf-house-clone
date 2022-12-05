/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  listImage: string[];
  height?: string;
}

const Slider = ({ listImage, height }: Props) => {
  const slider = React.useRef<HTMLDivElement | null>(null);

  const slideLeft = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft - window.outerWidth;
  };

  const slideRight = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft + window.outerWidth;
  };

  return (
    <div>
      <ChevronLeftIcon
        onClick={slideLeft}
        className="absolute z-10 left-2 top-1/2 h-6 w-6 lg:h-8 lg:w-8 border-2 text-gray-200 border-gray-200 duration-200 rounded-full p-1 hover:border-mainColor hover:text-mainColor cursor-pointer"
      />
      <div
        className={`relative w-full ${
          height ? `h-[${height}]` : "h-full"
        } scroll-smooth flex overflow-x-hidden`}
        ref={slider}
      >
        {listImage?.map((item, index) => (
          <img
            className={`flex w-full object-cover `}
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

export default Slider;
