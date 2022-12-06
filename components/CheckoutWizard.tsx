import React from "react";

interface Props {
  activeStep: number;
  coffeeTea: string;
  nameProduct: string;
}

const CheckoutWizard = ({ activeStep = 0, coffeeTea, nameProduct }: Props) => {
  return (
    <div className="flex mb-5 flex-wrap lg:max-w-7xl mx-auto px-16 ">
      {[
        "Menu",
        coffeeTea,
        nameProduct,
        "Địa Chỉ Giao Hàng",
        "Phương Thức Thanh Toán",
        "Xác Nhận Đơn Hàng",
      ].map((step, index) => (
        <div
          key={index}
          className={`flex text-sm font-semibold pt-8  capitalize
          text-center ${index <= activeStep ? "" : "hidden"} ${
            index === activeStep ? "text-gray-500" : ""
          }`}
        >
          {step}
          <div
            className={` ${
              index === activeStep ? "hidden" : ""
            } mx-2 text-gray-400`}
          >
            /
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutWizard;
