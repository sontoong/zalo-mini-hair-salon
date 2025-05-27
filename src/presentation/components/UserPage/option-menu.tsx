import React from "react";
import ChevronRight from "../../static/chevron-right.png";
import UserIconBlue from "../../static/user-icon-blue.png";
import OrderHistoryIconBlue from "../../static/order-history-icon-blue.png";
import LocationIconBlue from "../../static/location-icon-blue.png";
import OAIconBlue from "../../static/OA-icon-blue.png";
import ExportIconBlue from "../../static/export-icon-blue.png";
import { Switch } from "../common/switch";
import { useNavigate } from "react-router-dom";

const OptionMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Account info */}
      <div
        className="border-stroke1a flex items-center justify-between border-b p-[16px]"
        onClick={() => navigate("/profile/account")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="size-[24px]">
            <img src={UserIconBlue} alt="" className="size-full object-cover" />
          </div>
          <div className="text-sm font-normal">Thông tin tài khoản</div>
        </div>
        <div className="size-[20px]">
          <img src={ChevronRight} alt="" className="size-full object-cover" />
        </div>
      </div>
      {/* Order history */}
      <div
        className="border-stroke1a flex items-center justify-between border-b p-[16px]"
        onClick={() => navigate("/order-history")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="size-[24px]">
            <img
              src={OrderHistoryIconBlue}
              alt=""
              className="size-full object-cover"
            />
          </div>
          <div className="text-sm font-normal">Lịch sử đơn hàng</div>
        </div>
        <div className="size-[20px]">
          <img src={ChevronRight} alt="" className="size-full object-cover" />
        </div>
      </div>
      {/* Location */}
      <div
        className="border-stroke1a flex items-center justify-between border-b p-[16px]"
        onClick={() => navigate("/store-location")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="size-[24px]">
            <img
              src={LocationIconBlue}
              alt=""
              className="size-full object-cover"
            />
          </div>
          <div className="text-sm font-normal">Địa điểm tiệm</div>
        </div>
        <div className="size-[20px]">
          <img src={ChevronRight} alt="" className="size-full object-cover" />
        </div>
      </div>
      {/* Follow OA */}
      <div className="border-stroke1a flex items-center justify-between border-b p-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="size-[24px]">
            <img src={OAIconBlue} alt="" className="size-full object-cover" />
          </div>
          <div className="text-sm font-normal">Quan tâm OA</div>
        </div>
        <Switch defaultChecked color="#00BFFF" />
      </div>
      {/* Log out */}
      <div className="flex items-center justify-between p-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="size-[24px]">
            <img
              src={ExportIconBlue}
              alt=""
              className="size-full object-cover"
            />
          </div>
          <div className="text-sm font-normal">Đăng xuất</div>
        </div>
        <div className="size-[20px]">
          <img src={ChevronRight} alt="" className="size-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default OptionMenu;
