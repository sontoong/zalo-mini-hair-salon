import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left.png";
import { OrderPageOrderForm } from "../components/OrderPage";
import { Divider } from "antd";

const OrderPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="relative">
              <div className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium">
                Đặt đơn
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none border-b-[4px] border-stroke1 pl-4"
        backIcon={
          <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
            <img src={ArrowLeftIcon} />
          </div>
        }
      />
      <div className="flex-1 overflow-auto">
        <div className="pb-6">
          <OrderPageOrderForm />
        </div>
      </div>
    </Page>
  );
};

export default OrderPage;
