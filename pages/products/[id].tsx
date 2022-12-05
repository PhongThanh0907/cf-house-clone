import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ItemProduct from "../../components/ItemProduct";
import { useFetch } from "../../hooks/useFetch";
import { useRouter } from "next/router";
import { Product } from "../../types/product";

const ProductPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const router = useRouter();
  const { query } = router;
  const {
    data: products,
    // isLoading,
    // error,
  } = useFetch("products/", query.typeProduct);

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

  const fetchProductByType = (path: string, value: any, name: string) => {
    router.push({
      pathname: `/products/${path}`,
      query: {
        typeProduct: value,
        nameProduct: name,
      },
    });
  };

  const menuItem = [
    {
      title: "Menu",
      path: "all",

      value: [],
    },
    {
      title: "Cà Phê",
      valueNameProduct: [
        {
          titleItem: "Cà Phê Việt Nam",
          valueItem: "coffee",
          pathItem: "ca-phe-viet-nam",
        },
        {
          titleItem: "Cà Phê pha máy",
          valueItem: "expressso",
          pathItem: "ca-phe-pha-may",
        },
        {
          titleItem: "Cold Brew",
          valueItem: "coldbrew",
          pathItem: "cold-brew",
        },
      ],
      path: "coffee",
      value: ["coffee", "coldbrew", "expressso"],
    },
    {
      title: "CloudFee",
      valueNameProduct: [
        {
          titleItem: "CloundFee",
          valueItem: "cloudfee",
          pathItem: "cloudfee",
        },
      ],
      path: "cloudfee",
      value: ["cloudfee"],
    },
    {
      title: "CloudTea",
      valueNameProduct: [
        {
          titleItem: "CloudTea",
          valueItem: "cloudtea",
          pathItem: "cloudtea",
        },
      ],
      path: "cloudtea",
      value: ["cloudtea"],
    },
    {
      title: "Trà",
      valueNameProduct: [
        {
          titleItem: "Trà trái cây",
          valueItem: "tea",
          pathItem: "tra-tra-cay",
        },
        {
          titleItem: "Trà sữa",
          valueItem: "macchiato",
          pathItem: "macchiato",
        },
      ],
      path: "tea",
      value: ["tea", "macchiato"],
    },
    {
      title: "Hi-Tea Healthy",
      valueNameProduct: [
        {
          titleItem: "Hi-Tea Trà",
          valueItem: "hi-tea-tea",
          pathItem: "hi-tea-tra",
        },
        {
          titleItem: "Hi-Tea Đá Tuyết",
          valueItem: "hi-tea-ice",
          pathItem: "hi-tea-da-tuyet",
        },
      ],
      path: "hi-tea-healthy",
      value: ["hi-tea-tea", "hi-tea-ice"],
    },
    {
      title: "Bánh & Snack",
      valueNameProduct: [
        {
          titleItem: "CloudTea",
          valueItem: "cloudtea",
          pathItem: "cloudtea",
        },
      ],
      path: "snack",
      value: ["cloudtea"],
    },
    {
      title: "Tại Nhà",
      valueNameProduct: [
        {
          titleItem: "CloudTea",
          valueItem: "cloudtea",
          pathItem: "cloudtea",
        },
      ],
      path: "athome",
      value: ["cloudtea"],
    },
    {
      title: "Thức uống khác",
      valueNameProduct: [
        {
          titleItem: "CloudTea",
          valueItem: "cloudtea",
          pathItem: "cloudtea",
        },
      ],
      path: "other",
      value: ["cloudtea"],
    },
  ];

  return (
    <Layout title="Tất cả sản phẩm">
      <div className="max-w-7xl lg:py-10 mx-auto flex flex-col lg:flex-row">
        <div className="hidden lg:flex w-[300px] justify-center border-r-4 border-gray-200">
          <div className="space-y-3">
            {menuItem.map((item, index) => (
              <div className="relative" key={index}>
                {activeMenu === item.path || query.id === item.path ? (
                  <div className="absolute top-[8px] -left-5 h-2 w-2 bg-mainColor rounded-full duration-500 opacity-100" />
                ) : (
                  <div className="absolute top-2 -left-2 h-0 w-0 opacity-0 bg-mainColor rounded-full duration-500" />
                )}
                <div
                  className="whitespace-nowrap h-auto w-24 "
                  onClick={(e) => {
                    setActiveMenu(item.path);
                    console.log("hggh");
                    e.stopPropagation();
                    fetchProductByType(item.path, item.value, item.title);
                  }}
                >
                  <h1
                    className={
                      activeMenu === item.path || query.id === item.path
                        ? "text-md text-mainColor duration-300 font-semibold cursor-pointer"
                        : "text-sm text-gray-500 duration-300 whitespace-nowrap h-auto w-24 cursor-pointer"
                    }
                  >
                    {" "}
                    {item.title}
                  </h1>
                  <div className="text-sm text-gray-500 ">
                    {item.path === activeMenu && item.valueNameProduct ? (
                      <div className="px-4 py-2 space-y-2  duration-500 opacity-100 h-auto">
                        {item.valueNameProduct?.map((item, index) => (
                          <div
                            className="relative cursor-pointer group"
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              fetchProductByType(
                                item.pathItem,
                                item.valueItem,
                                item.titleItem
                              );
                            }}
                          >
                            <h4 className="hover:text-mainColor duration-300 hover:font-semibold cursor-pointer">
                              {item.titleItem}
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
              ? "fixed w-full flex py-4 duration-300 bg-white shadow-lg lg:hidden z-50"
              : "py-4 flex duration-300 lg:hidden"
          }
        >
          <select
            className="w-[92%] mx-auto border border-gray-500 py-2 px-3 rounded-xl"
            name="cars"
            id="cars"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   fetchProductByType(e.target.value, e.target.value);
            // }}
          >
            {menuItem.map((item, index) => (
              <option key={index} value={item.path}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="relative px-4 gap-4 flex-1 grid grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-16 lg:pb-16 py-4 lg:py-0">
          <h1 className="col-span-2 lg:col-span-3 text-2xl font-semibold uppercase">
            {query.nameProduct ? query.nameProduct : "Menu"}
          </h1>
          {products
            ?.slice((page - 1) * pageSize, page * pageSize)
            .map((item: Product) => (
              <div key={item._id}>
                <ItemProduct
                  img={item.imageProduct}
                  name={item.nameProduct}
                  price={item.price}
                  link={item._id}
                />
              </div>
            ))}
          <div className="hidden lg:flex absolute -bottom-2 left-0 right-0 justify-center">
            {Array(
              Math.ceil(
                products?.filter((item: Product) => item.nameProduct).length /
                  pageSize
              )
            )
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className="bg-gray-100 border border-gray-100 hover:border-blue-400 p-1 px-2 rounded text-base mx-1 cursor-pointer"
                  style={{
                    background: i + 1 === page ? "#e57905" : "#f4f5f7",
                    color: i + 1 === page ? "white" : "black",
                  }}
                  onClick={() => {
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
