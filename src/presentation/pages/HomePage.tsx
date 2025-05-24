import React, { FC, useContext, useState } from "react";
import { Header, Page } from "zmp-ui";
import {
  HomePageCartButton,
  HomePageHeadButtons,
  HomePageHeader,
  HomePageServiceList,
} from "../components/HomePage";
import { Footer } from "../components/common/footer";
import Promotion from "../components/HomePage/promotion";

const HomePage: FC = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-[#fafbff]">
      <HomePageHeader />
      <div className="homepage-scroll-container flex-1 overflow-auto bg-white">
        <div className="relative h-[240px] w-full">
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.544) 0.45%, rgba(255, 255, 255, 0) 35.76%, rgba(255, 255, 255, 0) 77.29%, #FAFBFC 100%)",
            }}
          />
          <Promotion />
        </div>
        <div className="relative flex flex-col gap-[8px] pb-[100px] pt-[35px]">
          <div className="absolute inset-x-0 top-0 z-20 -translate-y-1/2">
            <HomePageHeadButtons />
          </div>
          <HomePageServiceList />
        </div>
        <HomePageCartButton />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
