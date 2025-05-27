import React from "react";
import { Form } from "../common/form";
import { TimePicker } from "./time-picker";
import { Divider } from "antd";
import { Summary } from "./summary";
import { PaymentMethod } from "./payment-method";
import { Footer } from "./footer";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  function onFormFinish() {
    navigate("/order-success");
  }

  return (
    <Form form={form} onFinish={onFormFinish}>
      <div className="flex flex-col gap-[20px]">
        <Form.Item name="time" noStyle>
          <TimePicker />
        </Form.Item>
        <Divider className="border-stroke1a m-0 border-[2px]" />
        <Summary />
        <Divider className="border-stroke1a m-0 border-[2px]" />
        <PaymentMethod />
        <Footer onDraft={() => {}} onPlaceOrder={form.submit} />
      </div>
    </Form>
  );
};

export default OrderForm;
