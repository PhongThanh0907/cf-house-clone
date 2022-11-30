import Image from "next/image";
import { it } from "node:test";
import React from "react";
import CheckoutWizard from "../../components/CheckoutWizard";
import Layout from "../../components/Layout";
import img1 from "../../public/assets/collection1.webp";

type Props = {};

const index = (props: Props) => {
  const listSize = [
    { size: "Nhỏ", price: 0 },
    { size: "Vừa", price: 6000 },
    { size: "Lớn", price: 10000 },
  ];
  const listTopping = [
    { name: "Kem Phô Mai Macchiato", price: 10000 },
    { name: "Shot Espresso", price: 10000 },
    { name: "Trân châu trắng", price: 10000 },
    { name: "Sốt Caramel", price: 10000 },
    { name: "Thạch Cà Phê", price: 10000 },
  ];
  return (
    <Layout title="Sản phẩm">
      <CheckoutWizard
        activeStep={2}
        coffeeTea="Thưởng Thức Tại Nhà"
        nameProduct="Thùng 24 lon Cà Phê Sữa"
      />
      <div className="max-w-7xl mx-auto px-16 grid grid-cols-2 gap-10">
        <div>
          <Image className="w-full h-[500px]" src={img1} alt="img" />
          <Image
            className="w-24 h-24 my-4 rounded-xl border border-mainColor"
            src={img1}
            alt="img"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Thùng Cà Phê Sữa Espresso</h1>
          <p className="text-2xl text-mainColor font-semibold my-2">39.000 đ</p>
          <div>
            <p className="my-2">Chọn size (bắt buộc)</p>
            <div className="space-x-4">
              {listSize.map((item, index) => (
                <button
                  className="px-6 py-2 text-gray-500 border border-gray-300 rounded-lg"
                  key={index}
                >
                  {item.size} + {item.price.toLocaleString("vn-VN")} đ
                </button>
              ))}
            </div>
            <p className="my-2">Topping</p>
            <div className="">
              {listTopping.map((item, index) => (
                <button
                  className="px-6 py-2 text-gray-500 border border-gray-300 rounded-lg mr-4 my-2"
                  key={index}
                >
                  {item.name} + {item.price.toLocaleString("vn-VN")} đ
                </button>
              ))}
            </div>
          </div>
          <button className="w-full bg-mainColor text-white font-semibold rounded-xl py-3 my-4">
            Đặt giao tận nơi
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-16 py-8 border-t border-b border-gray-200 my-4">
        <h4 className="text-lg font-semibold">Mô tả sản phẩm</h4>
        <p>
          Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi.
          Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang
          hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100% cà phê Arabica
          Cầu Đất rang vừa tới, biến tấu tinh tế với sữa đặc và kem sữa ngọt
          ngào cực quyến rũ. Càng hấp dẫn hơn với topping thạch 100% cà phê
          nguyên chất giúp giữ trọn vị ngon đến ngụm cuối cùng.
        </p>
      </div>
    </Layout>
  );
};

export default index;
