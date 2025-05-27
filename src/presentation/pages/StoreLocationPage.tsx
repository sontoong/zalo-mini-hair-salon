import React from "react";
import { Header, Page } from "zmp-ui";
import { Button } from "../components/common/button";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import SearchIcon from "../static/search-icon.png";
import { StoreLocationPageMapContainer } from "../components/StoreLocationPage";

const StoreLocationPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className="flex justify-between pl-[36%]">
              <div className="text-lg font-medium">Địa điểm</div>
              <Button.Icon
                icon={<img src={SearchIcon} className="size-[24px]" />}
              />
            </div>
          ) as unknown as string
        }
        className="topbar h-auto flex-none !bg-white pl-4"
        backIcon={
          <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
            <img src={ArrowLeftIcon} />
          </div>
        }
      />
      <div className="flex-1 overflow-auto">
        <StoreLocationPageMapContainer />
      </div>
    </Page>
  );
};

export default StoreLocationPage;
