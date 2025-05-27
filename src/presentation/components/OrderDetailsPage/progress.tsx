import React, { FC } from "react";
import { orderTypes } from "../../constants/orderTypes";
import { Divider } from "antd";
import ClockIcon from "../../static/clock.png";
import OrderWaiting from "../../static/order-waiting.png";
import OrderConfirming from "../../static/order-confirming.png";
import OrderComplete from "../../static/order-complete.png";
import OrderCancel from "../../static/order-cancel.png";
import ChevronDown from "../../static/chevron-down.png";
import NoteText from "../../static/note-text.png";
import Rate from "../common/rate";

export const Progress: FC<{ type: keyof typeof orderTypes }> = ({ type }) => {
  if (type === "Đơn nháp") {
    return null;
  }

  if (type === "Chờ thực hiện") {
    return (
      <>
        <div className="flex items-center justify-between px-[16px]">
          <div className="flex flex-col gap-[12px]">
            <div className="text-lg font-medium text-infor3">
              Đang chờ thực hiện
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="size-[18px]">
                <img
                  src={ClockIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-sm font-normal text-neutral6">
                Đã đặt: 06:00, 12/05/2025
              </div>
            </div>
          </div>
          <div className="size-[48px]">
            <img src={OrderWaiting} alt="" className="size-full object-cover" />
          </div>
        </div>
        <Divider className="border-stroke1a m-0 border-[2px]" />
      </>
    );
  }

  if (type === "Chờ xác nhận") {
    return (
      <>
        <div className="flex items-center justify-between px-[16px]">
          <div className="flex flex-col gap-[12px]">
            <div className="text-lg font-medium text-alert4">
              Đang chờ xác nhận
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="size-[18px]">
                <img
                  src={ClockIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-sm font-normal text-neutral6">
                Đã đặt: 06:00, 12/05/2025
              </div>
            </div>
          </div>
          <div className="size-[48px]">
            <img
              src={OrderConfirming}
              alt=""
              className="size-full object-cover"
            />
          </div>
        </div>
        <Divider className="border-stroke1a m-0 border-[2px]" />
      </>
    );
  }

  if (type === "Đã hoàn thành") {
    return (
      <>
        <div className="flex items-center justify-between px-[16px]">
          <div className="flex flex-col gap-[12px]">
            <div className="text-lg font-medium text-success4">
              Đơn đã hoàn thành
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="size-[18px]">
                <img
                  src={ClockIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-sm font-normal text-neutral6">
                Đã đặt: 06:00, 12/05/2025
              </div>
            </div>
          </div>
          <div className="size-[48px]">
            <img
              src={OrderComplete}
              alt=""
              className="size-full object-cover"
            />
          </div>
        </div>
        <Rate className="px-[16px] text-[16px]" disabled />
        <div className="flex flex-col gap-[12px] px-[16px]">
          <div className="flex gap-[8px]">
            <div className="h-[18px] rounded-[12px] border border-stroke3 px-[8px] text-xs font-normal text-gray8">
              Dịch vụ tốt
            </div>
            <div className="h-[18px] rounded-[12px] border border-stroke3 px-[8px] text-xs font-normal text-gray8">
              Nhân viên nhiệt tình
            </div>
          </div>
        </div>
        <div className="flex items-end px-[16px]">
          <div className="flex gap-[4px]">
            <div className="size-[20px] shrink-0">
              <img src={NoteText} alt="" className="size-full object-cover" />
            </div>
            <div className="text-xs font-normal">
              Ghi chú: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod
            </div>
          </div>
          <div className="size-[20px] shrink-0">
            <img src={ChevronDown} alt="" className="size-full object-cover" />
          </div>
        </div>
        <Divider className="border-stroke1a m-0 border-[2px]" />
      </>
    );
  }

  if (type === "Đã hủy") {
    return (
      <>
        <div className="flex items-center justify-between px-[16px]">
          <div className="flex flex-col gap-[12px]">
            <div className="text-lg font-medium text-error3">
              Đã huỷ đơn hàng
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="size-[18px]">
                <img
                  src={ClockIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-sm font-normal text-neutral6">
                Đã hủy: 06:00, 12/05/2025
              </div>
            </div>
          </div>
          <div className="size-[48px]">
            <img src={OrderCancel} alt="" className="size-full object-cover" />
          </div>
        </div>
        <div className="flex gap-[8px] px-[16px]">
          <div className="text-sm font-medium text-neutral8">Lý do hủy:</div>
          <div className="h-[18px] rounded-[12px] border border-stroke3 px-[8px] text-xs font-normal text-gray8">
            Đổi lịch
          </div>
        </div>
        <div className="flex items-end gap-[12px] px-[16px]">
          <div className="flex gap-[4px]">
            <div className="size-[20px] shrink-0">
              <img src={NoteText} alt="" className="size-full object-cover" />
            </div>
            <div className="text-xs font-normal">
              Ghi chú: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod
            </div>
          </div>
          <div className="size-[20px] shrink-0">
            <img src={ChevronDown} alt="" className="size-full object-cover" />
          </div>
        </div>
        <Divider className="border-stroke1a m-0 border-[2px]" />
      </>
    );
  }

  return null;
};
