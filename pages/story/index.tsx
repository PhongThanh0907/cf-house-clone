import Image from "next/image";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Img1 from "../../public/assets/home1.jpg";
import Img2 from "../../public/assets/home2.webp";
import { TagIcon } from "@heroicons/react/24/outline";
import HomeStory from "../../components/HomeStory";

const StoryPage = () => {
  const [activeStory, setActiveStory] = useState("Tất cả");
  const listStory = [
    { title: "Tất cả", link: "/" },
    { title: "Coffeeholic", link: "/" },
    { title: "Teaholic", link: "/" },
    { title: "Blog", link: "/" },
  ];
  return (
    <Layout title="Chuyện Cà Phê và Trà">
      <div>
        <div className="flex justify-center relative py-3 pt-5 lg:pt-10">
          <hr className="h-1 w-8 bg-mainColor absolute bottom-0" />
          <h1 className="text-center text-xl inline-block lg:text-2xl font-semibold">
            Chuyện Nhà
          </h1>
        </div>
        <p className="w-[90%] lg:w-[40%] mx-auto text-sm text-center my-4">
          {" "}
          The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị
          kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà
          đượm hương, truyền cảm hứng về lối sống hiện đại.
        </p>
        <div className="lg:flex grid grid-cols-2 mx-auto lg:justify-center gap-4 lg:gap-8 w-[90%] lg:w-auto">
          {listStory.map((item, index) => (
            <div
              className={
                item.title === activeStory
                  ? "py-2 w-full lg:w-[120px] border border-yellow-100 bg-yellow-100 text-mainColor  font-semibold duration-300 text-center rounded-3xl"
                  : "py-2 w-full lg:w-[120px] border border-gray-300 text-gray-400 font-semibold duration-300 text-center rounded-3xl hover:text-mainColor"
              }
              key={index}
              onClick={() => setActiveStory(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-3 max-w-7xl mx-auto gap-8 py-10">
          <div className="col-span-2">
            <Image
              className="w-full rounded-lg object-cover"
              src={Img1}
              alt="img"
            />
            <div>
              <h4 className="font-semibold lg:text-lg hover:text-mainColor duration-300 my-2">
                CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT
                NHẠT?
              </h4>
              <p className="text-xs text-gray-400">22/08/2022</p>
              <p className="text-md">
                Trung thu là dịp mà bất kỳ ai cũng có thể “bé lại” để niềm háo
                hức đón Tết Đoàn viên, ăn bánh, thưởng trà… vẫn đầy ắp trong
                lòng....
              </p>
              <div className="flex gap-2 items-center my-2">
                <TagIcon className="w-3 h-3" />
                <span className="text-gray-400 text-xs">inthemood</span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image className="rounded-lg" src={Img2} alt="img" />
            <h4 className="font-semibold text-lg hover:text-mainColor duration-300 my-2">
              NHỮNG LOẠI TRÀ CÓ HƯƠNG VÀ VỊ “ĐỔ GỤC” KHÁCH THĂM XUÂN NHÀ BẠN
            </h4>
            <p className="text-xs text-gray-400">21/01/2022</p>
            <p className="text-md">
              Tết đang “lấp ló đầu ngõ” và bạn đang chuẩn bị cho một năm mới an
              khang, sum vầy. Tìm kiếm những thức trà, thức bánh thật ngon để
              tiếp đãi khách đến thăm nhà. Nếu vậy, Nhà sẽ bật mí những loại trà
              có hương và vị “đổ gục” những vị khách đến thăm xuân nhà bạn nhé!
            </p>
            <div className="flex gap-2 items-center my-2">
              <TagIcon className="w-3 h-3" />
              <span className="text-gray-400 text-xs">inthemood</span>
            </div>
          </div>
        </div>
        <HomeStory />
      </div>
    </Layout>
  );
};

export default StoryPage;
