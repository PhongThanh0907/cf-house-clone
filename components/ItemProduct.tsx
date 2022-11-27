import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  img?: any;
  name: string;
  price: number;
  link: string;
}

const ItemProduct = ({ img, name, price, link }: Props) => {
  return (
    <Link href={link}>
      <Image
        className="rounded-xl shadow-md shadow-slate-400"
        src={img}
        alt="img"
      />
      <h1 className="font-semibold hover:text-hover cursor-pointer my-1 lg:my-2">
        {name}
      </h1>
      <p className="text-gray-500">{price.toLocaleString("vn-VN")} đ</p>
    </Link>
  );
};

export default ItemProduct;
