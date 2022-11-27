import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const MenuHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openHomeStoryMobile, setOpenHomeStoryMobile] = useState(false);

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

  const listNav = [
    { title: "Menu", link: "/products" },
    { title: "Chuyện Nhà", link: "/" },
    { title: "Cà phê", link: "/" },
    { title: "Trà", link: "/" },
    { title: "Cảm hứng CloundFee", link: "/" },
    { title: "Cửa hàng", link: "/" },
    { title: "Tuyển dụng", link: "/" },
  ];

  const listMenu = [
    {
      title: "Cà Phê",
      nameProduct: ["Cà Phê Việt Nam", "Cà Phê Máy", "Cold Brew"],
      link: "/",
    },
    { title: "CloudFee", nameProduct: ["CloudFee"], link: "/" },
    { title: "CloudTea", nameProduct: ["CloudTea"], link: "/" },
    {
      title: "Trà",
      nameProduct: ["Trà trái cây", "Trà sữa Macchiato"],
      link: "/",
    },
    {
      title: "Hi-Tea Healthy",
      nameProduct: ["Hi-Tea Trà", "Hi-Tea Đá Tuyết"],
      link: "/",
    },
    {
      title: "Bánh & Snack",
      nameProduct: ["Bánh mặn", "Bánh ngọt"],
      link: "/",
    },
    {
      title: "Tại nhà",
      nameProduct: ["Cà phê tại nhà", "Trà tại nhà"],
      link: "/",
    },
    { title: "Thức uống khác", nameProduct: ["Chocolate"], link: "/" },
  ];

  const listHomeStory = [
    {
      title: "Coffeeholic",
      link: "/",
      stories: [
        { nameStory: "#chuyencaphe", linkStory: "/" },
        { nameStory: "#phacaphe", linkStory: "/" },
      ],
    },
    {
      title: "Teaholic ",
      link: "/",
      stories: [
        { nameStory: "#phatra", linkStory: "/" },
        { nameStory: "#chuyenphatra", linkStory: "/" },
      ],
    },
    {
      title: "Blog ",
      link: "/",
      stories: [
        { nameStory: "#inthemood", linkStory: "/" },
        { nameStory: "#review", linkStory: "/" },
        { nameStory: "#HumanofTCH", linkStory: "/" },
      ],
    },
  ];

  return (
    <div
      className={
        scrolled
          ? "style-headerscrolled"
          : "border-t border-b  border-gray-200 relative bg-[#fcf7f7] duration-300 ease-in-out w-full"
      }
    >
      <div className="max-w-7xl mx-auto flex justify-center relative flex-row lg:gap-16 lg:px-8 py-4">
        <div>
          <Link href="/">
            <h1 className="uppercase font-bold text-sm lg:text-2xl">
              The coffee house
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex gap-10 items-center">
          {listNav.slice(0, 1).map((item, index) => (
            <Link key={index} className="relative group" href={item.link}>
              <div className="hover:text-hover">
                <span className="font-semibold">{item.title}</span>
                <ChevronDownIcon className="absolute -right-3 bottom-1 h-2 w-2" />
              </div>
              <div
                className={
                  scrolled
                    ? "style-group group-hover:visible group-hover:opacity-100 group-hover:top-[60px]"
                    : "style-group group-hover:visible group-hover:opacity-100 group-hover:top-[110px]"
                }
              >
                {listMenu.map((item, index) => (
                  <ul className="w-36" key={index}>
                    <li className="text-lg font-semibold border-b-2 mb-3 border-b-gray-400 hover:border-mainColor duration-300 hover:text-hover">
                      {item.title}
                    </li>
                    {item.nameProduct.map((itemNameProduct, index) => (
                      <li
                        className="text-gray-700 my-1 hover:text-hover"
                        key={index}
                      >
                        {itemNameProduct}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </Link>
          ))}

          {listNav.slice(1, 2).map((item, index) => (
            <Link key={index} className="relative group" href={item.link}>
              <div className="hover:text-hover">
                <span className="font-semibold">{item.title}</span>
                <ChevronDownIcon className="absolute -right-3 bottom-1 h-2 w-2" />
              </div>
              <div
                className={
                  scrolled
                    ? "style-group group-hover:visible group-hover:opacity-100 group-hover:top-[60px]"
                    : "style-group group-hover:visible group-hover:opacity-100 group-hover:top-[110px]"
                }
              >
                {listHomeStory.map((item, index) => (
                  <ul className="w-72" key={index}>
                    <li className="text-lg font-semibold border-b-2 border-b-gray-400 mb-3 hover:border-mainColor duration-300 hover:text-hover">
                      {item.title}
                    </li>
                    {item.stories.map((itemStory, index) => (
                      <li
                        className="text-gray-700 my-1 hover:text-hover"
                        key={index}
                      >
                        {itemStory.nameStory}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </Link>
          ))}
          {listNav.slice(2, 7).map((item, index) => (
            <Link
              key={index}
              className="relative hover:text-mainColor duration-300"
              href={item.link}
            >
              <span className="font-semibold">{item.title}</span>
            </Link>
          ))}
        </div>
        <div
          className={
            openMenu
              ? "absolute top-6 left-4 lg:hidden"
              : "absolute top-3 bottom-3 left-4 lg:hidden"
          }
        >
          <div className="relative" onClick={() => setOpenMenu(!openMenu)}>
            <span
              className={
                openMenu
                  ? "absolute duration-300 h-[4px] w-[25px] bg-black -top-5 opacity-0"
                  : "h-[4px] block my-1 w-[25px] bg-black opacity-100 duration-300"
              }
            ></span>
            <span
              className={
                openMenu
                  ? "absolute rotate-45 block h-[4px] w-[25px] bg-black opacity-100 duration-300"
                  : "h-[4px] block my-1 w-[25px] bg-black opacity-100 duration-300"
              }
            ></span>
            <span
              className={
                openMenu
                  ? "absolute -rotate-45 h-[4px] w-[25px] bg-black opacity-100 duration-300"
                  : "h-[4px] block my-1 w-[25px] bg-black opacity-100 duration-300"
              }
            ></span>
          </div>
        </div>
        {openMenu ? (
          <div
            className={
              scrolled
                ? "fixed bg-white top-12 left-0 right-32 z-50 duration-500 p-5 opacity-100 h-[100vh] overflow-y-scroll lg:hidden"
                : "fixed bg-white top-24 left-0 right-32 z-50 duration-500 p-5 opacity-100 h-[100vh] lg:hidden"
            }
          >
            <div className="flex flex-col space-y-4">
              {listNav.slice(0, 1).map((item, index) => (
                <Link key={index} className="relative" href={item.link}>
                  <div
                    onClick={() => setOpenMenuMobile(!openMenuMobile)}
                    className="hover:text-hover flex justify-between items-center border-t border-b py-4 border-gray-200"
                  >
                    <span className="font-semibold mx-2">{item.title}</span>
                    <ChevronDownIcon className="h-2 w-2" />
                  </div>

                  {openMenuMobile ? (
                    <div className="opacity-100 duration-700 h-[844px] w-[225px]">
                      {listMenu.map((item, index) => (
                        <ul className="" key={index}>
                          <li className="text-sm font-semibold border-b-2 py-3 border-b-gray-200 hover:border-mainColor duration-300 hover:text-hover">
                            {item.title}
                          </li>
                          {item.nameProduct.map((itemNameProduct, index) => (
                            <li
                              className="text-xs lg:text-sm m-3 text-gray-500 lg:text-gray-700 lg:my-1 hover:text-hover"
                              key={index}
                            >
                              {itemNameProduct}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <div className="h-1 opacity-0 w-[245px] duration-500">
                      {listMenu.map((item, index) => (
                        <ul className="" key={index}>
                          <li className="text-sm font-semibold border-b-2 py-3 border-b-gray-200 hover:border-mainColor duration-300 hover:text-hover">
                            {item.title}
                          </li>
                          {item.nameProduct.map((itemNameProduct, index) => (
                            <li
                              className="text-xs lg:text-sm m-3 text-gray-500 lg:text-gray-700 lg:my-1 hover:text-hover"
                              key={index}
                            >
                              {itemNameProduct}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
              {listNav.slice(1, 2).map((item, index) => (
                <Link key={index} className="relative group" href={item.link}>
                  <div
                    onClick={() => setOpenHomeStoryMobile(!openHomeStoryMobile)}
                    className="hover:text-hover flex justify-between items-center pb-4 border-b border-gray-200"
                  >
                    <span className="font-semibold mx-2">{item.title}</span>
                    <ChevronDownIcon className=" h-2 w-2" />
                  </div>

                  {openHomeStoryMobile ? (
                    <div className="opacity-100 duration-700 w-[225px] h-[358px]">
                      {listHomeStory.map((item, index) => (
                        <ul className="" key={index}>
                          <li className="text-sm font-semibold border-b-2 py-3 border-b-gray-200 hover:border-mainColor duration-300 hover:text-hover">
                            {item.title}
                          </li>
                          {item.stories.map((itemNameProduct, index) => (
                            <Link key={index} href={itemNameProduct.linkStory}>
                              <li className="text-xs lg:text-sm m-3 text-gray-500 lg:text-gray-700 lg:my-1 hover:text-hover">
                                {itemNameProduct.nameStory}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <div className="h-1 opacity-0 duration-500 w-[225px]"></div>
                  )}

                  {/* <div
                    className={
                      scrolled
                        ? "style-group group-hover:visible group-hover:opacity-100 group-hover:top-[60px]"
                        : "style-group group-hover:visible group-hover:opacity-100 group-hover:top-[110px]"
                    }
                  >
                    {listHomeStory.map((item, index) => (
                      <ul className="w-72" key={index}>
                        <li className="text-lg font-semibold border-b-2 border-b-gray-400 mb-3 hover:border-mainColor duration-300 hover:text-hover">
                          {item.title}
                        </li>
                        {item.stories.map((itemStory, index) => (
                          <li
                            className="text-gray-700 my-1 hover:text-hover"
                            key={index}
                          >
                            {itemStory.nameStory}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div> */}
                </Link>
              ))}
              {listNav.slice(2, 7).map((item, index) => (
                <Link
                  key={index}
                  className="relative hover:text-mainColor duration-300 pb-4 border-b border-gray-200"
                  href={item.link}
                >
                  <span className="font-semibold mx-2">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={
              scrolled
                ? "fixed bg-white top-12 left-0 right-32 z-50 duration-500 p-5 opacity-0  close-open h-[100vh] lg:hidden"
                : "fixed bg-white top-24 left-0 right-32 z-50 duration-500 p-5 opacity-0  close-open h-[100vh] lg:hidden"
            }
          ></div>
        )}
      </div>
    </div>
  );
};

export default MenuHeader;
