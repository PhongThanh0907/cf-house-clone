/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { Product } from "../types/product";

interface Props {
  itemProduct: Product;
}

const ItemCollection = ({ itemProduct }: Props) => {
  const router = useRouter();

  const nextDetailPage = () => {
    router.push({
      pathname: `/detail`,
      query: {
        idProduct: itemProduct._id,
      },
    });
  };

  return (
    <div onClick={() => nextDetailPage()}>
      <div className="box-zoom-transfer">
        <img
          className="hover:scale-125 transition-all duration-500 hover:rotate-6 rounded-xl hover:rounded-xl"
          src={itemProduct?.imageProduct}
          alt="img"
        />
      </div>

      <h1 className="font-semibold hover:text-hover my-2">
        {itemProduct?.nameProduct}
      </h1>
      <p className="text-gray-500">
        {itemProduct?.price?.toLocaleString("vn-VN")} đ
      </p>
    </div>
  );
};

export default ItemCollection;
