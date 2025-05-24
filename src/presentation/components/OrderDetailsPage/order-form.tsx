import React, { FC } from "react";
import { Form } from "../common/form";
import { Divider } from "antd";
import { Footer } from "./footer";
import { useNavigate } from "react-router-dom";
import { Summary } from "./summary";
import { PaymentMethod } from "./payment-method";
import { TimePicker } from "./time-picker";
import dayjs from "dayjs";
import { Progress } from "./progress";
import { orderTypes } from "../../constants/orderTypes";

const OrderForm: FC<Props> = ({ type }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  function onFormFinish() {
    navigate("/order-success");
  }

  const initialValues = {
    time: dayjs(),
  };

  return (
    <Form form={form} initialValues={initialValues} onFinish={onFormFinish}>
      <div className="flex flex-col gap-[20px] pb-[150px]">
        <Divider className="m-0 border-[2px] border-stroke1" />
        <div className="flex flex-col gap-[12px]">
          <Progress type={type} />
          <Form.Item name="time" noStyle>
            <TimePicker />
          </Form.Item>
        </div>
        <Divider className="m-0 border-[2px] border-stroke1" />
        <Summary />
        <Divider className="m-0 border-[2px] border-stroke1" />
        <PaymentMethod />
        <Footer type={type} onDraft={() => {}} onPlaceOrder={form.submit} />
      </div>
    </Form>
  );
};

export default OrderForm;

type Props = {
  type: keyof typeof orderTypes;
};
