import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import { Button } from "../common/button";
import { orderTypes } from "../../constants/orderTypes";

export const Footer: FC<Props> = ({ onPlaceOrder, type }) => {
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
      <div className="flex px-[16px] pb-[20px] pt-[12px]">
        <FooterButton type={type} onPlaceOrder={onPlaceOrder} />
      </div>
    </div>
  );
};

const FooterButton: FC<{
  type: keyof typeof orderTypes;
  onPlaceOrder?: () => void;
}> = ({ type, onPlaceOrder }) => {
  console.log(type);
  if (type === "Đơn nháp") {
    return (
      <Button
        text={<div className="text-sm font-normal text-white">Đơn nháp</div>}
        className="h-[37px] rounded-[40px] bg-primary5"
        onClick={onPlaceOrder}
      />
    );
  }

  if (type === "Đã hủy") {
    return (
      <Button
        text={<div className="text-sm font-medium text-primary6">Đặt lại</div>}
        className="h-[37px] rounded-[40px] border-[1.5px] border-primary5 bg-white"
        onClick={onPlaceOrder}
      />
    );
  }

  return (
    <Button
      text={
        <div className="text-sm font-medium text-primary6">
          Đánh giá đơn hàng
        </div>
      }
      className="h-[37px] rounded-[40px] border-[1.5px] border-primary5 bg-white"
      onClick={onPlaceOrder}
    />
  );
};

type Props = {
  onDraft?: () => void;
  onPlaceOrder?: () => void;
  type: keyof typeof orderTypes;
};
