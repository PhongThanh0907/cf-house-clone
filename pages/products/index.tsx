import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ItemProduct from "../../components/ItemProduct";
import Img1 from "../../public/assets/item-1.webp";
import Img2 from "../../public/assets/item-2.webp";
import Img3 from "../../public/assets/item-3.webp";
import Img4 from "../../public/assets/item-4.webp";
import Img5 from "../../public/assets/item-5.webp";

type Props = {};

const ProductPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(activeMenu);
  const menuItem = [
    {
      id: "01",
      path: "/products01",
      name: "Tất Cả",
    },
    {
      id: "02",
      path: "/products02",
      name: "Cà Phê",
      listProduct01: true,
      listProduct: [
        {
          pathProduct: "/ca-phe-viet-nam",
          name: "Cà Phê Việt Nam",
        },
        {
          pathProduct: "/ca-phe-may",
          name: "Cà Phê Máy",
        },
        {
          pathProduct: "/cold-brew",
          name: "Cold Brew",
        },
      ],
    },
    {
      id: "03",
      path: "/products03",
      name: "CloudFee",
    },
    {
      id: "04",
      path: "/products04",
      name: "CloudTea",
    },
    {
      id: "05",
      path: "/products",
      name: "Trà",
      listProduct01: true,
      listProduct: [
        {
          pathProduct: "/tra-trai-cay",
          name: "Trà Trái Cây",
        },
        {
          pathProduct: "/trà-sữa-macchiato",
          name: "Trà Sữa Macchiatio",
        },
      ],
    },
    {
      id: "06",
      path: "/products",
      name: "Hi-Tea Healthy",
      listProduct01: true,
      listProduct: [
        {
          pathProduct: "/hi-tea-tra",
          name: "Hi-Tea Trà",
        },
        {
          pathProduct: "/hi-tea-da-tuyet",
          name: "Hi-Tea Đá Tuyết",
        },
      ],
    },
    {
      id: "07",
      path: "/products",
      name: "Bánh & Snack",
      listProduct01: true,
      listProduct: [
        {
          pathProduct: "/banh-man",
          name: "Bánh mặn",
        },
        {
          pathProduct: "/banh-ngot",
          name: "Bánh ngọt",
        },
        {
          pathProduct: "/snack",
          name: "Snack",
        },
      ],
    },
    {
      id: "08",
      path: "/products",
      name: "Tại nhà",
      listProduct: [],
    },
    {
      id: "09",
      path: "/products",
      name: "Thức uống khác",
      listProduct: [],
    },
  ];

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
    <Layout title="Tất cả sản phẩm">
      <div className="max-w-7xl lg:py-10 mx-auto flex flex-col lg:flex-row">
        <div className="hidden lg:flex w-[300px] justify-center border-r-4 border-gray-200">
          <div className="space-y-3">
            {menuItem.map((item, index) => (
              <div className="relative" key={index}>
                {activeMenu === item.id ? (
                  <div className="absolute top-[8px] -left-5 h-2 w-2 bg-mainColor rounded-full duration-500 opacity-100" />
                ) : (
                  <div className="absolute top-2 -left-2 h-0 w-0 opacity-0 bg-mainColor rounded-full duration-500" />
                )}
                <div
                  className="whitespace-nowrap h-auto w-24 "
                  onClick={() => setActiveMenu(item.id)}
                >
                  <h1
                    className={
                      activeMenu === item.id
                        ? "text-md text-mainColor duration-300 font-semibold"
                        : "text-sm text-gray-500 duration-300 whitespace-nowrap h-auto w-24"
                    }
                  >
                    {" "}
                    {item.name}
                  </h1>
                  <div className="text-sm text-gray-500 ">
                    {item.id === activeMenu && item.listProduct ? (
                      <div className="px-4 py-2 space-y-2  duration-500 opacity-100 h-auto">
                        {item.listProduct?.map((item, index) => (
                          <div
                            className="relative cursor-pointer group"
                            key={index}
                          >
                            <h4 className="hover:text-mainColor duration-300 hover:font-semibold">
                              {item.name}
                            </h4>
                            <span className="absolute top-0 -left-4 group-hover:text-mainColor group-hover:rotate-[360deg] duration-500 opacity-0 group-hover:opacity-100">
                              +
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="opacity-0 duration-500 h-1 hidden"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            scrolled
              ? "fixed w-full flex py-4 duration-300 bg-white shadow-lg lg:hidden"
              : "py-4 flex duration-300 lg:hidden"
          }
        >
          <select
            className="w-[92%] mx-auto border border-gray-500 py-2 px-3 rounded-xl"
            name="cars"
            id="cars"
          >
            {menuItem.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="px-4 gap-4 flex-1 grid grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-16">
          <h1 className="col-span-2 lg:col-span-3 text-2xl font-semibold">
            Cà Phê Việt Nam
          </h1>
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
    </Layout>
  );
};

export default ProductPage;
