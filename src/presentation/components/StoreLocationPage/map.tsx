import React from "react";
import { Map } from "../common/map";
import { Collapse, CollapseProps, Divider } from "antd";
import ChevronDown from "../../static/chevron-down.png";
import clsx from "clsx";
import LocationIcon from "../../static/map-location-icon-blue.png";
import PhoneIcon from "../../static/phone-icon-blue.png";
import ChatIcon from "../../static/chat-icon-blue.png";
import LocateIcon from "../../static/map-locate-icon.png";
import ChevronRight from "../../static/chevron-right-blue.png";

const MapContainer = () => {
  return (
    <div className="h-[calc(100vh-126px)] w-full">
      <Map lat={51.505} long={-0.09} centerButton={false} />
      <div className="absolute inset-x-0 bottom-0 z-[9999]">
        <Collapse
          items={items}
          defaultActiveKey={1}
          ghost
          className="rounded-b-none rounded-t-[12px] border-none bg-white"
          expandIconPosition="end"
          expandIcon={({ isActive }) => (
            <img
              src={ChevronDown}
              className={clsx("size-[18px]", { "rotate-180": !isActive })}
            />
          )}
        />
      </div>
    </div>
  );
};

export default MapContainer;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex flex-col gap-[4px] pb-[20px]">
        <div className="text-sm font-normal text-secondary4">
          Salon tóc Kiki
        </div>
        <div className="text-xl font-medium">Đường 3/2</div>
      </div>
    ),
    children: (
      <div className="flex flex-col gap-[16px]">
        {/* Location */}
        <div className="flex items-center gap-[12px]">
          <div className="size-[32px]">
            <img src={LocationIcon} alt="" className="size-full object-cover" />
          </div>
          <div className="text-sm font-normal text-neutral8">
            324 Ba Tháng Hai, Quận 10, Hồ Chí Minh, Việt Nam
          </div>
          <div className="size-[20px]">
            <img src={LocateIcon} alt="" className="size-full object-cover" />
          </div>
        </div>
        <Divider className="m-0" />
        {/* Phone number */}
        <div className="flex items-center gap-[12px]">
          <div className="size-[32px]">
            <img src={PhoneIcon} alt="" className="size-full object-cover" />
          </div>
          <div className="text-sm font-normal text-neutral8">023439844</div>
        </div>
        <Divider className="m-0" />
        {/* Chat */}
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-[12px]">
            <div className="size-[32px]">
              <img src={ChatIcon} alt="" className="size-full object-cover" />
            </div>
            <div className="text-sm font-normal text-neutral8">
              Chat với chúng tôi
            </div>
          </div>
          <div className="size-[20px]">
            <img
              src={ChevronRight}
              alt=""
              className="size-full object-contain"
            />
          </div>
        </div>
      </div>
    ),
    styles: {
      header: {
        display: "flex",
        alignItems: "center",
        padding: "20px 16px 14px 16px",
      },
      body: {
        padding: "0 16px 40px",
      },
    },
  },
];
