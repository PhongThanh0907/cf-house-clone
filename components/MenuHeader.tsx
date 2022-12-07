import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const MenuHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openHomeStoryMobile, setOpenHomeStoryMobile] = useState(false);
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

  const listNav = [
    {
      title: "Menu",
      type: "/all",
      value: [],
      path: "/products",
    },
    {
      title: "Chuyện Nhà",
      path: "/story",
      type: "",
      value: [],
    },
    {
      title: "Cà phê",
      path: "/collections",
      type: "/ca-phe-tai-nha",
      value: ["cfathome"],
    },
    {
      title: "Trà",
      path: "/collections",
      type: "/tra-tai-nha",
      value: ["tathome"],
    },
    {
      title: "Của hàng",
      path: "/store",
      type: "/all",
      value: [],
    },
    {
      title: "Cảm hứng CloundFee",
      path: "/products",
      type: "/all",
      value: [],
    },
    {
      title: "Tài khoản",
      path: "/login",
      type: "",
      value: [],
    },
  ];

  const listMenu = [
    {
      title: "Cà Phê",
      valueNameProduct: [
        {
          titleItem: "Cà Phê Việt Nam",
          valueItem: "coffee",
          pathItem: "/products",
          typeItem: "/ca-phe-viet-nam",
        },
        {
          titleItem: "Cà Phê pha máy",
          valueItem: "expressso",
          pathItem: "/products",
          typeItem: "/ca-phe-pha-may",
        },
        {
          titleItem: "Cold Brew",
          valueItem: "coldbrew",
          pathItem: "/products",
          typeItem: "/cold-brew",
        },
      ],
      path: "/products",
      type: "/coffee",
      value: ["coffee", "coldbrew", "expressso"],
    },
    {
      title: "CloudFee",
      valueNameProduct: [
        {
          titleItem: "CloundFee",
          valueItem: "cloudfee",
          pathItem: "/product",
          typeItem: "/cloudfee",
        },
      ],
      path: "/products",
      type: "/cloudfee",
      value: ["cloudfee"],
    },
    {
      title: "CloudTea",
      valueNameProduct: [
        {
          titleItem: "CloudTea",
          valueItem: "cloudtea",
          pathItem: "/products",
          typeItem: "/cloudtea",
        },
      ],
      path: "/products",
      type: "/cloudtea",
      value: ["cloudtea"],
    },
    {
      title: "Trà",
      valueNameProduct: [
        {
          titleItem: "Trà trái cây",
          valueItem: "tea",
          pathItem: "/products",
          typeItem: "/tra-tra-cay",
        },
        {
          titleItem: "Trà sữa",
          valueItem: "macchiato",
          pathItem: "/products",
          typeItem: "/macchiato",
        },
      ],
      path: "/products",
      type: "/tea",
      value: ["tea", "macchiato"],
    },
    {
      title: "Hi-Tea Healthy",
      valueNameProduct: [
        {
          titleItem: "Hi-Tea Trà",
          valueItem: "hi-tea-tea",
          pathItem: "/products",
          typeItem: "/hi-tea-tra",
        },
        {
          titleItem: "Hi-Tea Đá Tuyết",
          valueItem: "hi-tea-ice",
          pathItem: "/products",
          typeItem: "/hi-tea-da-tuyet",
        },
      ],
      path: "/products",
      type: "/hi-tea-healthy",
      value: ["hi-tea-tea", "hi-tea-ice"],
    },
    {
      title: "Bánh & Snack",
      valueNameProduct: [
        {
          titleItem: "CloudTea",
          valueItem: "cloudtea",
          pathItem: "/products",
          typeItem: "/cloudtea",
        },
      ],
      path: "/products",
      type: "/cloudtea",
      value: ["cloudtea"],
    },
    {
      title: "Tại Nhà",
      valueNameProduct: [
        {
          titleItem: "CloudTea",
          valueItem: "cloudtea",
          pathItem: "/products",
          typeItem: "/cloudtea",
        },
      ],
      path: "/products",
      type: "/cloudtea",
      value: ["cloudtea"],
    },
    {
      title: "Thức uống khác",
      valueNameProduct: [
        {
          titleItem: "CloudTea",
          valueItem: "cloudtea",
          pathItem: "/products",
          typeItem: "/cloudtea",
        },
      ],
      path: "/products",
      type: "/cloudtea",
      value: ["cloudtea"],
    },
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

  const linkNextPage = (path: string, type: string, value: any) => {
    router.push({
      pathname: `${path}${type}`,
      query: {
        typeProduct: value,
      },
    });
  };

  return (
    <div
      className={
        scrolled
          ? "style-headerscrolled"
          : `border-t border-b  border-gray-200 relative bg-[#fcf7f7] duration-300 ease-in-out w-full`
      }
    >
      <div className="max-w-7xl mx-auto flex justify-center relative flex-row lg:gap-16 lg:px-8 py-4">
        <div>
          <Link href="/">
            <h1 className="uppercase font-bold text-sm lg:text-2xl">
              Coffee House Clone
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex gap-10 items-center">
          {listNav.slice(0, 1).map((item, index) => (
            <div
              onClick={(e) => {
                e.stopPropagation();
                linkNextPage(item.path, item.type, item.value);
              }}
              key={index}
              className="relative group cursor-pointer"
            >
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
                {listMenu.map((itemMenu, index) => (
                  <ul className="w-36" key={index}>
                    <li
                      onClick={(e) => {
                        e.stopPropagation();
                        linkNextPage(
                          itemMenu.path,
                          itemMenu.type,
                          itemMenu.value
                        );
                      }}
                      className="text-lg font-semibold border-b-2 mb-3 border-b-gray-400 hover:border-mainColor duration-300 hover:text-hover"
                    >
                      {itemMenu.title}
                    </li>
                    {itemMenu.valueNameProduct.map((itemNameProduct, index) => (
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          linkNextPage(
                            itemNameProduct.pathItem,
                            itemNameProduct.typeItem,
                            itemNameProduct.valueItem
                          );
                        }}
                        className="text-gray-700 my-1 hover:text-hover"
                        key={index}
                      >
                        {itemNameProduct.titleItem}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}

          {listNav.slice(1, 2).map((item, index) => (
            <div
              key={index}
              className="relative group"
              onClick={(e) => {
                e.stopPropagation();
                linkNextPage(item.path, item.type, item.value);
              }}
            >
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
            </div>
          ))}
          {listNav.slice(2, 7).map((item, index) => (
            <div
              key={index}
              className="relative hover:text-mainColor duration-300 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                linkNextPage(item.path, item.type, item.value);
              }}
            >
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Mobile */}
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
                <div key={index} className="relative">
                  <div
                    onClick={() => setOpenMenuMobile(!openMenuMobile)}
                    className="hover:text-hover flex justify-between items-center border-t border-b py-4 border-gray-200"
                  >
                    <span className="font-semibold mx-2">{item.title}</span>
                    <ChevronDownIcon className="h-2 w-2" />
                  </div>

                  {openMenuMobile ? (
                    <div className="opacity-100 duration-700 h-[844px] w-[225px]">
                      {listMenu.map((itemMenu, index) => (
                        <ul className="" key={index}>
                          <li
                            onClick={(e) => {
                              e.stopPropagation();
                              linkNextPage(
                                itemMenu.path,
                                item.type,
                                item.value
                              );
                              setOpenMenu(false);
                            }}
                            className="text-sm font-semibold border-b-2 py-3 border-b-gray-200 hover:border-mainColor duration-300 hover:text-hover"
                          >
                            {itemMenu.title}
                          </li>
                          {itemMenu.valueNameProduct.map(
                            (itemNameProduct, index) => (
                              <li
                                onClick={(e) => {
                                  e.stopPropagation();
                                  linkNextPage(
                                    itemNameProduct.pathItem,
                                    itemNameProduct.typeItem,
                                    itemNameProduct.valueItem
                                  );
                                  setOpenMenu(false);
                                }}
                                className="text-xs lg:text-sm m-3 text-gray-500 lg:text-gray-700 lg:my-1 hover:text-hover"
                                key={index}
                              >
                                {itemNameProduct.titleItem}
                              </li>
                            )
                          )}
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
                          {item.valueNameProduct.map(
                            (itemNameProduct, index) => (
                              <li
                                className="text-xs lg:text-sm m-3 text-gray-500 lg:text-gray-700 lg:my-1 hover:text-hover"
                                key={index}
                              >
                                {itemNameProduct.titleItem}
                              </li>
                            )
                          )}
                        </ul>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {listNav.slice(1, 2).map((item, index) => (
                <Link key={index} className="relative group" href="/story">
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
                </Link>
              ))}
              {listNav.slice(2, 7).map((item, index) => (
                <div
                  key={index}
                  className="relative hover:text-mainColor duration-300 pb-4 border-b border-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    linkNextPage(item.path, item.type, item.value);
                    setOpenMenu(false);
                  }}
                >
                  <span className="font-semibold mx-2">{item.title}</span>
                </div>
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

export default React.memo(MenuHeader);
