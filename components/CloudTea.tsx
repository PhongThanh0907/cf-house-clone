import Image from "next/image";
import React from "react";
import Banner01 from "../public/assets/banner-4.webp";
import Banner02 from "../public/assets/banner-5.webp";
import Banner03 from "../public/assets/banner-6.webp";

const CloudTea = () => {
  return (
    <div>
      <div className="relative h-[880px] lg:h-[700px]">
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <Image className="w-full h-full" src={Banner03} alt="background" />
        </div>

        <div className="absolute left-0 bottom-10 right-0 top-10 z-10">
          <div className="px-4 lg:px-0 flex flex-col lg:flex-row max-w-7xl mx-auto lg:gap-8">
            <Image
              className="mt-4 lg:mt-0 h-[330px] lg:h-full"
              src={Banner01}
              alt="img"
            />
            <div className="py-10 lg:py-28">
              <Image
                className="w-[95%] mx-auto"
                src={Banner02}
                alt="img-name"
              />
              <p className="my-6 lg:my-0 text-gray-500">
                Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea
                Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là
                foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh
                quy phô mai hoặc bột ca cao thơm lừng. Kế tiếp là tầng trà sữa
                sóng sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn
                giúp giữ trọn vị trà sữa đến ngụm cuối cùng. 3 tầng hòa quyện,
                nhấp một ngụm là ghiền, nhớ mãi không thôi.
              </p>
              <button className="lg:px-28 lg:w-auto w-full rounded-xl font-semibold text-white py-2 bg-[#b3ddca] lg:my-4 hover:bg-[#9fd1b5] active:bg-[#8abea1] duration-300">
                Thử ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudTea;
