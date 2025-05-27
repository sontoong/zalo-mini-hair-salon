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

const OrderForm: FC<Props> = ({ order }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const type = order.type.label as keyof typeof orderTypes;

  function onFormFinish() {
    switch (type) {
      case "Đơn nháp":
        navigate("/order-success");
        break;

      case "Chờ thực hiện":
        navigate("/rate", { state: order });
        break;

      case "Chờ xác nhận":
        navigate("/rate", { state: order });
        break;

      case "Đã hoàn thành":
        navigate("/rate", { state: order });
        break;

      case "Đã hủy":
        navigate("/order");
        break;

      default:
        break;
    }
  }

  const initialValues = {
    time: dayjs(),
  };

  return (
    <Form form={form} initialValues={initialValues} onFinish={onFormFinish}>
      <div className="flex flex-col gap-[20px] pb-[150px] pt-[12px]">
        <div className="flex flex-col gap-[12px]">
          <Progress type={type} />
          <Form.Item name="time" noStyle>
            <TimePicker />
          </Form.Item>
        </div>
        <Divider className="border-stroke1a m-0 border-[2px]" />
        <Summary />
        <Divider className="border-stroke1a m-0 border-[2px]" />
        <PaymentMethod />
        <Footer type={type} onSubmit={form.submit} />
      </div>
    </Form>
  );
};

export default OrderForm;

type Props = {
  order: any;
};
