import React from "react";
import PaymentMethodIcon from "../../static/payment-method-icon.png";

export const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px]">
      <div className="text-[15px] font-medium">Hình thức thanh toán</div>
      <div className="flex items-center gap-[8px]">
        <div className="size-[32px]">
          <img
            src={PaymentMethodIcon}
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="text-sm font-normal">Thanh toán tại cửa hàng</div>
      </div>
    </div>
  );
};
