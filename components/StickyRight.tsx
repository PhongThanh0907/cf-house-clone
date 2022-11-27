import React from "react";
import Phone from "../public/assets/phone.png";
import Message from "../public/assets/logomessage.png";
import Zalo from "../public/assets/zalo.png";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const StickyRight = () => {
  const listIcon = [Phone, Message, Zalo];
  return (
    <div>
      <div className="space-y-10">
        {listIcon.map((item, index) => (
          <div key={index}>
            <div className="relative p-3 bg-gray-200 rounded-full img-rotate">
              <Image
                className="h-[40px] w-[40px] img-rotate"
                src={item}
                alt="logoimg"
              />
              <div className="ring-circle" />
              <div className="ring-background" />
            </div>
          </div>
        ))}
      </div>
      <div className="my-6 w-10 h-10 m-auto rounded-full bg-black/80 text-white flex items-center justify-center cursor-pointer">
        <ArrowUpIcon className="h-6" />
      </div>
    </div>
  );
};

export default StickyRight;
