import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/close-icon.png";
import BagIcon from "../../static/bag-icon.png";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import MinusIcon from "../../static/minus-icon.png";
import AddIcon from "../../static/add-icon.png";

const CartPopup: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = (value: any) => {
    console.log(value);
  };

  const initialValues = {
    quantity: 0,
    notes: "",
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] flex items-center">
                <div>Giỏ hàng</div>
                <div
                  className="absolute right-0 ml-auto size-[12px]"
                  onClick={() => setVisible(false)}
                >
                  <img
                    src={CloseIcon}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
          }}
          mask
          handler={false}
          unmountOnClose
          height={"50vh"}
          style={{
            background: "#FFF",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={initialValues}
            className="flex-1 overflow-auto"
          >
            <Form.Item name="quantity" hidden />
            <div className="px-[16px]">abc</div>
            {/* Footer */}
            <div
              className="fixed inset-x-0 bottom-0 flex flex-col bg-white"
              style={{ boxShadow: "0px -2px 12px 0px #0000000F" }}
            >
              {/* Total Price */}
              <div className="flex items-center justify-between px-[16px] pb-[20px] pt-[12px]">
                <div className="text-[15px] font-medium text-gray8">
                  Tổng tiền
                </div>
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.quantity !== curValues.quantity
                  }
                >
                  {() => (
                    <div className="flex items-center gap-[16px]">
                      <Button.Icon
                        icon={<img src={MinusIcon} />}
                        className="size-[24px] bg-primary1"
                        onClick={() => {
                          const currQuantity = form.getFieldValue("quantity");
                          const nextQuantity = Math.max(currQuantity - 1, 0);
                          form.setFieldValue("quantity", nextQuantity);
                        }}
                      />
                      <div className="text-[20px] font-medium">
                        {form.getFieldValue("quantity")}
                      </div>
                      <Button.Icon
                        icon={<img src={AddIcon} />}
                        className="size-[24px] bg-primary4"
                        onClick={() => {
                          const currQuantity = form.getFieldValue("quantity");
                          form.setFieldValue("quantity", currQuantity + 1);
                        }}
                      />
                    </div>
                  )}
                </Form.Item>
                <div className="text-lg font-medium">
                  {formatCurrency(240000)}
                </div>
              </div>
              <Divider className="m-0" />
              {/* Buttons */}
              <div className="flex gap-[12px] px-[16px] pb-[20px] pt-[12px]">
                <Button
                  text={
                    <div className="text-[15px] font-medium text-primary5">
                      Bỏ qua
                    </div>
                  }
                  className="h-[37px] rounded-[40px] border-[1.5px] border-primary5"
                  onClick={() => setVisible(false)}
                />
                <Button
                  text={
                    <div className="text-sm font-normal text-white">
                      Xác nhận
                    </div>
                  }
                  className="h-[37px] rounded-[40px] bg-primary5"
                  onClick={form.submit}
                />
              </div>
            </div>
          </Form>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

const CartButton = () => {
  return (
    <CartPopup>
      {({ open }) => (
        <div
          className="fixed inset-x-[16px] bottom-[85px] z-[999] flex items-center justify-between rounded-[12px] bg-white p-[12px]"
          onClick={open}
          style={{ boxShadow: "0px 4px 18px 0px #5655552B" }}
        >
          <div className="flex items-center gap-[12px]">
            <div className="bg-infor1 flex size-[32px] items-center justify-center rounded-full">
              <div className="text-infor4 text-base font-semibold">2</div>
            </div>
            <div className="text-[15px] font-medium">dịch vụ</div>
          </div>
          <div className="flex items-center gap-[10px] rounded-[8px] bg-[#00BFFF] p-[8px]">
            <div className="size-[20px]">
              <img src={BagIcon} className="size-full" />
            </div>
            <div className="text-[15px] font-medium text-white">
              {formatCurrency(240000)}
            </div>
          </div>
        </div>
      )}
    </CartPopup>
  );
};

export default CartButton;

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
