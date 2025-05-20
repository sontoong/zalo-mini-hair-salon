import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import { Button } from "../common/button";

export const Footer: FC<Props> = ({ onDraft, onPlaceOrder }) => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 flex flex-col bg-white"
      style={{ boxShadow: "0px -2px 12px 0px #0000000F" }}
    >
      {/* Total Price */}
      <div className="flex items-center justify-between px-[16px] pb-[12px] pt-[12px]">
        <div className="text-[15px] font-medium text-gray8">Tổng tiền</div>
        <div className="flex items-center gap-[4px]">
          <div className="text-base font-normal text-gray5 line-through">
            {formatCurrency(340000)}
          </div>
          <div className="text-lg font-medium">{formatCurrency(240000)}</div>
        </div>
      </div>
      <Divider className="m-0" />
      {/* Buttons */}
      <div className="flex gap-[12px] px-[16px] pb-[20px] pt-[12px]">
        <Button
          text={
            <div className="text-[15px] font-medium text-primary5">
              Lưu nháp
            </div>
          }
          className="h-[37px] rounded-[40px] bg-primary1"
          onClick={onDraft}
        />
        <Button
          text={<div className="text-sm font-normal text-white">Đặt đơn</div>}
          className="h-[37px] rounded-[40px] bg-primary5"
          onClick={onPlaceOrder}
        />
      </div>
    </div>
  );
};

type Props = {
  onDraft?: () => void;
  onPlaceOrder?: () => void;
};
