import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import { useLocation } from "react-router-dom";
import { OrderDetailsPageOrderForm } from "../components/OrderDetailsPage";
import { orderTypes } from "../constants/orderTypes";

const OrderDetailsPage = () => {
  const { state } = useLocation();
  const order = state;

  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="relative">
              <div className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium">
                {order.type.label === orderTypes["Đơn nháp"].label
                  ? order.type.label
                  : `Đơn hàng #${order.id}`}
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none pl-4"
        backIcon={
          <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
            <img src={ArrowLeftIcon} />
          </div>
        }
      />
      <div className="flex-1 overflow-auto">
        <OrderDetailsPageOrderForm type={order.type.label} />
      </div>
    </Page>
  );
};

export default OrderDetailsPage;
