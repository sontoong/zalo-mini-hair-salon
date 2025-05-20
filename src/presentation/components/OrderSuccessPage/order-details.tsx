import { Divider } from "antd";
import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import PaymentMethodIcon from "../../static/payment-method-icon.png";

const OrderDetails: FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] bg-surface p-[12px]">
      <div className="flex items-start gap-[24px]">
        <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
          Mã đơn
        </div>
        <div className="text-xs font-normal">12324</div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-start gap-[24px]">
        <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
          Trạng thái
        </div>
        {props.success ? (
          <div className="text-success4 text-xs font-medium">Đã thanh toán</div>
        ) : (
          <div className="text-xs font-medium text-error3">Đã huỷ đơn</div>
        )}
      </div>
      <Divider className="m-0" />
      <div className="flex items-start gap-[24px]">
        <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
          Địa chỉ
        </div>
        <div className="text-xs font-normal">
          12, Lý Thường Kiệt, Quận 4, Thành phố Hồ Chí Minh
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-start gap-[24px]">
        <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
          Dịch vụ
        </div>
        <div className="text-xs font-normal">1x Uốn tóc 2x Nhuộm tóc</div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-start gap-[24px]">
        <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
          Ghi chú
        </div>
        <div className="text-xs font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-start gap-[24px]">
        <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
          Tổng tiền
        </div>
        <div className="text-xs font-normal">{formatCurrency(240000)}</div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-start gap-[24px]">
        <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
          Đặt lịch
        </div>
        <div className="text-xs font-normal text-gray5">_ _</div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-start gap-[24px]">
        <div className="w-[85px] shrink-0 text-sm font-normal text-gray7">
          Phương thức thanh toán
        </div>
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
      <Divider className="m-0" />
      <div className="flex items-center gap-[24px]">
        <div className="w-[85px] shrink-0 text-sm font-normal text-gray7">
          Thời gian thanh toán
        </div>
        <div className="text-xs font-normal">12/04/2025</div>
      </div>
    </div>
  );
};

export default OrderDetails;

type Props = {
  success: boolean;
};
