import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Picker, Sheet } from "zmp-ui";
import CloseIcon from "../../static/close-icon.png";
import BagIcon from "../../static/bag-icon.png";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { formatCurrency } from "../../utils/helpers";
import { Divider, Input } from "antd";
import MinusIcon from "../../static/minus-icon.png";
import AddIcon from "../../static/add-icon.png";

const CartPopup: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = (value: any) => {
    console.log(value);
  };

  const initialValues = {
    totalQuantity: 0,
    products: data,
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px]">
                <div className="flex items-center gap-[12px]">
                  <div>Giỏ hàng</div>
                  <div
                    className="absolute right-0 ml-auto flex items-center gap-[8px]"
                    onClick={() => setVisible(false)}
                  >
                    <Button
                      text={
                        <div className="text-sm text-red5">Xoá giỏ hàng</div>
                      }
                    />
                    <div className="size-[12px]">
                      <img
                        src={CloseIcon}
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <Divider className="m-0 mt-[12px]" />
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
          height={"60vh"}
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
            className="flex-1 overflow-auto pt-[22px]"
          >
            <Form.Item name="totalQuantity" noStyle />
            <Form.List name="products">
              {(fields, { remove }) => (
                <div className="flex flex-col gap-[12px] overflow-auto px-[16px] pb-[150px]">
                  {/* Cart Item */}
                  {fields.map((field, index) => {
                    const itemIndex = field.name;
                    const item = form.getFieldValue("products")[itemIndex];

                    return (
                      <React.Fragment key={index}>
                        <div className="flex flex-col gap-[5px]">
                          <div className="flex flex-col gap-[3px]">
                            <div className="text-lg font-normal text-gray9">
                              {item.title}
                            </div>
                            <div className="text-[15px] font-normal text-gray8">
                              {item.product}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-normal">
                              {formatCurrency(item.price)}
                            </div>
                            <Form.Item
                              noStyle
                              shouldUpdate={(prevValues, curValues) =>
                                prevValues.products !== curValues.products
                              }
                            >
                              {() => {
                                const item =
                                  form.getFieldValue("products")[itemIndex];
                                return (
                                  <RemoveItemModal
                                    onAccept={() => remove(itemIndex)}
                                    item={item}
                                  >
                                    {({ open }) => (
                                      <div className="flex items-center gap-[16px]">
                                        <Button.Icon
                                          icon={<img src={MinusIcon} />}
                                          className="size-[24px] bg-primary1"
                                          onClick={() => {
                                            const currQuantity = item.quantity;
                                            const nextQuantity = Math.max(
                                              currQuantity - 1,
                                              0,
                                            );
                                            if (nextQuantity === 0) {
                                              open();
                                            } else {
                                              form.setFieldValue(
                                                [
                                                  "products",
                                                  itemIndex,
                                                  "quantity",
                                                ],
                                                nextQuantity,
                                              );
                                            }
                                          }}
                                        />
                                        <div className="text-[20px] font-medium">
                                          {item.quantity}
                                        </div>
                                        <Button.Icon
                                          icon={<img src={AddIcon} />}
                                          className="size-[24px] bg-primary4"
                                          onClick={() => {
                                            const currQuantity = item.quantity;
                                            const nextQuantity =
                                              currQuantity + 1;
                                            form.setFieldValue(
                                              [
                                                "products",
                                                itemIndex,
                                                "quantity",
                                              ],
                                              nextQuantity,
                                            );
                                          }}
                                        />
                                      </div>
                                    )}
                                  </RemoveItemModal>
                                );
                              }}
                            </Form.Item>
                          </div>
                        </div>
                        {index < fields.length - 1 ? (
                          <Divider className="m-0" />
                        ) : null}
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </Form.List>
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
                    prevValues.totalQuantity !== curValues.totalQuantity
                  }
                >
                  {() => (
                    <div className="flex items-center gap-[16px]">
                      <Button.Icon
                        icon={<img src={MinusIcon} />}
                        className="size-[24px] bg-primary1"
                        onClick={() => {
                          const currQuantity =
                            form.getFieldValue("totalQuantity");
                          const nextQuantity = Math.max(currQuantity - 1, 0);
                          form.setFieldValue("totalQuantity", nextQuantity);
                        }}
                      />
                      <div className="text-[20px] font-medium">
                        {form.getFieldValue("totalQuantity")}
                      </div>
                      <Button.Icon
                        icon={<img src={AddIcon} />}
                        className="size-[24px] bg-primary4"
                        onClick={() => {
                          const currQuantity =
                            form.getFieldValue("totalQuantity");
                          form.setFieldValue("totalQuantity", currQuantity + 1);
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[12px]">
                        <div className="size-[20px]">
                          <img
                            src={BagIcon}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="text-[15px] font-medium text-white">
                          2 dịch vụ
                        </div>
                      </div>
                      <div className="text-[15px] font-medium text-white">
                        {formatCurrency(240000)}
                      </div>
                    </div>
                  }
                  prefix=""
                  className="h-[37px] rounded-[40px] bg-primary5 px-[24px] py-[8px]"
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

const CartOpenButton = () => {
  return (
    <CartPopup>
      {({ open }) => (
        <div
          className="fixed inset-x-[16px] bottom-[85px] z-[999] flex items-center justify-between rounded-[12px] bg-white p-[12px]"
          onClick={open}
          style={{ boxShadow: "0px 4px 18px 0px #5655552B" }}
        >
          <div className="flex items-center gap-[12px]">
            <div className="flex size-[32px] items-center justify-center rounded-full bg-infor1">
              <div className="text-base font-semibold text-infor4">2</div>
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

const RemoveItemModal: FC<Props & { onAccept: () => void; item: any }> = ({
  children,
  onAccept,
  item,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleAccept() {
    onAccept();
    setVisible(false);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          visible={visible}
          title={
            (
              <div className="text-center text-lg font-medium">
                Bạn chắc chắn xoá khỏi giỏ hàng?
              </div>
            ) as unknown as string
          }
          onClose={() => {
            setVisible(false);
          }}
          verticalActions
          zIndex={9999}
          maskClassName="!z-[9999]"
        >
          <div className="flex flex-col gap-[12px]">
            <div className="text-center">
              <span className="text-sm font-normal text-gray8">
                1x Dịch vụ{" "}
              </span>
              <span className="text-sm font-normal">{item.title}</span>
            </div>
            <div className="flex gap-[10px]">
              <Button
                text={<div className="text-sm font-medium text-gray7">Hủy</div>}
                className="rounded-[4px] px-3 py-[10px]"
                onClick={handleCancel}
              />
              <Button
                text={<div className="text-sm font-medium text-red5">Xóa</div>}
                className="rounded-[4px] px-3 py-[10px]"
                onClick={handleAccept}
              />
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export default CartOpenButton;

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const data = [
  {
    title: "Nhuộm tóc",
    product: "Dầu gội Pantin, Loại 1",
    price: 50000,
    quantity: 2,
  },
  {
    title: "Uốn tóc",
    product: "Dầu gội Pantin, Loại 1",
    price: 50000,
    quantity: 1,
  },
];
