import React, { FC } from "react";
import HighRatingServiceImg from "../../static/high-rating-service.jpg";
import { StarFilled } from "@ant-design/icons";

const HighRatingServices = () => {
  return (
    <div className="flex flex-col gap-[12px] bg-[#F7F9FC] py-[8px]">
      <div className="px-[16px] text-[15px] font-medium">
        Dịch vụ đánh giá cao
      </div>
      <div className="flex gap-[12px] overflow-auto px-[16px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <HighRatingServiceItem key={index} />
        ))}
      </div>
    </div>
  );
};

const HighRatingServiceItem = () => {
  return (
    <div
      className="flex w-[140px] shrink-0 items-center gap-[8px] rounded-[8px] bg-white p-[8px]"
      style={{
        boxShadow:
          " 0px 0px 0.84px 0px #30497433, 0px 0.84px 4px -1px #2E4F8833",
      }}
    >
      <div className="size-[28px]">
        <img
          src={HighRatingServiceImg}
          alt=""
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="text-xs font-medium">Cắt tóc</div>
        <div className="flex gap-[2px]">
          <div className="text-neutral8 text-2xs font-normal">5</div>
          <StarFilled className="text-yellow5 text-2xs" />
          <div className="text-2xs font-normal text-neutral5">(21)</div>
        </div>
      </div>
    </div>
  );
};

export default HighRatingServices;
