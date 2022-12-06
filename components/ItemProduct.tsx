/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { Product } from "../types/product";
interface Props {
  itemProduct: Product;
}

const ItemProduct = ({ itemProduct }: Props) => {
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
      <div className="box-zoom-transfer rounded-lg">
        <img
          className="rounded-xl shadow-md shadow-slate-400 hover:scale-125 transition-all duration-500 hover:rotate-6"
          src={itemProduct?.imageProduct}
          alt="img"
        />
      </div>

      <h1 className="font-semibold hover:text-hover cursor-pointer my-1 lg:my-2">
        {itemProduct?.nameProduct}
      </h1>
      <p className="text-gray-500">
        {itemProduct?.price.toLocaleString("vn-VN")} đ
      </p>
    </div>
  );
};

export default ItemProduct;
