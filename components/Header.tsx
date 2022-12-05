import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
  return (
    <div className="text-gray-500 text-xs flex justify-center gap-4 lg:gap-28 p-3">
      <Link href="/store">
        <div className="gap-1 flex items-center lg:gap-2">
          <MapPinIcon className="h-5 w-5 lg:h-6 lg:w-6 text-mainColor" />
          <span className="text-gray-500 hover:text-hover">
            154 Cửa hàng <span className="hidden lg:inline">khắp cả nước</span>
          </span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex items-center gap-1 lg:gap-2">
          <PhoneIcon className="h-5 w-5 lg:h-6 lg:w-6 text-mainColor" />
          <span className="text-gray-500 hover:text-hover">
            <span className="hidden lg:inline">Đặt hàng:</span> 1800.1990
          </span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex items-center lg:gap-2">
          <BuildingStorefrontIcon className="h-5 w-5 lg:h-6 lg:w-6 text-mainColor" />
          <span className="text-gray-500 hover:text-hover">
            Freeship từ 50.000vnd
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
