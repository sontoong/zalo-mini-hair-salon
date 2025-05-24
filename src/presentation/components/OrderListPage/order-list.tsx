import { Divider } from "antd";
import React from "react";
import ServiceImg from "../../static/service.jpg";
import { formatCurrency } from "../../utils/helpers";
import { orderTypes } from "../../constants/orderTypes";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  return (
    <div className="flex flex-col gap-[14px]">
      {data.map((order, index) => (
        <OrderListItem key={index} order={order} />
      ))}
    </div>
  );
};

const OrderListItem = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-[12px] rounded-[12px] bg-white p-[12px] shadow-md"
      onClick={() => navigate(`/orders/${order.id}`, { state: order })}
    >
      <div className="flex justify-between">
        <div className="text-xs font-normal">Đơn #{order.id}</div>
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
      <div className="flex flex-col gap-[4px]">
        {order.services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="flex gap-[8px] p-[6px]">
              <div className="size-[32px] overflow-hidden rounded-[3.2px]">
                <img
                  src={ServiceImg}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-xs font-normal">1 x {service.name}</div>
                <div className="text-xs font-normal text-gray8">
                  {service.product}
                </div>
              </div>
            </div>
            {index != order.services.length - 1 && <Divider className="m-0" />}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="text-xs font-normal text-gray6">
          Đặt lúc {order.time}
        </div>
        <div className="text-xs font-medium text-neutral6">
          Tổng tiền:{" "}
          <span className="text-black">{formatCurrency(order.totalprice)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

const data = [
  {
    id: "123434",
    type: orderTypes["Đơn nháp"],
    services: [
      { name: "Cắt tóc", product: "Dầu gội Pantin, Loại 1" },
      { name: "Duỗi tóc", product: "Dầu gội Pantin, Loại 1" },
    ],
    time: "12:00, 04/11/2024",
    totalprice: 120000,
  },
  {
    id: "123434",
    type: orderTypes["Chờ thực hiện"],
    services: [
      { name: "Cắt tóc", product: "Dầu gội Pantin, Loại 1" },
      { name: "Duỗi tóc", product: "Dầu gội Pantin, Loại 1" },
    ],
    time: "12:00, 04/11/2024",
    totalprice: 120000,
  },
  {
    id: "123434",
    type: orderTypes["Chờ xác nhận"],
    services: [
      { name: "Cắt tóc", product: "Dầu gội Pantin, Loại 1" },
      { name: "Duỗi tóc", product: "Dầu gội Pantin, Loại 1" },
    ],
    time: "12:00, 04/11/2024",
    totalprice: 120000,
  },
  {
    id: "123434",
    type: orderTypes["Đã hoàn thành"],
    services: [
      { name: "Cắt tóc", product: "Dầu gội Pantin, Loại 1" },
      { name: "Duỗi tóc", product: "Dầu gội Pantin, Loại 1" },
    ],
    time: "12:00, 04/11/2024",
    totalprice: 120000,
  },
  {
    id: "123434",
    type: orderTypes["Đã hủy"],
    services: [
      { name: "Cắt tóc", product: "Dầu gội Pantin, Loại 1" },
      { name: "Duỗi tóc", product: "Dầu gội Pantin, Loại 1" },
    ],
    time: "12:00, 04/11/2024",
    totalprice: 120000,
  },
];
