import React from "react";
import { Button } from "../common/button";
import { CancelOrder } from "./cancel-order";

const FooterBottons = () => {
  return (
    <div className="flex gap-[12px]">
      <CancelOrder>
        {({ open }) => (
          <Button
            text={
              <div className="text-[15px] font-medium text-gray7">Huỷ đơn</div>
            }
            className="rounded-[40px] bg-gray2 py-[8px]"
            onClick={open}
          />
        )}
      </CancelOrder>
      <Button
        text={<div className="text-sm font-normal text-white">Đặt lịch</div>}
        className="rounded-[40px] bg-primary5 py-[8px]"
      />
    </div>
  );
};

export default FooterBottons;
