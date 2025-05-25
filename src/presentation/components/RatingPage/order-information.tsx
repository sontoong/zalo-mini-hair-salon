import React from "react";
import OrderBriefIcon from "../../static/order-rating-icon.png";
import { formatCurrency } from "../../utils/helpers";

const OrderInformation = () => {
  return (
    <div className="flex w-full justify-between rounded-[12px] border border-stroke3 p-[12px]">
      <div className="size-[40px]">
        <img src={OrderBriefIcon} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-[4px] pr-[20px]">
        <div className="text-[15px] font-normal">Uốn tóc, Nhuộm tóc</div>
        <div className="text-xs font-normal text-gray6">
          Đã đặt 12:00, 04/11/2024
        </div>
      </div>
      <div className="text-sm font-medium">{formatCurrency(120000)}</div>
    </div>
  );
};

export { OrderInformation };
