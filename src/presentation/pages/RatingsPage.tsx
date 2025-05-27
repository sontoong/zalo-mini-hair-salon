import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import {
  RatingsPageFeedbacks,
  RatingsPageHighRatingServices,
  RatingsPageRatingChart,
} from "../components/RatingsPage";

const RatingsPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="relative">
              <div className="absolute left-[35%] top-1/2 -translate-y-1/2 text-lg font-medium">
                Đánh giá
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-surface pl-4"
        backIcon={
          <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
            <img src={ArrowLeftIcon} />
          </div>
        }
      />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-[20px] py-[12px]">
          <RatingsPageRatingChart />
          <RatingsPageHighRatingServices />
          <RatingsPageFeedbacks />
        </div>
      </div>
    </Page>
  );
};

export default RatingsPage;
