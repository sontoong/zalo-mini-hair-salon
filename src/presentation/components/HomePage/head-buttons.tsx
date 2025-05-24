import React from "react";
import StarIcon from "../../static/ic_round-star.png";
import ChevronRightIcon from "../../static/chevron-right.png";
import MessageIcon from "../../static/messages-3.png";

const HeadButtons = () => {
  return (
    <div className="flex items-center gap-[12px] rounded-t-[20px] bg-white px-[16px] pb-[12px] pt-[20px]">
      {/* Ratings */}
      <div
        className="flex h-[36px] w-fit items-center justify-between rounded-[24px] px-[12px]"
        style={{
          boxShadow:
            "0px 0px 0.84px 0px rgba(48, 73, 116, 0.2), 0px 0.84px 4px -1px rgba(46, 79, 136, 0.12)",
        }}
      >
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[4px]">
            <div className="size-[24px]">
              <img src={StarIcon} alt="" className="size-full object-contain" />
            </div>
            <div className="text-lg font-medium">4.8</div>
          </div>
          <div className="text-sm font-normal text-neutral6">
            (120 đánh giá)
          </div>
        </div>
        {/* <div className="size-[20px]">
          <img src={ChevronRightIcon} alt="" className="size-full object-cover" />
        </div> */}
      </div>
      {/* Chat */}
      <div
        className="p flex h-[36px] w-fit items-center gap-[8px] rounded-[24px] px-[8px]"
        style={{
          boxShadow:
            "0px 0px 0.84px 0px rgba(48, 73, 116, 0.2), 0px 0.84px 4px -1px rgba(46, 79, 136, 0.12)",
        }}
      >
        <div className="size-[24px]">
          <img src={MessageIcon} alt="" className="size-full object-cover" />
        </div>
        <div className="text-sm font-normal text-neutral6">Chat với tôi</div>
      </div>
    </div>
  );
};

export default HeadButtons;
