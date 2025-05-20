import React, { FC, useContext, useState } from "react";
import { Header, Page } from "zmp-ui";
import Banner from "../static/homepage-banner.png";
import {
  HomePageCartButton,
  HomePageHeadButtons,
  HomePageServiceList,
} from "../components/HomePage";
import { Footer } from "../components/common/footer";
import Promotion from "../components/HomePage/promotion";

const HomePage: FC = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-[#fafbff]">
      <div className="relative">
        <Header
          title={
            (
              <div className="h-[240px] w-full">
                <div
                  className="pointer-events-none absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.544) 0.45%, rgba(255, 255, 255, 0) 35.76%, rgba(255, 255, 255, 0) 77.29%, #FAFBFC 100%)",
                  }}
                />
                {/* <img
                  src={Banner}
                  alt=""
                  className="size-full object-cover"
                  style={{ objectPosition: "0 -25px" }}
                /> */}
                <Promotion />
              </div>
            ) as unknown as string
          }
          className="topbar no-border h-auto flex-none !p-0"
          showBackIcon={false}
          textColor="white"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
          <HomePageHeadButtons />
        </div>
      </div>
      <div className="relative flex-1 overflow-auto bg-white">
        <div className="flex flex-col gap-[8px] pb-[100px] pt-[35px]">
          <HomePageServiceList />
        </div>
        <HomePageCartButton />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
