/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import CheckoutWizard from "../../components/CheckoutWizard";
import Layout from "../../components/Layout";
import { baseURL } from "../../service/axiosClient";
import { Product } from "../../types/product";

const listSize = [
  { size: "Nhỏ", price: 0, status: 1 },
  { size: "Vừa", price: 6000, status: 2 },
  { size: "Lớn", price: 10000, status: 3 },
];
type Topping = {
  name: string;
  price: number;
  status: number;
};
const listTopping: Topping[] = [
  { name: "Kem Phô Mai Macchiato", price: 10000, status: 1 },
  { name: "Shot Espresso", price: 10000, status: 2 },
  { name: "Trân châu trắng", price: 10000, status: 3 },
  { name: "Sốt Caramel", price: 10000, status: 4 },
  { name: "Thạch Cà Phê", price: 10000, status: 5 },
];

type Data = Product;

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  const id = context.query.idProduct;
  const res = await fetch(`${baseURL}/products/${id}`);
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const DetailPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [pickSize, setPickSize] = useState<number>(0);
  const [priceSize, setPriceSize] = useState<number>(0);
  const [priceTopping, setPriceTopping] = useState<number>(10000);
  // const [listPickTopping, setListPickTopping] = useState<
  //   Pick<Topping, "status">[]
  // >([]);
  const [listPickTopping, setListPickTopping] = useState<Topping[]>([]);

  const toggleSize = (price: number, status: number) => {
    setPickSize(status);
    setPriceSize(price);
  };

  const toggleTopping = (param: Topping) => {
    if (!listPickTopping.some((item) => item.status == param.status)) {
      setListPickTopping([...listPickTopping, param]);
    } else
      setListPickTopping(
        listPickTopping.filter((item) => item.status !== param.status)
      );
  };

  const totalPrice = data?.price + priceSize + priceTopping;

  useEffect(() => {
    if (listPickTopping.length < 1) {
      setPriceTopping(0);
    } else {
      setPriceTopping(
        listPickTopping.map((i) => i.price).reduce((total, cv) => total + cv)
      );
    }
  }, [listPickTopping]);

  return (
    <Layout title="Sản phẩm">
      <CheckoutWizard
        activeStep={2}
        coffeeTea={`${data?.typeProduct}`}
        nameProduct={`${data?.nameProduct}`}
      />
      <div className="max-w-7xl mx-auto px-16 grid grid-cols-2 gap-10">
        <div>
          <img
            className="w-full h-[500px]"
            src={data?.imageProduct}
            alt="img"
          />
          <img
            className="w-24 h-24 my-4 rounded-xl border border-mainColor"
            src={data?.imageProduct}
            alt="img"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{data?.nameProduct}</h1>
          <p className="text-2xl text-mainColor font-semibold my-2">
            {totalPrice.toLocaleString("vn-VN")}đ
          </p>
          {data?.typeProduct === "cfathome" ||
          data?.typeProduct === "tathome" ? (
            <></>
          ) : (
            <>
              <div>
                <p className="my-2">Chọn size (bắt buộc)</p>
                <div className="space-x-4">
                  {listSize.map((item, index) => (
                    <button
                      onClick={() => toggleSize(item.price, item.status)}
                      className={`px-6 py-2  border border-gray-300 rounded-lg ${
                        pickSize === item.status
                          ? "bg-mainColor duration-300 opacity-100 text-white"
                          : "bg-white duration-300 text-gray-500"
                      }`}
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
                      onClick={() => {
                        toggleTopping(item);
                      }}
                      className={`px-6 py-2 border border-gray-300 rounded-lg mr-4 my-2 ${
                        listPickTopping.some(
                          (itemTopping) => itemTopping.status === item.status
                        )
                          ? "bg-mainColor opacity-100 duration-300 text-white"
                          : "bg-white duration-300 text-gray-500"
                      }`}
                      key={index}
                    >
                      {item.name} + {item.price.toLocaleString("vn-VN")} đ
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <button className="w-full bg-mainColor text-white font-semibold rounded-xl py-3 my-4 hover:bg-[#ff8e14] active:bg-[#ea7900] duration-300">
            Đặt giao tận nơi
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-16 py-8 border-t border-b border-gray-200 my-4">
        <h4 className="text-lg font-semibold">Mô tả sản phẩm</h4>
        <p>{data?.description}</p>
      </div>
    </Layout>
  );
};

export default DetailPage;
