import React, { FC, useState } from "react";
import { Icon, Modal, Picker } from "zmp-ui";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import { Form } from "../common/form";
import { Input } from "antd";
import ArrowDown from "../../static/arrow-down.png";

const CancelOrder: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleFinish() {
    setVisible(false);
    navigate("/order-cancel");
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      <Modal
        visible={visible}
        title={
          (
            <>
              <div className="text-balance text-lg font-medium">
                Xác nhận hủy đơn
              </div>
            </>
          ) as unknown as string
        }
        onClose={() => {
          setVisible(false);
        }}
        verticalActions
      >
        <Form form={form} onFinish={handleFinish}>
          <div className="flex flex-col gap-[12px]">
            <Form.Item
              name="reason"
              label={
                <div className="text-sm font-medium text-gray7">
                  Vui lòng chọn lý do huỷ đơn
                </div>
              }
              labelCol={{ className: "!pb-0" }}
              className="m-0"
            >
              <Picker
                mask
                maskClosable
                title="Chọn lý do"
                placeholder="Chọn lý do"
                suffix={
                  <img
                    src={ArrowDown}
                    className="mr-[12px] size-[14px] shrink-0"
                  />
                }
                data={[
                  {
                    options: [
                      {
                        key: "key1",
                        value: 1,
                        displayName: "abc",
                      },
                    ],
                    name: "option",
                  },
                ]}
                action={{
                  text: "Close",
                  close: true,
                }}
                inputClass="!text-sm !border-stroke3 !m-0"
                formatPickedValueDisplay={(value) => {
                  return value.option?.displayName;
                }}
              />
            </Form.Item>
            <Form.Item name="notes" noStyle>
              <Input.TextArea
                placeholder="Thêm note (nếu có)"
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </Form.Item>
            <div className="flex gap-[10px]">
              <Button
                text={<div className="text-sm font-medium">Hủy</div>}
                className="rounded-[4px] px-3 py-[10px]"
                onClick={handleCancel}
              />
              <Button
                text={
                  <div className="text-sm font-medium text-red5">Xác nhận</div>
                }
                className="rounded-[4px] px-3 py-[10px]"
                onClick={form.submit}
              />
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export { CancelOrder };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
