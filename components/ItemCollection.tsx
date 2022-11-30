import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  price: number;
  img: HTMLImageElement;
}

const ItemCollection = ({ img, name, price }: Props) => {
  return (
    <div>
      <div className="box-zoom-transfer">
        {" "}
        <Image
          className="hover:scale-125 transition-all duration-500 hover:rotate-6 rounded-xl hover:rounded-xl"
          src={img}
          alt="img"
        />
      </div>

      <h1 className="font-semibold hover:text-hover my-2">{name}</h1>
      <p className="text-gray-500">{price.toLocaleString("vn-VN")} đ</p>
    </div>
  );
};

export default ItemCollection;
