import React, { FC } from "react";
import { orders } from "../OrderListPage/order-list";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {orders.map((order, index) => (
        <React.Fragment key={index}>
          <OrderItem key={order.id} order={order} />
          {index != orders.length - 1 && <Divider className="m-0" />}
        </React.Fragment>
      ))}
    </div>
  );
};

const OrderItem: FC<{ order: any }> = ({ order }) => {
  const navigate = useNavigate();

  function goToOrderDetail() {
    navigate(`/orders/${order.id}`, { state: order });
  }

  return (
    <div className="flex flex-col gap-[8px]" onClick={goToOrderDetail}>
      <div className="flex justify-between">
        <div className="text-sm font-normal text-neutral6">Đơn #{order.id}</div>
        <div
          className="rounded-[20px] px-[6px] py-[4px]"
          style={{ background: order.type.bgColor }}
        >
          <div
            className="text-xs font-medium"
            style={{ color: order.type.color }}
          >
            {order.type.label}
          </div>
        </div>
      </div>
      <div className="text-base font-normal">1 x Cắt tóc, 2 x Uốn tóc</div>
      <div className="flex justify-between">
        <div className="text-neutral5 text-xs font-normal">
          6/11/2024 - 21/12/2024
        </div>
        <div className="text-xs font-medium text-neutral6">
          Tổng tiền:{" "}
          <span className="text-black">{formatCurrency(120000)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
