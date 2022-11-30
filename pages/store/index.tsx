import Image from "next/image";
import Link from "next/link";
import React from "react";
import ItemLocation from "../../components/ItemLocation";
import Layout from "../../components/Layout";
import background from "../../public/assets/backgroundstore.webp";

type Props = {};

const StorePage = () => {
  const listLocation = [
    { location: "Hồ Chí Minh", value: "71" },
    { location: "Hà Nội", value: "41" },
    { location: "Hải Phòng", value: "9" },
    { location: "Đà Nẵng", value: "5" },
    { location: "Tây Ninh", value: "2" },
    { location: "Cần Thơ", value: "3" },
    { location: "Nha Trang", value: "3" },
  ];

  const listDistrict = [
    { district: "Quận/Huyện", value: "" },
    { district: "Q1", value: "" },
    { district: "Q3", value: "" },
    { district: "Q4", value: "" },
    { district: "Q5", value: "" },
    { district: "Q6", value: "" },
    { district: "Q7", value: "" },
    { district: "Thủ Đức", value: "" },
    { district: "Tân Bình", value: "" },
    { district: "Tân Phú", value: "" },
    { district: "Thành phố Thủ Đức", value: "" },
    { district: "Bình Chánh", value: "" },
    { district: "Bình Thạnh", value: "" },
    { district: "Phú Nhuận", value: "" },
    { district: "Gò Vấp", value: "" },
  ];

  return (
    <Layout title="Danh sách của hàng">
      <div className="relative h-[120px] lg:h-[200px]">
        <Image
          className="h-full object-cover"
          src={background}
          alt="background"
        />
        <div className="bg-black/30 absolute top-0 bottom-0 right-0 left-0" />
        <h4 className="absolute z-20 text-white top-0 bottom-0 flex items-center right-0 left-0 justify-center text-sm lg:text-2xl font-semibold">
          Hệ thống 154 cửa hàng The Coffee House toàn quốc
        </h4>
      </div>
      <div className="max-w-7xl hidden flex-row mx-auto lg:flex">
        <div className="flex flex-col w-[300px] items-center border-r-2 border-gray-200 my-10">
          <h4 className="mb-4 font-semibold text-lg">Theo khu vực</h4>
          <div className="flex flex-col gap-y-2">
            {listLocation.map((item, index) => (
              <Link key={index} href="/store">
                <p className="text-md hover:text-hover">
                  {item.location} ({item.value})
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="m-10 flex-1">
          <h4 className="text-xl font-semibold">
            Khám phá 71 cửa hàng của chúng tôi ở Tp Hồ Chí Minh
          </h4>
          <select
            className="w-[30%] border border-gray-300 focus:outline-none px-3 py-2 text-sm rounded-lg my-4"
            name="district"
            id="district"
          >
            {listDistrict.map((item, index) => (
              <option key={index} value={item.value}>
                {item.district}
              </option>
            ))}
          </select>
          <div className="grid grid-cols-2 gap-6">
            <ItemLocation />
            <ItemLocation />
          </div>
        </div>
      </div>
      <div className="lg:hidden px-4 py-8">
        <select
          className="w-full border border-gray-300 focus:outline-none px-3 py-2 text-sm rounded-lg mb-6"
          name="district"
          id="district"
        >
          {listDistrict.map((item, index) => (
            <option key={index} value={item.value}>
              {item.district}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-1 gap-10">
          <ItemLocation />
          <ItemLocation />
        </div>
      </div>
    </Layout>
  );
};

export default StorePage;
