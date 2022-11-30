import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../public/assets/location1jpg.jpg";
import {
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const ItemLocation = (props: Props) => {
  const listImg = [img1, img1, img1];

  const listItem = [
    { icon: <CodeBracketIcon className="h-5 w-5" />, text: "Có chỗ đỗ xe hơi" },
    {
      icon: <BuildingStorefrontIcon className="h-5 w-5" />,
      text: "Phục vụ tại chỗ",
    },
    { icon: <ShoppingCartIcon className="h-5 w-5" />, text: "Mua mang đi" },
  ];

  return (
    <div>
      <div className="box-zoom-transfer">
        <Image
          className="hover:scale-125 transition-all duration-500 hover:rotate-6 rounded-xl hover:rounded-xl"
          src={img1}
          alt="img"
        />
      </div>
      <div>
        <h2 className="text-lg my-2 font-semibold">HCM Lữ Gia</h2>
        <Link href="https://goo.gl/maps/d5hoghn4Ai4EY8No6">
          <div className="relative h-[40px] group bg-[#FFF7E6] w-full text-[#B3DDCA] rounded-lg border border-[#FFF7E6]">
            <h4 className="absolute  flex justify-center items-center top-0 left-0 right-0 bottom-0 z-20 group-hover:text-mainColor font-semibold duration-300">
              Xem bản đồ
            </h4>
            <div className="absolute top-0 bottom-0 left-0 right-[100%] bg-white group-hover:right-0 duration-500 z-10" />
          </div>
        </Link>

        <div className="h-[3px] w-full my-4 bg-gray-200" />
      </div>
      <div>
        <h4 className="text-md my-2">
          64A Lữ Gia, Phường 15, Quận 11, Hồ Chí Minh
        </h4>
        <h4 className="text-md mb-2">07:30 - 22:00</h4>
      </div>
      <div className="grid grid-cols-2 gap-y-2">
        {listItem.map((item, index) => (
          <div className="flex items-center gap-2 text-md" key={index}>
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemLocation;
