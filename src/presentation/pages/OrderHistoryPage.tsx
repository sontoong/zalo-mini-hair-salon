import React, { useState } from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import SearchIcon from "../static/search-icon.png";
import { Button } from "../components/common/button";
import {
  OrderHistoryOrderList,
  OrderHistoryPageFilters,
} from "../components/OrderHistoryPage";

const OrderHistoryPage = () => {
  const [enableSearch, setEnableSearch] = useState<boolean>(false);

  console.log(enableSearch);

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className="flex justify-between pl-[25%]">
              <div className="text-lg font-medium">Lịch sử hoạt động</div>
              <Button.Icon
                icon={<img src={SearchIcon} className="size-[24px]" />}
                onClick={() => setEnableSearch((prev) => !prev)}
              />
            </div>
          ) as unknown as string
        }
        className="topbar h-auto flex-none !bg-surface pl-4"
        backIcon={
          <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
            <img src={ArrowLeftIcon} />
          </div>
        }
      />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-[20px] px-[16px] py-[12px]">
          <OrderHistoryPageFilters enableSearch={enableSearch} />
          <OrderHistoryOrderList />
        </div>
      </div>
    </Page>
  );
};

export default OrderHistoryPage;
