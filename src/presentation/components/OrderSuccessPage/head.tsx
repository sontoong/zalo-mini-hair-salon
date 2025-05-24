import React, { FC } from "react";
import CheckMarkImg from "../../static/success-checkmark.png";
import CrossImg from "../../static/order-fail-cross.png";
import MessageIcon from "../../static/messages-3.png";
import { Button } from "../common/button";

const Head: FC<Props> = (props) => {
  if (props.success) {
    return (
      <div className="flex flex-col items-center gap-[20px]">
        {/* Image */}
        <div className="size-[64px]">
          <img src={CheckMarkImg} alt="" className="size-full object-cover" />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-[8px]">
          <div className="text-center text-xl font-medium text-primary6">
            Đơn đã đặt thành công
          </div>
          <div className="text-balance text-center text-sm font-normal text-gray8">
            Vui lòng chờ Kiki Salon sắp xếp lịch hẹn. Tin nhắn xác nhận lịch sẽ
            gửi qua <span className="font-medium text-gray9">ZNS.</span>
          </div>
        </div>
        {/* Button */}
        <Button
          text={
            <div className="flex items-center gap-[4px]">
              <div className="size-[16px]">
                <img
                  src={MessageIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-[12px] font-normal">Liên hệ</div>
            </div>
          }
          className="rounded-[100px] bg-white px-[8px] py-[4px]"
          style={{ boxShadow: "0px 2px 8px 0px #0000001A" }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-[12px]">
      <div className="size-[64px]">
        <img src={CrossImg} alt="" className="size-full object-cover" />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-[12px]">
        <div className="text-center text-xl font-medium text-red5">
          Đơn đã bị hủy
        </div>
        <div className="text-center text-xs font-normal text-error3">
          *Số tiền đã thanh toán sẽ được tự động hoàn về tài khoản trong vòng 10
          phút.
        </div>
      </div>
      {/* Button */}
      <Button
        text={
          <div className="flex items-center gap-[4px]">
            <div className="size-[16px]">
              <img
                src={MessageIcon}
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="text-[12px] font-normal">Liên hệ</div>
          </div>
        }
        className="rounded-[100px] bg-white px-[8px] py-[4px]"
        style={{ boxShadow: "0px 2px 8px 0px #0000001A" }}
      />
    </div>
  );
};

export default Head;

type Props = {
  success: boolean;
};
