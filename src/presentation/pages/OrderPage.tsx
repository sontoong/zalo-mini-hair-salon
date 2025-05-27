import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import { OrderPageOrderForm } from "../components/OrderPage";

const OrderPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="relative">
              <div className="absolute left-[35%] top-1/2 -translate-y-1/2 text-lg font-medium">
                Đặt đơn
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border border-stroke1a h-auto flex-none border-b-[4px] pl-4"
        backIcon={
          <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
            <img src={ArrowLeftIcon} />
          </div>
        }
      />
      <div className="flex-1 overflow-auto">
        <OrderPageOrderForm />
      </div>
    </Page>
  );
};

export default OrderPage;
