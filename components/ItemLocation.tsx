import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { Store } from "../types/store";
import Slider from "./Slider";

interface Props {
  store: Store;
}

const ItemLocation = ({ store }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const listItem = [
    { icon: <CodeBracketIcon className="h-5 w-5" />, text: "Có chỗ đỗ xe hơi" },
    {
      icon: <BuildingStorefrontIcon className="h-5 w-5" />,
      text: "Phục vụ tại chỗ",
    },
    { icon: <ShoppingCartIcon className="h-5 w-5" />, text: "Mua mang đi" },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <div>
      {loading ? (
        <div className="h-[450px] w-[450px] loading duration-300"></div>
      ) : (
        <div className="duration-300">
          <div className="box-zoom-transfer h-[250px]">
            <Slider listImage={store?.imageStore} height={"250px"} />
          </div>
          <div>
            <h2 className="text-lg my-2 font-semibold">{store?.nameStore}</h2>
            <Link href={`${store?.link}`}>
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
            <h4 className="text-md my-2">{store?.address}</h4>
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
      )}
    </div>
  );
};

export default ItemLocation;
