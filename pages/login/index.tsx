import React from "react";
import background from "../../public/assets/banner-6.webp";
import background01 from "../../public/assets/banner-4.webp";
import Layout from "../../components/Layout";
import Image from "next/image";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const LoginPage = () => {
  return (
    <Layout title="Đăng Ký">
      <div className="flex mb-5 flex-wrap lg:max-w-7xl mx-auto px-4 lg:px-16 mt-4">
        <p className=" text-mainColor font-semibold text-sm">Đăng Nhập</p>
        <p className="px-3 text-sm">/</p>
        <p className="text-sm text-gray-500 font-semibold">Đăng Ký</p>
      </div>
      <div className=" max-w-7xl mx-auto h-[650px] grid grid-cols-1 lg:grid-cols-2 my-10">
        <Image
          className="hidden lg:inline"
          src={background01}
          alt="background"
        />
        <div className="relative">
          <Image
            className="h-full w-full rounded-xl"
            src={background}
            alt="background"
          />
          <div className="bg-[#ffff0019] top-0 bottom-0 right-0 left-0 absolute rounded-xl" />
          <div className="absolute top-10 bottom-10 lg:right-10 lg:left-10 right-6 left-6">
            <h4 className="text-2xl font-semibold text-mainColor text-center pb-8">
              Đăng Ký
            </h4>
            <form>
              <label className="font-semibold" htmlFor="email">
                Email:
              </label>
              <div className="relative">
                <input
                  className="text-mainColor focus:outline-none w-full px-12 py-3 rounded-lg bg-yellow-100 my-1 mb-4"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Nhập email của bạn"
                />
                <EnvelopeIcon className="w-6 h-6 text-mainColor absolute top-4 left-3" />
              </div>

              <label htmlFor="password">Mật khẩu:</label>
              <div className="relative">
                <input
                  className="text-mainColor focus:outline-none w-full px-12 py-3 rounded-lg bg-yellow-100 my-1 mb-4"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu của bạn"
                />
                <LockClosedIcon className="w-6 h-6 text-mainColor absolute top-4 left-3" />
              </div>

              <button className="w-full py-2 my-10 bg-mainColor rounded-xl text-white font-semibold hover:bg-[#e57905e6] active:bg-[#e57905fc] duration-300">
                Đăng Nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
