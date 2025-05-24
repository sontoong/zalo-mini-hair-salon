import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "zmp-ui";
import CloseIcon from "../../static/close-icon.png";
import SuccessCheckmark from "../../static/success-checkmark.png";
import MessageIcon from "../../static/messages-3.png";
import { Divider } from "antd";

const SuccessModal: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          visible={visible}
          title={
            (
              <div
                className="absolute right-[20px] top-[20px]"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <img src={CloseIcon} alt="" />
              </div>
            ) as unknown as string
          }
          onClose={() => {
            setVisible(false);
          }}
          modalStyle={{ borderRadius: "24px" }}
          verticalActions
          zIndex={9999}
          maskClassName="!z-[9999]"
        >
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col items-center gap-[12px]">
              <div className="size-[64px]">
                <img
                  src={SuccessCheckmark}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-[8px] text-center">
                <div className="text-xl font-medium text-primary6">
                  Bạn đã đặt lịch thành công
                </div>
                <div className="text-sm font-normal text-gray8">
                  Vui lòng chờ Kiki Salon sắp xếp lịch hẹn. Tin nhắn xác nhận
                  lịch sẽ gửi qua{" "}
                  <span className="font-medium text-gray9">ZNS.</span>
                </div>
                <div
                  className="flex w-fit items-center gap-[4px] rounded-[100px] px-[8px] py-[4px]"
                  style={{ boxShadow: "0px 2px 8px 0px #0000001A" }}
                >
                  <div className="size-[16px]">
                    <img
                      src={MessageIcon}
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="text-xs font-normal">Liên hệ</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] rounded-[12px] bg-surface p-[12px]">
              <div className="flex gap-[24px]">
                <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
                  Dịch vụ
                </div>
                <div className="text-xs font-normal">Làm tóc, Làm móng</div>
              </div>
              <Divider className="m-0" />
              <div className="flex gap-[24px]">
                <div className="w-[80px] shrink-0 text-sm font-normal text-gray7">
                  Thời gian
                </div>
                <div className="text-xs font-normal">7:00, Ngày 6/11/2024</div>
              </div>
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export default SuccessModal;

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
