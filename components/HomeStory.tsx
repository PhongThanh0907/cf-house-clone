import React from "react";
import { FireIcon } from "@heroicons/react/24/outline";
import Home1 from "../public/assets/home1.jpg";
import Home2 from "../public/assets/home2.webp";
import Home3 from "../public/assets/home3.webp";
import Link from "next/link";
import ItemHomeStory from "./ItemHomeStory";

const HomeStory = () => {
  const listHomeStory = [
    {
      nameStory: "Coffeeholic",
      item: [
        {
          img: Home1,
          date: "15/09/2022",
          title: "CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON",
          text: "Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ cho bạn một trải nghiệm...",
          link: "/",
        },
        {
          img: Home2,
          date: "11/03/2022",
          title:
            "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
          text: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...",
          link: "/",
        },
        {
          img: Home3,
          date: "07/03/2022",
          title: "BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ",
          text: "Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý tưởng để pha...",
          link: "/",
        },
      ],
      link: "/",
    },
    {
      nameStory: "Teaholic",
      item: [
        {
          img: Home3,
          date: "16/08/2022",
          title: "KHUẤY ĐỂ THẤY TRĂNG",
          text: "Năm 2022 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ, rôm rả cùng bạn bè...",
          link: "/",
        },
        {
          img: Home2,
          date: "12/08/2022",
          title:
            "“KHUẤY ĐỂ THẤY TRĂNG” - HOT TREND MỞ MÀN MÙA TRUNG THU HẤP DẪN ĐÔNG ĐẢO GIỚI TRẺ",
          text: "“Khuấy để thấy trăng” - trải nghiệm “ có 1 không 2” được The Coffee House tung ra cho mùa trung thu năm nay, hứa hẹn làm giới trẻ háo...",
          link: "/",
        },
        {
          img: Home3,
          date: "07/06/2022",
          title: "10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS",
          text: "Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được nhiều chị em ưu tiên chọn lựa để tăng cường sức khỏe, cải thiện sắc đẹp và giúp tinh...",
          link: "/",
        },
      ],
      link: "/",
    },
    {
      nameStory: "Blog",
      item: [
        {
          img: Home1,
          date: "22/08/2022",
          title:
            "CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT NHẠT?",
          text: "Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ cho bạn một trải nghiệm...",
          link: "/",
        },
        {
          img: Home2,
          date: "14/02/2022",
          title: "LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?",
          text: "Tadaaaa, hết Tết thì Valentine đầy yêu thương lại đang đến rồi nè. Lễ tình nhân, dẫn crush đi quán nào? Nhất định phải cùng người ấy đến Nhà hẹn...",
          link: "/",
        },
        {
          img: Home3,
          date: "11/02/2022",
          title:
            "THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ TƯỞNG ĐỂ HỘI HỌP BẠN BÈ MÙA TẾT NÀY",
          text: "Những ngày cuối năm, đầu năm mới, bạn lên kế hoạch để gặp gỡ những người yêu, thương, quý, mến... Vậy bạn đã tìm được điểm hẹn lý tưởng chưa,...",
          link: "/",
        },
      ],
      link: "/",
    },
  ];

  return (
    <div className="pt-10">
      <div className="bg-yellow-100 lg:py-10 py-8 pb-14 lg:pb-20">
        <div className="px-4 lg:px-0 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 justify-center">
            <FireIcon className="h-6 w-6 text-mainColor " />
            <h4 className="text-2xl font-semibold">Chuyện Nhà</h4>
          </div>
          <div className="space-y-4">
            {listHomeStory.map((item, index) => (
              <div key={index}>
                <Link href={item.link}>
                  <h1 className="text-2xl font-semibold px-3 border-l-4 border-mainColor my-6 hover:text-hover inline-block">
                    {item.nameStory}
                  </h1>
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {item.item.map((itemStory, index) => (
                    <div className="" key={index}>
                      <ItemHomeStory
                        img={itemStory.img}
                        date={itemStory.date}
                        link={itemStory.link}
                        text={itemStory.text}
                        title={itemStory.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStory;
