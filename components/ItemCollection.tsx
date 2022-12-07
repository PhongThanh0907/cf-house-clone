/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Product } from "../types/product";

interface Props {
  itemProduct: Product;
}

const ItemCollection = ({ itemProduct }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  const nextDetailPage = () => {
    router.push({
      pathname: `/detail`,
      query: {
        idProduct: itemProduct._id,
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading h-[350px] w-[300px] duration-300"></div>
      ) : (
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
      )}
    </>
  );
};

export default ItemCollection;
