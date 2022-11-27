import React from "react";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

type Props = {};

const Footer = (props: Props) => {
  const listFooter = [
    {
      title: "Giới thiệu",
      text: [
        "Về Chúng Tôi",
        "Sản Phẩm",
        "Khuyến Mãi",
        "Chuyện Cà Phê",
        "Cửa Hàng",
        "Tuyển Dụng",
      ],
    },
    {
      title: "Điều khoản",
      text: ["Điều khoản sử dụng", "Chính sách bảo mật thông tin"],
    },
  ];

  return (
    <div className="bg-[#262626] py-10">
      <div className="px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto">
          {listFooter.map((item, index) => (
            <ul className="hidden lg:inline" key={index}>
              <li className="text-lg text-white font-semibold my-3">
                {item.title}
              </li>
              {item.text.map((itemText, index) => (
                <li className="text-white text-xs my-2" key={index}>
                  {itemText}
                </li>
              ))}
            </ul>
          ))}
          <ul>
            <li className="my-3 text-white flex gap-2 items-center">
              <PhoneIcon className="h-5 w-5" />
              <span>Đặt hàng: 1800 6936</span>
            </li>
            <li className="my-3 text-white flex gap-2 items-center">
              <MapPinIcon className="h-5 w-5" />
              <span>Liên hệ</span>
            </li>
            <li className="text-white text-xs">
              Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, P.15 , Q.Bình Thạnh,
              TP.Hồ Chí Minh
            </li>
          </ul>
          <div className="grid grid-cols-2 lg:hidden">
            {listFooter.map((item, index) => (
              <ul key={index}>
                <li className="text-lg text-white font-semibold my-3">
                  {item.title}
                </li>
                {item.text.map((itemText, index) => (
                  <li className="text-white text-xs my-2" key={index}>
                    {itemText}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <ul></ul>
        </div>
        <div className="h-[1px] bg-gray-400 max-w-7xl mx-auto my-4" />
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-xs">
            Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN <br />
            Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày
            23/07/2014. Người đại diện: NGÔ NGUYÊN KHA <br />
            Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh Điện
            thoại: (028) 7107 8079 Email: hi@thecoffeehouse.vn <br />© 2014-2022
            Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
