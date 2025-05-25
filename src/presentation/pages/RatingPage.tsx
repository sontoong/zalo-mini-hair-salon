import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import { RatingPageRatingContainer } from "../components/RatingPage";

const RatingPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="relative">
              <div className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium">
                Đánh giá
              </div>
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
        <RatingPageRatingContainer />
      </div>
    </Page>
  );
};

export default RatingPage;
