import Image from "next/image";
import React from "react";
import Img1 from "../public/assets/item-1.webp";
import Img2 from "../public/assets/item-2.webp";
import Img3 from "../public/assets/item-3.webp";
import Img4 from "../public/assets/item-4.webp";
import Img5 from "../public/assets/item-5.webp";
import ItemProduct from "./ItemProduct";

const Product = () => {
  const listProduct = [
    {
      Image: Img3,
      nameProduct: "Hi-Tea Vải",
      price: 49000,
      link: "/",
    },
    {
      Image: Img2,
      nameProduct: "Cà Phê Sữa Đá",
      price: 29000,
      link: "/",
    },
    {
      Image: Img4,
      nameProduct: "Bánh Mì VN Thịt Nguội",
      price: 35000,
      link: "/",
    },
    {
      Image: Img5,
      nameProduct: "Mochi Kem Chocolate",
      price: 1900,
      link: "/",
    },
  ];
  return (
    <div>
      <div>
        <div className="max-w-7xl mx-auto p-4 lg:py-16">
          <div className="lg:gap-7 gap-4 grid grid-cols-2 lg:grid-cols-4 grid-rows-1 my-6 lg:my-10">
            <Image
              className="mb-4 lg:mb-0 col-span-2 rounded-xl shadow-md shadow-slate-400 "
              src={Img1}
              alt="Img"
            />
            <div className="col-span-1">
              <Image
                className="rounded-xl shadow-md shadow-slate-400 "
                src={Img2}
                alt="Img"
              />
              <h2 className="font-semibold hover:text-hover cursor-pointer my-1 lg:my-2">
                CloudFee Hạnh Nhân Nướng
              </h2>
              <p className="text-gray-500">49.000 đ</p>
            </div>
            <div className="col-span-1  ">
              <Image
                className="rounded-xl shadow-md shadow-slate-400 "
                src={Img2}
                alt="Img"
              />
              <h2 className="font-semibold hover:text-hover cursor-pointer my-1 lg:my-2">
                The Coffee House Sữa Đá
              </h2>
              <p className="text-gray-500">39.000 đ</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:flex gap-4 lg:gap-7">
            {listProduct.map((item, index) => (
              <div key={index}>
                <ItemProduct
                  img={item.Image}
                  name={item.nameProduct}
                  price={item.price}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
